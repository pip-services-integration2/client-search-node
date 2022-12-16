import { Descriptor } from 'pip-services3-commons-nodex';
import { ConfigParams } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';
import { ConsoleLogger } from 'pip-services3-components-nodex';

import { SearchMemoryPersistence } from 'service-search-node';
import { SearchController } from 'service-search-node';
import { SearchCommandableHttpServiceV1 } from 'service-search-node';
import { SearchCommandableHttpClientV1 } from '../../src/version1/SearchCommandableHttpClientV1';
import { SearchClientFixtureV1 } from './SearchClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('SearchCommandableHttpServiceV1', () => {
    let service: SearchCommandableHttpServiceV1;
    let client: SearchCommandableHttpClientV1;
    let fixture: SearchClientFixtureV1;

    setup(async () => {
        let logger = new ConsoleLogger();
        let persistence = new SearchMemoryPersistence();
        let controller = new SearchController();

        service = new SearchCommandableHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('service-search', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('service-search', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('service-search', 'service', 'commandable-http', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new SearchCommandableHttpClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new SearchClientFixtureV1(client);

        await service.open(null);
        await client.open(null);
    });

    teardown(async () => {
        await client.close(null);
        await service.close(null);
    });

    test('CRUD Operations', async () => {
        await fixture.testCrudOperations();
    });

    test('Get with Filters', async () => {
        await fixture.testGetWithFilters();
    });
    
    test('Sorting', async () => {
        await fixture.testSorting();
    });
});

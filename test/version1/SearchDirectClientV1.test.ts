import { Descriptor } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';
import { ConsoleLogger } from 'pip-services3-components-nodex';

import { SearchMemoryPersistence } from 'service-search-node';
import { SearchController } from 'service-search-node';
import { SearchDirectClientV1 } from '../../src/version1/SearchDirectClientV1';
import { SearchClientFixtureV1 } from './SearchClientFixtureV1';

suite('SearchDirectClientV1', () => {
    let client: SearchDirectClientV1;
    let fixture: SearchClientFixtureV1;

    setup(async () => {
        let logger = new ConsoleLogger();
        let persistence = new SearchMemoryPersistence();
        let controller = new SearchController();

        let references: References = References.fromTuples(
            new Descriptor('pip-services-commons', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('service-search', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('service-search', 'controller', 'default', 'default', '1.0'), controller,
        );
        controller.setReferences(references);

        client = new SearchDirectClientV1();
        client.setReferences(references);

        fixture = new SearchClientFixtureV1(client);

        await client.open(null);
    });

    teardown(async () => {
        await client.close(null);
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

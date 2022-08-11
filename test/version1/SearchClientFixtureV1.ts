const assert = require('chai').assert;

import { PagingParams, FilterParams, SortParams, SortField } from 'pip-services3-commons-nodex';

import { SearchRecordV1 } from '../../src/version1/SearchRecordV1';
import { ISearchClientV1 } from '../../src/version1/ISearchClientV1';
import { TestModel } from '../data/TestModel';

const RECORD1: SearchRecordV1 = TestModel.createSearchRecord1();
const RECORD2: SearchRecordV1 = TestModel.createSearchRecord2();
const RECORD3: SearchRecordV1 = TestModel.createSearchRecord3();

export class SearchClientFixtureV1 {
    private _client: ISearchClientV1;
    private _timeout: number;

    constructor(client: ISearchClientV1, timeout: number = 0) {
        this._client = client;
        this._timeout = timeout;
    }

    private async testCreateSearch() {
        // Create the first record
        let record = await this._client.setRecord(null, RECORD1);

        assert.isObject(record);
        TestModel.assertEqualSearchRecord(RECORD1, record);

        // Create the second record
        record = await this._client.setRecord(null, RECORD2);

        assert.isObject(record);
        TestModel.assertEqualSearchRecord(RECORD2, record);

        // Create the third record
        record = await this._client.setRecord(null, RECORD3);

        assert.isObject(record);
        TestModel.assertEqualSearchRecord(RECORD3, record);
    }

    public async testCrudOperations() {
        let record1: SearchRecordV1;

        // Create items
        await this.testCreateSearch();
        await new Promise(r => setTimeout(r, this._timeout));

        // Get all records
        let page = await this._client.getRecords(null, new FilterParams(), new PagingParams(), new SortParams());

        assert.isObject(page);
        assert.lengthOf(page.data, 3);

        record1 = page.data[0];

        // Update the record
        record1.name = 'New Name';

        let record = await this._client.updateRecord(null, record1);

        assert.isObject(record);
        assert.equal(record1.id, record.id);
        assert.equal('New Name', record.name);

        // Delete the record
        record = await this._client.deleteRecordById(null, record1.id);

        assert.isObject(record);
        assert.equal(record1.id, record.id);

        // Try to get deleted record
        record = await this._client.getRecordById(null, record1.id);

        assert.isNull(record || null);
    }

    public async testGetWithFilters() {
        // Create items
        await this.testCreateSearch();
        await new Promise(r => setTimeout(r, this._timeout));

        // Filter by id
        let page = await this._client.getRecords(
            null,
            FilterParams.fromTuples(
                'id', '1'
            ),
            new PagingParams(),
            new SortParams()
        );

        assert.lengthOf(page.data, 1);

        // Filter by type
        page = await this._client.getRecords(
            null,
            FilterParams.fromTuples(
                'type', 'Test_type1'
            ),
            new PagingParams(),
            new SortParams()
        );

        assert.lengthOf(page.data, 2);

        // Filter by name
        page = await this._client.getRecords(
            null,
            FilterParams.fromTuples(
                'name', 'Test_name1'
            ),
            new PagingParams(),
            new SortParams()
        );

        assert.lengthOf(page.data, 1);

        // Filter by search pattern
        page = await this._client.getRecords(
            null,
            FilterParams.fromTuples(
                'search', 'type1'
            ),
            new PagingParams(),
            new SortParams()
        );

        assert.lengthOf(page.data, 2);

        // Filter by tags
        page = await this._client.getRecords(
            null,
            FilterParams.fromTuples(
                'tags', ['red']
            ),
            new PagingParams(),
            new SortParams()
        );

        assert.lengthOf(page.data, 1);

        // Filter by time
        page = await this._client.getRecords(
            null,
            FilterParams.fromTuples(
                'from_time', new Date(2005, 1, 1),
                'to_time', new Date(2015, 1, 1),
            ),
            new PagingParams(),
            new SortParams()
        );

        assert.lengthOf(page.data, 1);
    }

    
    public async testSorting() {
        // Create items
        await this.testCreateSearch();
        await new Promise(r => setTimeout(r, this._timeout));

        // Sort by type
        let page = await this._client.getRecords(
            null,
            new FilterParams(),
            new PagingParams(),
            new SortParams(new SortField('type', true))
        );

        assert.lengthOf(page.data, 3);

        assert.equal(page.data[0].id, '1');
        assert.equal(page.data[1].id, '3');
        assert.equal(page.data[2].id, '2');

        page = await this._client.getRecords(
            null,
            new FilterParams(),
            new PagingParams(),
            new SortParams(new SortField('time', true))
        );

        assert.lengthOf(page.data, 3);

        assert.equal(page.data[0].id, '2');
        assert.equal(page.data[1].id, '1');
        assert.equal(page.data[2].id, '3');
    }
}
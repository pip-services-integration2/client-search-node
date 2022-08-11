import { IdGenerator, SortParams } from 'pip-services3-commons-nodex';
import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';

import { ISearchClientV1 } from './ISearchClientV1';
import { SearchRecordV1 } from './SearchRecordV1';

export class SearchNullClientV1 implements ISearchClientV1 {
    constructor(config?: any) { }
    
    public async getRecords(correlationId: string, filter: FilterParams, paging: PagingParams, sort: SortParams): Promise<DataPage<SearchRecordV1>> {
        return null;
    }
    public async getRecordById(correlationId: string, recordId: string): Promise<SearchRecordV1> {
        return null;
    }
    public async setRecord(correlationId: string, record: SearchRecordV1): Promise<SearchRecordV1> {
        return null;
    }
    public async updateRecord(correlationId: string, record: SearchRecordV1): Promise<SearchRecordV1> {
        return null;
    }
    public async deleteRecordById(correlationId: string, recordId: string): Promise<SearchRecordV1> {
        return null;
    }
}

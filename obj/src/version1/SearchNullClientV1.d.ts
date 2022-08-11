import { SortParams } from 'pip-services3-commons-nodex';
import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { ISearchClientV1 } from './ISearchClientV1';
import { SearchRecordV1 } from './SearchRecordV1';
export declare class SearchNullClientV1 implements ISearchClientV1 {
    constructor(config?: any);
    getRecords(correlationId: string, filter: FilterParams, paging: PagingParams, sort: SortParams): Promise<DataPage<SearchRecordV1>>;
    getRecordById(correlationId: string, recordId: string): Promise<SearchRecordV1>;
    setRecord(correlationId: string, record: SearchRecordV1): Promise<SearchRecordV1>;
    updateRecord(correlationId: string, record: SearchRecordV1): Promise<SearchRecordV1>;
    deleteRecordById(correlationId: string, recordId: string): Promise<SearchRecordV1>;
}

import { ISearchClientV1 } from './ISearchClientV1';
import { DirectClient } from 'pip-services3-rpc-nodex';
import { FilterParams, PagingParams, DataPage, SortParams } from 'pip-services3-commons-nodex';
import { SearchRecordV1 } from './SearchRecordV1';
export declare class SearchDirectClientV1 extends DirectClient<any> implements ISearchClientV1 {
    constructor();
    getRecords(correlationId: string, filter: FilterParams, paging: PagingParams, sort: SortParams): Promise<DataPage<SearchRecordV1>>;
    getRecordById(correlationId: string, recordId: string): Promise<SearchRecordV1>;
    setRecord(correlationId: string, record: SearchRecordV1): Promise<SearchRecordV1>;
    updateRecord(correlationId: string, record: SearchRecordV1): Promise<SearchRecordV1>;
    deleteRecordById(correlationId: string, recordId: string): Promise<SearchRecordV1>;
}

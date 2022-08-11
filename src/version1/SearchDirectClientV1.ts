import { ISearchClientV1 } from './ISearchClientV1';
import { DirectClient } from 'pip-services3-rpc-nodex';
import { Descriptor, FilterParams, PagingParams, DataPage, SortParams } from 'pip-services3-commons-nodex';
import { SearchRecordV1 } from './SearchRecordV1';


export class SearchDirectClientV1 extends DirectClient<any> implements ISearchClientV1 {

    public constructor() {
        super();
        this._dependencyResolver.put('controller', new Descriptor('service-search', 'controller', '*', '*', '1.0'));
    }

    public async getRecords(correlationId: string, filter: FilterParams, paging: PagingParams, sort: SortParams): Promise<DataPage<SearchRecordV1>> {
        let timing = this.instrument(correlationId, 'search.get_records');

        try {
            return await this._controller.getRecords(correlationId, filter, paging, sort);
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async getRecordById(correlationId: string, recordId: string): Promise<SearchRecordV1> {
        let timing = this.instrument(correlationId, 'search.get_record_by_id');

        try {
            return await this._controller.getRecordById(correlationId, recordId);
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async setRecord(correlationId: string, record: SearchRecordV1): Promise<SearchRecordV1> {
        let timing = this.instrument(correlationId, 'search.set_record');
        

        try {
            return await this._controller.setRecord(correlationId, record);
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async updateRecord(correlationId: string, record: SearchRecordV1): Promise<SearchRecordV1> {
        let timing = this.instrument(correlationId, 'search.update_record');
        
        try {
            return await this._controller.updateRecord(correlationId, record);
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async deleteRecordById(correlationId: string, recordId: string): Promise<SearchRecordV1> {
        let timing = this.instrument(correlationId, 'search.delete_record_by_id');

        try {
            return await this._controller.deleteRecordById(correlationId, recordId);
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }
}
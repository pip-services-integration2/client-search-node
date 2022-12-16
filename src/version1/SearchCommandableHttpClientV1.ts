import { SearchRecordV1 } from './SearchRecordV1';
import { CommandableHttpClient } from 'pip-services3-rpc-nodex';
import { DateTimeConverter, FilterParams, PagingParams, DataPage, SortParams } from 'pip-services3-commons-nodex';
import { ISearchClientV1 } from './ISearchClientV1';

export class SearchCommandableHttpClientV1 extends CommandableHttpClient implements ISearchClientV1 {

    public constructor() {
        super('v1/search');
    }

    public async getRecords(correlationId: string, filter: FilterParams, paging: PagingParams, sort: SortParams): Promise<DataPage<SearchRecordV1>> {
        let timing = this.instrument(correlationId, 'search.get_records');

        try {
            let page: DataPage<SearchRecordV1> = await this.callCommand(
                'get_records',
                correlationId,
                {
                    filter: filter,
                    paging: paging,
                    sort: sort
                }
            );
            timing.endTiming();

            if (page == null || page.data.length == 0) {
                return;
            }

            page.data = page.data.map(record => this.fixRecord(record));
            
            return page;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }
    
    public async getRecordById(correlationId: string, recordId: string): Promise<SearchRecordV1> {
        let timing = this.instrument(correlationId, 'search.get_record_by_id');

        try {
            let record: SearchRecordV1 = await this.callCommand(
                'get_record_by_id',
                correlationId,
                {
                    record_id: recordId
                }
            );

            timing.endTiming();
            return this.fixRecord(record);
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async setRecord(correlationId: string, record: SearchRecordV1): Promise<SearchRecordV1> {
        let timing = this.instrument(correlationId, 'search.set_record');

        try {
            record = await this.callCommand(
                'set_record',
                correlationId,
                {
                    record: record
                }
            );
            timing.endTiming();
            return this.fixRecord(record);
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async updateRecord(correlationId: string, record: SearchRecordV1): Promise<SearchRecordV1> {
        let timing = this.instrument(correlationId, 'search.update_record');

        try {
            record = await this.callCommand(
                'update_record',
                correlationId,
                {
                    record: record
                }
            );

            timing.endTiming();
            return this.fixRecord(record);
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }
    
    public async deleteRecordById(correlationId: string, recordId: string): Promise<SearchRecordV1> {
        let timing = this.instrument(correlationId, 'search.delete_record_by_id');

        try {
            let record: SearchRecordV1 = await this.callCommand(
                'delete_record_by_id',
                correlationId,
                {
                    record_id: recordId
                },
            );

            timing.endTiming();
            return this.fixRecord(record);
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    private fixRecord(record: SearchRecordV1): SearchRecordV1 {
        if (record == null) return null;

        record.time = DateTimeConverter.toNullableDateTime(record.time);
        
        return record;
    }
}
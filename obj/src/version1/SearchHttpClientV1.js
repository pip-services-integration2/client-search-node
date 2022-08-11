"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchHttpClientV1 = void 0;
const pip_services3_rpc_nodex_1 = require("pip-services3-rpc-nodex");
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
class SearchHttpClientV1 extends pip_services3_rpc_nodex_1.CommandableHttpClient {
    constructor() {
        super('v1/search');
    }
    getRecords(correlationId, filter, paging, sort) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'search.get_records');
            try {
                let page = yield this.callCommand('get_records', correlationId, {
                    filter: filter,
                    paging: paging,
                    sort: sort
                });
                if (page == null || page.data.length == 0) {
                    return;
                }
                page.data = page.data.map(record => this.fixRecord(record));
                return page;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    getRecordById(correlationId, recordId) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'search.get_record_by_id');
            try {
                let record = yield this.callCommand('get_record_by_id', correlationId, {
                    record_id: recordId
                });
                return this.fixRecord(record);
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    setRecord(correlationId, record) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'search.set_record');
            try {
                record = yield this.callCommand('set_record', correlationId, {
                    record: record
                });
                return this.fixRecord(record);
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    updateRecord(correlationId, record) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'search.update_record');
            try {
                record = yield this.callCommand('update_record', correlationId, {
                    record: record
                });
                return this.fixRecord(record);
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    deleteRecordById(correlationId, recordId) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'search.delete_record_by_id');
            try {
                let record = yield this.callCommand('delete_record_by_id', correlationId, {
                    record_id: recordId
                });
                return this.fixRecord(record);
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    fixRecord(record) {
        if (record == null)
            return null;
        record.time = pip_services3_commons_nodex_1.DateTimeConverter.toNullableDateTime(record.time);
        return record;
    }
}
exports.SearchHttpClientV1 = SearchHttpClientV1;
//# sourceMappingURL=SearchHttpClientV1.js.map
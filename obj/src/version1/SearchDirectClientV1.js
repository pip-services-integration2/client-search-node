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
exports.SearchDirectClientV1 = void 0;
const pip_services3_rpc_nodex_1 = require("pip-services3-rpc-nodex");
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
class SearchDirectClientV1 extends pip_services3_rpc_nodex_1.DirectClient {
    constructor() {
        super();
        this._dependencyResolver.put('controller', new pip_services3_commons_nodex_1.Descriptor('service-search', 'controller', '*', '*', '1.0'));
    }
    getRecords(correlationId, filter, paging, sort) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'search.get_records');
            try {
                return yield this._controller.getRecords(correlationId, filter, paging, sort);
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
                return yield this._controller.getRecordById(correlationId, recordId);
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
                return yield this._controller.setRecord(correlationId, record);
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
                return yield this._controller.updateRecord(correlationId, record);
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
                return yield this._controller.deleteRecordById(correlationId, recordId);
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
}
exports.SearchDirectClientV1 = SearchDirectClientV1;
//# sourceMappingURL=SearchDirectClientV1.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchClientFactory = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_components_nodex_1 = require("pip-services3-components-nodex");
const SearchNullClientV1_1 = require("../version1/SearchNullClientV1");
const SearchDirectClientV1_1 = require("../version1/SearchDirectClientV1");
const SearchHttpClientV1_1 = require("../version1/SearchHttpClientV1");
class SearchClientFactory extends pip_services3_components_nodex_1.Factory {
    constructor() {
        super();
        this.registerAsType(SearchClientFactory.NullClientV1Descriptor, SearchNullClientV1_1.SearchNullClientV1);
        this.registerAsType(SearchClientFactory.DirectClientV1Descriptor, SearchDirectClientV1_1.SearchDirectClientV1);
        this.registerAsType(SearchClientFactory.HttpClientV1Descriptor, SearchHttpClientV1_1.SearchHttpClientV1);
    }
}
exports.SearchClientFactory = SearchClientFactory;
SearchClientFactory.Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-search', 'factory', 'default', 'default', '1.0');
SearchClientFactory.NullClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-search', 'client', 'null', 'default', '1.0');
SearchClientFactory.DirectClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-search', 'client', 'direct', 'default', '1.0');
SearchClientFactory.HttpClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-search', 'client', 'http', 'default', '1.0');
//# sourceMappingURL=SearchClientFactory.js.map
import { Descriptor } from 'pip-services3-commons-nodex';
import { Factory } from 'pip-services3-components-nodex';

import { SearchNullClientV1 } from '../version1/SearchNullClientV1';
import { SearchDirectClientV1 } from '../version1/SearchDirectClientV1';
import { SearchHttpClientV1 } from '../version1/SearchHttpClientV1';

export class SearchClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('service-search', 'factory', 'default', 'default', '1.0');
	public static NullClientV1Descriptor = new Descriptor('service-search', 'client', 'null', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('service-search', 'client', 'direct', 'default', '1.0');
	public static HttpClientV1Descriptor = new Descriptor('service-search', 'client', 'http', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(SearchClientFactory.NullClientV1Descriptor, SearchNullClientV1);
		this.registerAsType(SearchClientFactory.DirectClientV1Descriptor, SearchDirectClientV1);
		this.registerAsType(SearchClientFactory.HttpClientV1Descriptor, SearchHttpClientV1);
	}
}

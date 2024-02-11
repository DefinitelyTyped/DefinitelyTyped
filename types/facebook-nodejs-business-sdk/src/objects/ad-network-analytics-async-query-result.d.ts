import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdNetworkAnalyticsAsyncQueryResult
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdNetworkAnalyticsAsyncQueryResult extends AbstractCrudObject {
    static get Fields(): Readonly<{
        data: "data";
        error: "error";
        omitted_results: "omitted_results";
        query_id: "query_id";
        results: "results";
        status: "status";
    }>;
}

import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AnalyticsQueryResult
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AnalyticsQueryResult extends AbstractCrudObject {
    static get Fields(): Readonly<{
        columns: "columns";
        datapoints: "datapoints";
        error: "error";
        query_id: "query_id";
        status: "status";
    }>;
}

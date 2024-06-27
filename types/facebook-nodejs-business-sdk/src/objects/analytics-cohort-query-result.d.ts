import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AnalyticsCohortQueryResult
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AnalyticsCohortQueryResult extends AbstractCrudObject {
    static get Fields(): Readonly<{
        data: "data";
        error: "error";
        query_id: "query_id";
        status: "status";
    }>;
}

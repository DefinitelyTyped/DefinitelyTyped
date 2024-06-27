import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * InstantArticleInsightsQueryResult
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class InstantArticleInsightsQueryResult extends AbstractCrudObject {
    static get Fields(): Readonly<{
        breakdowns: "breakdowns";
        name: "name";
        time: "time";
        value: "value";
    }>;
}

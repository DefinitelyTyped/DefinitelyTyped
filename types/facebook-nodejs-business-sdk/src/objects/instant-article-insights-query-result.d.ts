import { AbstractCrudObject } from "./../abstract-crud-object";
export default class InstantArticleInsightsQueryResult extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Breakdown(): Record<string, any>;
    static get Period(): Record<string, any>;
}

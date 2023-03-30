import { AbstractCrudObject } from "./../abstract-crud-object";
export default class InstagramInsightsResult extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Metric(): Record<string, any>;
    static get Period(): Record<string, any>;
}

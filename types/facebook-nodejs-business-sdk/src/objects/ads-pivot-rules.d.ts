import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdsPivotRules

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsPivotRules extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<AdsPivotRules>;
}

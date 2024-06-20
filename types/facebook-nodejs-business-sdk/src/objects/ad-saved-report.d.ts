import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdSavedReport

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdSavedReport extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<AdSavedReport>;
}

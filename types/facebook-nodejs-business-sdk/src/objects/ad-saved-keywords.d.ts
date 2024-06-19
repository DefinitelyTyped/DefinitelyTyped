import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdSavedKeywords
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdSavedKeywords extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: Array<string>, params?: Record<string, any>): AdSavedKeywords;
}

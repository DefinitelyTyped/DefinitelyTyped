import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdsNamingTemplate
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsNamingTemplate extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Level(): Record<string, any>;
    get(fields: Array<string>, params?: Record<string, any>): AdsNamingTemplate;
}

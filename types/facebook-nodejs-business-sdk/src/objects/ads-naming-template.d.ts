import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdsNamingTemplate

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsNamingTemplate extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Level(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<AdsNamingTemplate>;
}

import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdToplineDetail

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdToplineDetail extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<AdToplineDetail>;
}

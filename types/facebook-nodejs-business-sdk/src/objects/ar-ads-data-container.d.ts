import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ArAdsDataContainer

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ArAdsDataContainer extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<ArAdsDataContainer>;
}

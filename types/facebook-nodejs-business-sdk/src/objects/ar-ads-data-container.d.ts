import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ArAdsDataContainer
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ArAdsDataContainer extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: Array<string>, params?: Record<string, any>): ArAdsDataContainer;
}

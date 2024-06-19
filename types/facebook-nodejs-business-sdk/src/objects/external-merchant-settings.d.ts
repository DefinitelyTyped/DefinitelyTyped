import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ExternalMerchantSettings
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ExternalMerchantSettings extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: Array<string>, params?: Record<string, any>): ExternalMerchantSettings;
}

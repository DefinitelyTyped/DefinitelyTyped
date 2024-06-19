import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CPASMerchantConfig
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CPASMerchantConfig extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: Array<string>, params?: Record<string, any>): CPASMerchantConfig;
}

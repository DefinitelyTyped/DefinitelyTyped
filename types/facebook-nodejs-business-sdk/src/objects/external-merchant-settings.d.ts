import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ExternalMerchantSettings

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ExternalMerchantSettings extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<ExternalMerchantSettings>;
}

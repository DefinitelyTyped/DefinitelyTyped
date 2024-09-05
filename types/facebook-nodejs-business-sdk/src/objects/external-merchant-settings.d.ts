import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ExternalMerchantSettings
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ExternalMerchantSettings extends AbstractCrudObject {
    static get Fields(): Readonly<{
        connect_woo: "connect_woo";
        external_platform: "external_platform";
        id: "id";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<ExternalMerchantSettings>;
}

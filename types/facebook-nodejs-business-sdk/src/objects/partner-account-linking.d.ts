import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * PartnerAccountLinking
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PartnerAccountLinking extends AbstractCrudObject {
    static get Fields(): Readonly<{
        adaccount: "adaccount";
        app: "app";
        business: "business";
        externalidentifier: "externalidentifier";
        externalidentifieruri: "externalidentifieruri";
        id: "id";
        partnername: "partnername";
        pixel: "pixel";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<PartnerAccountLinking>;
}

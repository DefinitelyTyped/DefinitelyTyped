import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * PartnerAccountLinking

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PartnerAccountLinking extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<PartnerAccountLinking>;
}

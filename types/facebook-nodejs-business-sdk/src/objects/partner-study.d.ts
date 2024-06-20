import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * PartnerStudy

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PartnerStudy extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<PartnerStudy>;
}

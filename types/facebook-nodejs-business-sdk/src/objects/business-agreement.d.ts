import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * BusinessAgreement

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessAgreement extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get RequestStatus(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<BusinessAgreement>;    get(fields: string[], params?: Record<string, any>): Promise<BusinessAgreement>;
}

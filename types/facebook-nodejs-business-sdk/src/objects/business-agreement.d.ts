import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * BusinessAgreement
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessAgreement extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get RequestStatus(): Record<string, any>;
    get(fields: Array<string>, params?: Record<string, any>): BusinessAgreement;
    update(fields: Array<string>, params?: Record<string, any>): BusinessAgreement;
}

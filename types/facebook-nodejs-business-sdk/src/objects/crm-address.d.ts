import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CRMAddress
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CRMAddress extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: Array<string>, params?: Record<string, any>): CRMAddress;
}

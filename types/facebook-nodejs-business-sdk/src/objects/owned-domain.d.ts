import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * OwnedDomain
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class OwnedDomain extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: Array<string>, params?: Record<string, any>): OwnedDomain;
}

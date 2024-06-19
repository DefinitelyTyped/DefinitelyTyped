import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * URL
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class URL extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Scopes(): Record<string, any>;
    get(fields: Array<string>, params?: Record<string, any>): URL;
    update(fields: Array<string>, params?: Record<string, any>): URL;
}

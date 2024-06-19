import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdTopline
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdTopline extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: Array<string>, params?: Record<string, any>): AdTopline;
}

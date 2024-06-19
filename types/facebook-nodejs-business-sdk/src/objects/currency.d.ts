import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * Currency
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Currency extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
}

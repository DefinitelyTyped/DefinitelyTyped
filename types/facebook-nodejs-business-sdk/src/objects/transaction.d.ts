import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * Transaction
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Transaction extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get ProductType(): Record<string, any>;
}

import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CreditCard
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CreditCard extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: Array<string>, params?: Record<string, any>): CreditCard;
}

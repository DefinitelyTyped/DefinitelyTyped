import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CreditCard

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CreditCard extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<CreditCard>;
}

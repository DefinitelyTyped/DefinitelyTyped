import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * PaymentSubscription

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PaymentSubscription extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<PaymentSubscription>;
}

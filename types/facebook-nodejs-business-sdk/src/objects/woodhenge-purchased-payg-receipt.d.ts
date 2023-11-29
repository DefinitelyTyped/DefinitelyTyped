import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * WoodhengePurchasedPAYGReceipt
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class WoodhengePurchasedPAYGReceipt extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        number_of_subscriptions_purchased: "number_of_subscriptions_purchased";
        purchase_time: "purchase_time";
        user: "user";
    }>;
    get(fields: string[], params?: Record<any, any>): Promise<WoodhengePurchasedPAYGReceipt>;
}

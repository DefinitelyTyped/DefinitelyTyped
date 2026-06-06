import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ProductItemSubscriptionInfo
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductItemSubscriptionInfo extends AbstractCrudObject {
    static get Fields(): Readonly<{
        is_subscribable: "is_subscribable";
        subscription_billing_period: "subscription_billing_period";
        subscription_billing_type: "subscription_billing_type";
    }>;
}

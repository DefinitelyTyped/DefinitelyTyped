import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdAccountPaymentOptions
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountPaymentOptions extends AbstractCrudObject {
    static get Fields(): Readonly<{
        available_altpay_options: "available_altpay_options";
        available_card_types: "available_card_types";
        available_payment_options: "available_payment_options";
        existing_payment_methods: "existing_payment_methods";
    }>;
}

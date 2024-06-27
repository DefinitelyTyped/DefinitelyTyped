import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * UserPaymentMethodsInfo
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class UserPaymentMethodsInfo extends AbstractCrudObject {
    static get Fields(): Readonly<{
        account_id: "account_id";
        available_card_types: "available_card_types";
        available_payment_methods: "available_payment_methods";
        available_payment_methods_details: "available_payment_methods_details";
        country: "country";
        currency: "currency";
        existing_payment_methods: "existing_payment_methods";
    }>;
}

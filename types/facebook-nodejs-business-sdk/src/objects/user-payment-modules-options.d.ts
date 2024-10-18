import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * UserPaymentModulesOptions
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class UserPaymentModulesOptions extends AbstractCrudObject {
    static get Fields(): Readonly<{
        account_id: "account_id";
        available_payment_options: "available_payment_options";
        country: "country";
        currency: "currency";
    }>;
}

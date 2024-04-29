import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * UserPaymentMobilePricepoints
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class UserPaymentMobilePricepoints extends AbstractCrudObject {
    static get Fields(): Readonly<{
        mobile_country: "mobile_country";
        phone_number_last4: "phone_number_last4";
        pricepoints: "pricepoints";
        user_currency: "user_currency";
    }>;
}

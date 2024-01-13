import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * CurrencyAmount
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CurrencyAmount extends AbstractCrudObject {
    static get Fields(): Readonly<{
        amount: "amount";
        amount_in_hundredths: "amount_in_hundredths";
        currency: "currency";
        offsetted_amount: "offsetted_amount";
    }>;
}

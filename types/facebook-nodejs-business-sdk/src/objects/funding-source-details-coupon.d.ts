import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * FundingSourceDetailsCoupon
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class FundingSourceDetailsCoupon extends AbstractCrudObject {
    static get Fields(): Readonly<{
        amount: "amount";
        currency: "currency";
        display_amount: "display_amount";
        expiration: "expiration";
    }>;
}

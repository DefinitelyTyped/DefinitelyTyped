import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * FundingSourceDetails
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class FundingSourceDetails extends AbstractCrudObject {
    static get Fields(): Readonly<{
        coupon: "coupon";
        coupons: "coupons";
        display_string: "display_string";
        id: "id";
        type: "type";
    }>;
}

import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * FundingSourceDetailsCouponTiering
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class FundingSourceDetailsCouponTiering extends AbstractCrudObject {
    static get Fields(): Readonly<{
        coupon_tiering_new: "coupon_tiering_new";
        coupon_tiering_reactivation: "coupon_tiering_reactivation";
    }>;
}

import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * FundingSourceDetailsCoupon
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class FundingSourceDetailsCoupon extends AbstractCrudObject {
    static get Fields(): Readonly<{
        amount: "amount";
        campaign_ids: "campaign_ids";
        child_ad_account_id: "child_ad_account_id";
        child_bm_id: "child_bm_id";
        coupon_id: "coupon_id";
        coupon_tiering: "coupon_tiering";
        currency: "currency";
        display_amount: "display_amount";
        expiration: "expiration";
        original_amount: "original_amount";
        original_display_amount: "original_display_amount";
        start_date: "start_date";
        vendor_id: "vendor_id";
    }>;
}

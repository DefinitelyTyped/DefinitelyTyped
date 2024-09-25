import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdAccountPromotionProgressBar
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountPromotionProgressBar extends AbstractCrudObject {
    static get Fields(): Readonly<{
        adaccount_permission: "adaccount_permission";
        coupon_currency: "coupon_currency";
        coupon_value: "coupon_value";
        expiration_time: "expiration_time";
        progress_completed: "progress_completed";
        promotion_type: "promotion_type";
        spend_requirement_in_cent: "spend_requirement_in_cent";
        spend_since_enrollment: "spend_since_enrollment";
    }>;
}

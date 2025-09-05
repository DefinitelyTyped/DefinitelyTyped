import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ALMGuidanceMetrics
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ALMGuidanceMetrics extends AbstractCrudObject {
    static get Fields(): Readonly<{
        ad_account_id: "ad_account_id";
        adopted_objects: "adopted_objects";
        guidance_name: "guidance_name";
        guidance_type: "guidance_type";
        l28_adoption: "l28_adoption";
        l28_available: "l28_available";
        l28_click: "l28_click";
        l28_conversion: "l28_conversion";
        l28_has_click: "l28_has_click";
        l28_has_impression: "l28_has_impression";
        l28_impression: "l28_impression";
        l28_is_actioned: "l28_is_actioned";
        l28_is_adopted: "l28_is_adopted";
        l28_is_available: "l28_is_available";
        l28_is_pitched: "l28_is_pitched";
        l28_pitch: "l28_pitch";
        l28d_adopted_revenue: "l28d_adopted_revenue";
        last_actioned_ds: "last_actioned_ds";
        last_adopted_ds: "last_adopted_ds";
        last_pitch_ds: "last_pitch_ds";
        parent_advertiser_id: "parent_advertiser_id";
        report_ds: "report_ds";
    }>;
}

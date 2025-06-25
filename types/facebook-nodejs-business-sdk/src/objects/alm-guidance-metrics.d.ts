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
        l28_impression: "l28_impression";
        l28_pitch: "l28_pitch";
        last_pitch_ds: "last_pitch_ds";
        parent_advertiser_id: "parent_advertiser_id";
        report_ds: "report_ds";
    }>;
}

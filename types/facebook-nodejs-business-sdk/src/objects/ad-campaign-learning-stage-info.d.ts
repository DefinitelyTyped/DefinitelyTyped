import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdCampaignLearningStageInfo
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCampaignLearningStageInfo extends AbstractCrudObject {
    static get Fields(): Readonly<{
        attribution_windows: "attribution_windows";
        conversions: "conversions";
        dynamic_lp_conversions_threshold: "dynamic_lp_conversions_threshold";
        dynamic_lp_days_threshold: "dynamic_lp_days_threshold";
        dynamic_lp_status: "dynamic_lp_status";
        last_sig_edit_ts: "last_sig_edit_ts";
        status: "status";
    }>;
}

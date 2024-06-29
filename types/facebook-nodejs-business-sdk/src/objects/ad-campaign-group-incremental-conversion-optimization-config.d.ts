import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdCampaignGroupIncrementalConversionOptimizationConfig
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCampaignGroupIncrementalConversionOptimizationConfig extends AbstractCrudObject {
    static get Fields(): Readonly<{
        action_type: "action_type";
        ad_study_end_time: "ad_study_end_time";
        ad_study_id: "ad_study_id";
        ad_study_name: "ad_study_name";
        ad_study_start_time: "ad_study_start_time";
        cell_id: "cell_id";
        cell_name: "cell_name";
        holdout_size: "holdout_size";
        ico_type: "ico_type";
        objectives: "objectives";
    }>;
}

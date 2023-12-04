import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * ReachFrequencySpec
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ReachFrequencySpec extends AbstractCrudObject {
    static get Fields(): Readonly<{
        countries: "countries";
        default_creation_data: "default_creation_data";
        global_io_max_campaign_duration: "global_io_max_campaign_duration";
        max_campaign_duration: "max_campaign_duration";
        max_days_to_finish: "max_days_to_finish";
        max_pause_without_prediction_rerun: "max_pause_without_prediction_rerun";
        min_campaign_duration: "min_campaign_duration";
        min_reach_limits: "min_reach_limits";
    }>;
}

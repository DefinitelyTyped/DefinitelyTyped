import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdCampaignDeliveryStats
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCampaignDeliveryStats extends AbstractCrudObject {
    static get Fields(): Readonly<{
        bid_recommendation: "bid_recommendation";
        current_average_cost: "current_average_cost";
        last_significant_edit_ts: "last_significant_edit_ts";
        learning_stage_exit_info: "learning_stage_exit_info";
        learning_stage_info: "learning_stage_info";
        unsupported_features: "unsupported_features";
    }>;
}

import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdCampaignGroupAdvantageState
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCampaignGroupAdvantageState extends AbstractCrudObject {
    static get Fields(): Readonly<{
        advantage_audience_state: "advantage_audience_state";
        advantage_budget_state: "advantage_budget_state";
        advantage_placement_state: "advantage_placement_state";
        advantage_state: "advantage_state";
    }>;
}

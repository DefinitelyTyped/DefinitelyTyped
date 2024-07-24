import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdCampaignGroupMetricsMetadata
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCampaignGroupMetricsMetadata extends AbstractCrudObject {
    static get Fields(): Readonly<{
        budget_optimization: "budget_optimization";
        duplication_flow_tips: "duplication_flow_tips";
    }>;
}

import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdCampaignMetricsMetadata
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCampaignMetricsMetadata extends AbstractCrudObject {
    static get Fields(): Readonly<{
        boosted_component_optimization: "boosted_component_optimization";
        creation_flow_tips: "creation_flow_tips";
        default_opted_in_placements: "default_opted_in_placements";
        delivery_growth_optimizations: "delivery_growth_optimizations";
        duplication_flow_tips: "duplication_flow_tips";
        edit_flow_tips: "edit_flow_tips";
    }>;
}

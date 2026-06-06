import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ConversionHealthKPI
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ConversionHealthKPI extends AbstractCrudObject {
    static get Fields(): Readonly<{
        health_indicator: "health_indicator";
        impacted_browsers_match_rate: "impacted_browsers_match_rate";
        impacted_browsers_match_rate_mom_trend: "impacted_browsers_match_rate_mom_trend";
        impacted_browsers_traffic_share: "impacted_browsers_traffic_share";
        impacted_browsers_traffic_share_mom_trend: "impacted_browsers_traffic_share_mom_trend";
        match_rate: "match_rate";
        match_rate_mom_trend: "match_rate_mom_trend";
        match_rate_vertical_benchmark: "match_rate_vertical_benchmark";
        match_rate_vs_benchmark_mom_trend: "match_rate_vs_benchmark_mom_trend";
    }>;
}

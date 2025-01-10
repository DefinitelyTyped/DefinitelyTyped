import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ResellerGuidance
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ResellerGuidance extends AbstractCrudObject {
    static get Fields(): Readonly<{
        ad_account_first_spend_date: "ad_account_first_spend_date";
        ad_account_id: "ad_account_id";
        adopted_guidance_l7d: "adopted_guidance_l7d";
        advertiser_name: "advertiser_name";
        attributed_to_reseller_l7d: "attributed_to_reseller_l7d";
        available_guidance: "available_guidance";
        benchmark_report_link: "benchmark_report_link";
        guidance_adoption_rate_l7d: "guidance_adoption_rate_l7d";
        no_adsets_gte_benchmark: "no_adsets_gte_benchmark";
        no_adsets_lt_benchmark: "no_adsets_lt_benchmark";
        nurtured_by_reseller_l7d: "nurtured_by_reseller_l7d";
        planning_agency_name: "planning_agency_name";
        recommendation_time: "recommendation_time";
        reporting_ds: "reporting_ds";
        reseller: "reseller";
        revenue_l30d: "revenue_l30d";
        ultimate_advertiser_name: "ultimate_advertiser_name";
    }>;
}

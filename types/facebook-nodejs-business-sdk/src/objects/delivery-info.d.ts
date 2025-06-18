import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * DeliveryInfo
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class DeliveryInfo extends AbstractCrudObject {
    static get Fields(): Readonly<{
        active_accelerated_campaign_count: "active_accelerated_campaign_count";
        active_day_parted_campaign_count: "active_day_parted_campaign_count";
        ad_penalty_map: "ad_penalty_map";
        are_all_daily_budgets_spent: "are_all_daily_budgets_spent";
        credit_needed_ads_count: "credit_needed_ads_count";
        eligible_for_delivery_insights: "eligible_for_delivery_insights";
        end_time: "end_time";
        has_account_hit_spend_limit: "has_account_hit_spend_limit";
        has_campaign_group_hit_spend_limit: "has_campaign_group_hit_spend_limit";
        has_no_active_ads: "has_no_active_ads";
        has_no_ads: "has_no_ads";
        inactive_ads_count: "inactive_ads_count";
        inactive_campaign_count: "inactive_campaign_count";
        is_account_closed: "is_account_closed";
        is_account_disabled: "is_account_disabled";
        is_ad_uneconomical: "is_ad_uneconomical";
        is_adfarm_penalized: "is_adfarm_penalized";
        is_adgroup_partially_rejected: "is_adgroup_partially_rejected";
        is_campaign_accelerated: "is_campaign_accelerated";
        is_campaign_completed: "is_campaign_completed";
        is_campaign_day_parted: "is_campaign_day_parted";
        is_campaign_disabled: "is_campaign_disabled";
        is_campaign_group_disabled: "is_campaign_group_disabled";
        is_clickbait_penalized: "is_clickbait_penalized";
        is_daily_budget_spent: "is_daily_budget_spent";
        is_engagement_bait_penalized: "is_engagement_bait_penalized";
        is_lqwe_penalized: "is_lqwe_penalized";
        is_reach_and_frequency_misconfigured: "is_reach_and_frequency_misconfigured";
        is_sensationalism_penalized: "is_sensationalism_penalized";
        is_split_test_active: "is_split_test_active";
        is_split_test_valid: "is_split_test_valid";
        lift_study_time_period: "lift_study_time_period";
        needs_credit: "needs_credit";
        needs_tax_number: "needs_tax_number";
        non_deleted_ads_count: "non_deleted_ads_count";
        not_delivering_campaign_count: "not_delivering_campaign_count";
        pending_ads_count: "pending_ads_count";
        reach_frequency_campaign_underdelivery_reason: "reach_frequency_campaign_underdelivery_reason";
        rejected_ads_count: "rejected_ads_count";
        start_time: "start_time";
        status: "status";
        text_penalty_level: "text_penalty_level";
    }>;
}

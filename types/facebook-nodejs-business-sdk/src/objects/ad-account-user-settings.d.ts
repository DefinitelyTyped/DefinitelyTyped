import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdAccountUserSettings
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountUserSettings extends AbstractCrudObject {
    static get Fields(): Readonly<{
        acf_should_opt_out_video_adjustments: "acf_should_opt_out_video_adjustments";
        aco_sticky_settings: "aco_sticky_settings";
        ad_account: "ad_account";
        ad_object_export_format: "ad_object_export_format";
        auto_review_video_caption: "auto_review_video_caption";
        campaign_overview_columns: "campaign_overview_columns";
        column_suggestion_status: "column_suggestion_status";
        default_account_overview_agegender_metrics: "default_account_overview_agegender_metrics";
        default_account_overview_location_metrics: "default_account_overview_location_metrics";
        default_account_overview_metrics: "default_account_overview_metrics";
        default_account_overview_time_metrics: "default_account_overview_time_metrics";
        default_builtin_column_preset: "default_builtin_column_preset";
        default_nam_time_range: "default_nam_time_range";
        draft_mode_enabled: "draft_mode_enabled";
        export_deleted_items_with_delivery: "export_deleted_items_with_delivery";
        export_summary_row: "export_summary_row";
        has_seen_groups_column_flexing_experience: "has_seen_groups_column_flexing_experience";
        has_seen_leads_column_flexing_experience: "has_seen_leads_column_flexing_experience";
        has_seen_shops_ads_metrics_onboarding_tour: "has_seen_shops_ads_metrics_onboarding_tour";
        has_seen_shops_column_flexing_experience: "has_seen_shops_column_flexing_experience";
        hidden_optimization_tips: "hidden_optimization_tips";
        id: "id";
        is_3p_auth_setting_set: "is_3p_auth_setting_set";
        is_text_variation_nux_close: "is_text_variation_nux_close";
        last_used_columns: "last_used_columns";
        last_used_pe_filters: "last_used_pe_filters";
        last_used_website_urls: "last_used_website_urls";
        outlier_preferences: "outlier_preferences";
        pinned_ad_object_ids: "pinned_ad_object_ids";
        rb_export_format: "rb_export_format";
        rb_export_raw_data: "rb_export_raw_data";
        rb_export_summary_row: "rb_export_summary_row";
        saip_advertiser_setup_optimisation_guidance_overall_state: "saip_advertiser_setup_optimisation_guidance_overall_state";
        saip_advertiser_setup_optimisation_guidance_state: "saip_advertiser_setup_optimisation_guidance_state";
        shops_ads_metrics_onboarding_tour_close_count: "shops_ads_metrics_onboarding_tour_close_count";
        shops_ads_metrics_onboarding_tour_last_action_time: "shops_ads_metrics_onboarding_tour_last_action_time";
        should_default_image_auto_crop: "should_default_image_auto_crop";
        should_default_image_auto_crop_for_tail: "should_default_image_auto_crop_for_tail";
        should_default_image_auto_crop_optimization: "should_default_image_auto_crop_optimization";
        should_default_image_dof_toggle: "should_default_image_dof_toggle";
        should_default_image_lpp_ads_to_square: "should_default_image_lpp_ads_to_square";
        should_default_instagram_profile_card_optimization: "should_default_instagram_profile_card_optimization";
        should_default_text_swapping_optimization: "should_default_text_swapping_optimization";
        should_logout_of_3p_sourcing: "should_logout_of_3p_sourcing";
        show_archived_data: "show_archived_data";
        show_text_variation_nux_tooltip: "show_text_variation_nux_tooltip";
        syd_campaign_trends_activemetric: "syd_campaign_trends_activemetric";
        syd_campaign_trends_attribution: "syd_campaign_trends_attribution";
        syd_campaign_trends_metrics: "syd_campaign_trends_metrics";
        syd_campaign_trends_objective: "syd_campaign_trends_objective";
        syd_campaign_trends_time_range: "syd_campaign_trends_time_range";
        syd_landing_page_opt_in_status: "syd_landing_page_opt_in_status";
        text_variations_opt_in_type: "text_variations_opt_in_type";
        user: "user";
    }>;
    static get SydCampaignTrendsObjective(): Readonly<{
        app_installs: "APP_INSTALLS";
        brand_awareness: "BRAND_AWARENESS";
        event_responses: "EVENT_RESPONSES";
        lead_generation: "LEAD_GENERATION";
        link_clicks: "LINK_CLICKS";
        local_awareness: "LOCAL_AWARENESS";
        messages: "MESSAGES";
        offer_claims: "OFFER_CLAIMS";
        outcome_app_promotion: "OUTCOME_APP_PROMOTION";
        outcome_awareness: "OUTCOME_AWARENESS";
        outcome_engagement: "OUTCOME_ENGAGEMENT";
        outcome_leads: "OUTCOME_LEADS";
        outcome_sales: "OUTCOME_SALES";
        outcome_traffic: "OUTCOME_TRAFFIC";
        page_likes: "PAGE_LIKES";
        post_engagement: "POST_ENGAGEMENT";
        product_catalog_sales: "PRODUCT_CATALOG_SALES";
        reach: "REACH";
        store_visits: "STORE_VISITS";
        video_views: "VIDEO_VIEWS";
        website_conversions: "WEBSITE_CONVERSIONS";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<AdAccountUserSettings>;
}

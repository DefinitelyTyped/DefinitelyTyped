import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdsUserSettings
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsUserSettings extends AbstractCrudObject {
    static get Fields(): Readonly<{
        a_plus_c_survey_seen: "a_plus_c_survey_seen";
        adgroup_name_template: "adgroup_name_template";
        ads_tool_visits: "ads_tool_visits";
        aplusc_carousel_cda_opt_in_status: "aplusc_carousel_cda_opt_in_status";
        aplusc_carousel_inline_comment_opt_in_status: "aplusc_carousel_inline_comment_opt_in_status";
        aplusc_epa_opt_in_status: "aplusc_epa_opt_in_status";
        aplusc_opt_out_friction: "aplusc_opt_out_friction";
        autoflow_lite_opt_in_status: "autoflow_lite_opt_in_status";
        autoflow_lite_should_opt_in: "autoflow_lite_should_opt_in";
        blended_ads_creation_defaulting_opt_in_status: "blended_ads_creation_defaulting_opt_in_status";
        bookmarked_pages: "bookmarked_pages";
        campaign_group_name_template: "campaign_group_name_template";
        campaign_name_template: "campaign_name_template";
        carousel_to_video_opt_in_status: "carousel_to_video_opt_in_status";
        connected_sources_catalog_opt_in_status: "connected_sources_catalog_opt_in_status";
        default_creation_mode: "default_creation_mode";
        export_format_default: "export_format_default";
        focus_mode_default: "focus_mode_default";
        gen_ai_alpha_test_status: "gen_ai_alpha_test_status";
        id: "id";
        image_expansion_opt_in_status: "image_expansion_opt_in_status";
        is_ads_ai_consented: "is_ads_ai_consented";
        is_cbo_default_on: "is_cbo_default_on";
        is_se_removal_guidance_dismissed: "is_se_removal_guidance_dismissed";
        last_used_post_format: "last_used_post_format";
        last_visited_time: "last_visited_time";
        multi_ads_settings: "multi_ads_settings";
        music_on_reels_opt_in: "music_on_reels_opt_in";
        muted_cbo_midflight_education_messages: "muted_cbo_midflight_education_messages";
        onsite_destination_optimization_opt_in: "onsite_destination_optimization_opt_in";
        open_tabs: "open_tabs";
        previously_seen_recommendations: "previously_seen_recommendations";
        product_extensions_opt_in: "product_extensions_opt_in";
        selected_ad_account: "selected_ad_account";
        selected_comparison_timerange: "selected_comparison_timerange";
        selected_metric_cic: "selected_metric_cic";
        selected_metrics_cic: "selected_metrics_cic";
        selected_page: "selected_page";
        selected_page_section: "selected_page_section";
        selected_power_editor_pane: "selected_power_editor_pane";
        selected_stat_range: "selected_stat_range";
        should_export_filter_empty_cols: "should_export_filter_empty_cols";
        should_export_rows_without_unsupported_feature: "should_export_rows_without_unsupported_feature";
        should_not_auto_expand_tree_table: "should_not_auto_expand_tree_table";
        should_not_show_cbo_campaign_toggle_off_confirmation_message: "should_not_show_cbo_campaign_toggle_off_confirmation_message";
        should_not_show_publish_message_on_editor_close: "should_not_show_publish_message_on_editor_close";
        show_original_videos_opt_in: "show_original_videos_opt_in";
        static_ad_product_extensions_opt_in: "static_ad_product_extensions_opt_in";
        sticky_setting_after_default_on: "sticky_setting_after_default_on";
        syd_campaign_trends_metric: "syd_campaign_trends_metric";
        total_coupon_syd_dismissals: "total_coupon_syd_dismissals";
        total_coupon_upsell_dismissals: "total_coupon_upsell_dismissals";
        use_pe_create_flow: "use_pe_create_flow";
        use_stepper_primary_entry: "use_stepper_primary_entry";
        user: "user";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<AdsUserSettings>;
}

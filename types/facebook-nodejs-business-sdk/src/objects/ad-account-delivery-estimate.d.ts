import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdAccountDeliveryEstimate
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountDeliveryEstimate extends AbstractCrudObject {
    static get Fields(): Readonly<{
        daily_outcomes_curve: "daily_outcomes_curve";
        estimate_dau: "estimate_dau";
        estimate_mau_lower_bound: "estimate_mau_lower_bound";
        estimate_mau_upper_bound: "estimate_mau_upper_bound";
        estimate_ready: "estimate_ready";
        targeting_optimization_types: "targeting_optimization_types";
    }>;
    static get OptimizationGoal(): Readonly<{
        ad_recall_lift: "AD_RECALL_LIFT";
        app_installs: "APP_INSTALLS";
        app_installs_and_offsite_conversions: "APP_INSTALLS_AND_OFFSITE_CONVERSIONS";
        conversations: "CONVERSATIONS";
        derived_events: "DERIVED_EVENTS";
        engaged_users: "ENGAGED_USERS";
        event_responses: "EVENT_RESPONSES";
        impressions: "IMPRESSIONS";
        in_app_value: "IN_APP_VALUE";
        landing_page_views: "LANDING_PAGE_VIEWS";
        lead_generation: "LEAD_GENERATION";
        link_clicks: "LINK_CLICKS";
        messaging_appointment_conversion: "MESSAGING_APPOINTMENT_CONVERSION";
        messaging_purchase_conversion: "MESSAGING_PURCHASE_CONVERSION";
        none: "NONE";
        offsite_conversions: "OFFSITE_CONVERSIONS";
        page_likes: "PAGE_LIKES";
        post_engagement: "POST_ENGAGEMENT";
        quality_call: "QUALITY_CALL";
        quality_lead: "QUALITY_LEAD";
        reach: "REACH";
        reminders_set: "REMINDERS_SET";
        subscribers: "SUBSCRIBERS";
        thruplay: "THRUPLAY";
        value: "VALUE";
        visit_instagram_profile: "VISIT_INSTAGRAM_PROFILE";
    }>;
}

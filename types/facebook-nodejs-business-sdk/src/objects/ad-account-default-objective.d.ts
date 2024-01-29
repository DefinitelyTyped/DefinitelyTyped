import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdAccountDefaultObjective
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountDefaultObjective extends AbstractCrudObject {
    static get Fields(): Readonly<{
        default_objective_for_user: "default_objective_for_user";
        objective_for_level: "objective_for_level";
    }>;
    static get DefaultObjectiveForUser(): Readonly<{
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
    static get ObjectiveForLevel(): Readonly<{
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
}

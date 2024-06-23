import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdPromotedObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdPromotedObject extends AbstractCrudObject {
    static get Fields(): Readonly<{
        application_id: "application_id";
        conversion_goal_id: "conversion_goal_id";
        custom_conversion_id: "custom_conversion_id";
        custom_event_str: "custom_event_str";
        custom_event_type: "custom_event_type";
        event_id: "event_id";
        fundraiser_campaign_id: "fundraiser_campaign_id";
        mcme_conversion_id: "mcme_conversion_id";
        object_store_url: "object_store_url";
        offer_id: "offer_id";
        offline_conversion_data_set_id: "offline_conversion_data_set_id";
        offsite_conversion_event_id: "offsite_conversion_event_id";
        omnichannel_object: "omnichannel_object";
        page_id: "page_id";
        pixel_aggregation_rule: "pixel_aggregation_rule";
        pixel_id: "pixel_id";
        pixel_rule: "pixel_rule";
        place_page_set: "place_page_set";
        place_page_set_id: "place_page_set_id";
        product_catalog_id: "product_catalog_id";
        product_item_id: "product_item_id";
        product_set_id: "product_set_id";
        retention_days: "retention_days";
    }>;
    static get CustomEventType(): Readonly<{
        achievement_unlocked: "ACHIEVEMENT_UNLOCKED";
        add_payment_info: "ADD_PAYMENT_INFO";
        add_to_cart: "ADD_TO_CART";
        add_to_wishlist: "ADD_TO_WISHLIST";
        ad_impression: "AD_IMPRESSION";
        complete_registration: "COMPLETE_REGISTRATION";
        contact: "CONTACT";
        content_view: "CONTENT_VIEW";
        customize_product: "CUSTOMIZE_PRODUCT";
        d2_retention: "D2_RETENTION";
        d7_retention: "D7_RETENTION";
        donate: "DONATE";
        find_location: "FIND_LOCATION";
        initiated_checkout: "INITIATED_CHECKOUT";
        lead: "LEAD";
        level_achieved: "LEVEL_ACHIEVED";
        listing_interaction: "LISTING_INTERACTION";
        messaging_conversation_started_7d: "MESSAGING_CONVERSATION_STARTED_7D";
        other: "OTHER";
        purchase: "PURCHASE";
        rate: "RATE";
        schedule: "SCHEDULE";
        search: "SEARCH";
        service_booking_request: "SERVICE_BOOKING_REQUEST";
        spent_credits: "SPENT_CREDITS";
        start_trial: "START_TRIAL";
        submit_application: "SUBMIT_APPLICATION";
        subscribe: "SUBSCRIBE";
        tutorial_completion: "TUTORIAL_COMPLETION";
    }>;
}

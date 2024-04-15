import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * CustomAudienceDataSource
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CustomAudienceDataSource extends AbstractCrudObject {
    static get Fields(): Readonly<{
        creation_params: "creation_params";
        sub_type: "sub_type";
        type: "type";
    }>;
    static get SubType(): Readonly<{
        anything: "ANYTHING";
        app_users: "APP_USERS";
        ar_effects_events: "AR_EFFECTS_EVENTS";
        ar_experience_events: "AR_EXPERIENCE_EVENTS";
        campaign_conversions: "CAMPAIGN_CONVERSIONS";
        combination_custom_audience_users: "COMBINATION_CUSTOM_AUDIENCE_USERS";
        constant_contacts_email_hashes: "CONSTANT_CONTACTS_EMAIL_HASHES";
        contact_importer: "CONTACT_IMPORTER";
        conversion_pixel_hits: "CONVERSION_PIXEL_HITS";
        copy_paste_email_hashes: "COPY_PASTE_EMAIL_HASHES";
        custom_audience_users: "CUSTOM_AUDIENCE_USERS";
        custom_data_targeting: "CUSTOM_DATA_TARGETING";
        data_file: "DATA_FILE";
        dynamic_rule: "DYNAMIC_RULE";
        engagement_event_users: "ENGAGEMENT_EVENT_USERS";
        expanded_audience: "EXPANDED_AUDIENCE";
        external_ids: "EXTERNAL_IDS";
        external_ids_mix: "EXTERNAL_IDS_MIX";
        facebook_wifi_events: "FACEBOOK_WIFI_EVENTS";
        fb_event_signals: "FB_EVENT_SIGNALS";
        fb_pixel_hits: "FB_PIXEL_HITS";
        hashes: "HASHES";
        hashes_or_user_ids: "HASHES_OR_USER_IDS";
        household_expansion: "HOUSEHOLD_EXPANSION";
        ig_business_events: "IG_BUSINESS_EVENTS";
        ig_promoted_post: "IG_PROMOTED_POST";
        instant_article_events: "INSTANT_ARTICLE_EVENTS";
        lookalike_platform: "LOOKALIKE_PLATFORM";
        mail_chimp_email_hashes: "MAIL_CHIMP_EMAIL_HASHES";
        messenger_onsite_subscription: "MESSENGER_ONSITE_SUBSCRIPTION";
        mobile_advertiser_ids: "MOBILE_ADVERTISER_IDS";
        mobile_app_combination_events: "MOBILE_APP_COMBINATION_EVENTS";
        mobile_app_custom_audience_users: "MOBILE_APP_CUSTOM_AUDIENCE_USERS";
        mobile_app_events: "MOBILE_APP_EVENTS";
        multicountry_combination: "MULTICOUNTRY_COMBINATION";
        multi_data_events: "MULTI_DATA_EVENTS";
        multi_event_source: "MULTI_EVENT_SOURCE";
        multi_hashes: "MULTI_HASHES";
        nothing: "NOTHING";
        offline_event_users: "OFFLINE_EVENT_USERS";
        page_fans: "PAGE_FANS";
        page_smart_audience: "PAGE_SMART_AUDIENCE";
        partner_category_users: "PARTNER_CATEGORY_USERS";
        place_visits: "PLACE_VISITS";
        platform: "PLATFORM";
        platform_users: "PLATFORM_USERS";
        seed_list: "SEED_LIST";
        signal_source: "SIGNAL_SOURCE";
        smart_audience: "SMART_AUDIENCE";
        store_visit_events: "STORE_VISIT_EVENTS";
        subscriber_list: "SUBSCRIBER_LIST";
        s_expr: "S_EXPR";
        tokens: "TOKENS";
        user_ids: "USER_IDS";
        video_events: "VIDEO_EVENTS";
        video_event_users: "VIDEO_EVENT_USERS";
        web_pixel_combination_events: "WEB_PIXEL_COMBINATION_EVENTS";
        web_pixel_hits: "WEB_PIXEL_HITS";
        web_pixel_hits_custom_audience_users: "WEB_PIXEL_HITS_CUSTOM_AUDIENCE_USERS";
    }>;
    static get Type(): Readonly<{
        contact_importer: "CONTACT_IMPORTER";
        copy_paste: "COPY_PASTE";
        event_based: "EVENT_BASED";
        file_imported: "FILE_IMPORTED";
        household_audience: "HOUSEHOLD_AUDIENCE";
        seed_based: "SEED_BASED";
        third_party_imported: "THIRD_PARTY_IMPORTED";
        unknown: "UNKNOWN";
    }>;
}

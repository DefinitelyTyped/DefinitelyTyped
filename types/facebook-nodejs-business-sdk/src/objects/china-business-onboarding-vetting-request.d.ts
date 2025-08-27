import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ChinaBusinessOnboardingVettingRequest
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ChinaBusinessOnboardingVettingRequest extends AbstractCrudObject {
    static get Fields(): Readonly<{
        ad_account_creation_request_status: "ad_account_creation_request_status";
        ad_account_limit: "ad_account_limit";
        ad_account_number: "ad_account_number";
        ad_accounts_info: "ad_accounts_info";
        business_manager_id: "business_manager_id";
        business_registration: "business_registration";
        business_registration_id: "business_registration_id";
        chinese_address: "chinese_address";
        chinese_legal_entity_name: "chinese_legal_entity_name";
        city: "city";
        contact: "contact";
        coupon_code: "coupon_code";
        disapprove_reason: "disapprove_reason";
        english_business_name: "english_business_name";
        id: "id";
        official_website_url: "official_website_url";
        org_ad_account_count: "org_ad_account_count";
        payment_type: "payment_type";
        planning_agency_id: "planning_agency_id";
        planning_agency_name: "planning_agency_name";
        promotable_app_ids: "promotable_app_ids";
        promotable_page_ids: "promotable_page_ids";
        promotable_pages: "promotable_pages";
        promotable_urls: "promotable_urls";
        request_changes_reason: "request_changes_reason";
        reviewed_user: "reviewed_user";
        spend_limit: "spend_limit";
        status: "status";
        subvertical: "subvertical";
        subvertical_v2: "subvertical_v2";
        supporting_document: "supporting_document";
        time_changes_requested: "time_changes_requested";
        time_created: "time_created";
        time_updated: "time_updated";
        time_zone: "time_zone";
        used_reseller_link: "used_reseller_link";
        user_id: "user_id";
        user_name: "user_name";
        vertical: "vertical";
        vertical_v2: "vertical_v2";
        viewed_by_reseller: "viewed_by_reseller";
        zip_code: "zip_code";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<ChinaBusinessOnboardingVettingRequest>;
}

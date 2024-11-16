import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
/**
 * AdAccountCreationRequest
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountCreationRequest extends AbstractCrudObject {
    static get Fields(): Readonly<{
        ad_accounts_currency: "ad_accounts_currency";
        ad_accounts_info: "ad_accounts_info";
        additional_comment: "additional_comment";
        address_in_chinese: "address_in_chinese";
        address_in_english: "address_in_english";
        address_in_local_language: "address_in_local_language";
        advertiser_business: "advertiser_business";
        appeal_reason: "appeal_reason";
        business: "business";
        business_registration_id: "business_registration_id";
        chinese_legal_entity_name: "chinese_legal_entity_name";
        contact: "contact";
        creator: "creator";
        credit_card_id: "credit_card_id";
        disapproval_reasons: "disapproval_reasons";
        english_legal_entity_name: "english_legal_entity_name";
        extended_credit_id: "extended_credit_id";
        id: "id";
        is_smb: "is_smb";
        is_test: "is_test";
        legal_entity_name_in_local_language: "legal_entity_name_in_local_language";
        oe_request_id: "oe_request_id";
        official_website_url: "official_website_url";
        planning_agency_business: "planning_agency_business";
        planning_agency_business_id: "planning_agency_business_id";
        promotable_app_ids: "promotable_app_ids";
        promotable_page_ids: "promotable_page_ids";
        promotable_urls: "promotable_urls";
        request_change_reasons: "request_change_reasons";
        status: "status";
        subvertical: "subvertical";
        subvertical_v2: "subvertical_v2";
        time_created: "time_created";
        vertical: "vertical";
        vertical_v2: "vertical_v2";
    }>;
    getAdAccounts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    get(fields: string[], params?: Record<string, any>): Promise<AdAccountCreationRequest>;
}

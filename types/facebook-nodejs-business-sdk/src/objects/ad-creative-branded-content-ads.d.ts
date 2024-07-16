import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdCreativeBrandedContentAds
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeBrandedContentAds extends AbstractCrudObject {
    static get Fields(): Readonly<{
        ad_format: "ad_format";
        content_search_input: "content_search_input";
        creator_ad_permission_type: "creator_ad_permission_type";
        facebook_boost_post_access_token: "facebook_boost_post_access_token";
        instagram_boost_post_access_token: "instagram_boost_post_access_token";
        is_mca_internal: "is_mca_internal";
        partners: "partners";
        promoted_page_id: "promoted_page_id";
        ui_version: "ui_version";
    }>;
}

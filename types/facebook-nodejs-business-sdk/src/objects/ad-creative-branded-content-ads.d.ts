import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdCreativeBrandedContentAds
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeBrandedContentAds extends AbstractCrudObject {
    static get Fields(): Readonly<{
        ad_format: "ad_format";
        creator_ad_permission_type: "creator_ad_permission_type";
        instagram_boost_post_access_token: "instagram_boost_post_access_token";
        is_mca_internal: "is_mca_internal";
        partners: "partners";
        ui_version: "ui_version";
    }>;
}

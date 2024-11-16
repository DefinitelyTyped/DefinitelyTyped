import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdLimitsEnforcementData
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdLimitsEnforcementData extends AbstractCrudObject {
    static get Fields(): Readonly<{
        ad_limit_on_page: "ad_limit_on_page";
        ad_limit_on_scope: "ad_limit_on_scope";
        ad_volume_on_page: "ad_volume_on_page";
        ad_volume_on_scope: "ad_volume_on_scope";
        is_admin: "is_admin";
        page_name: "page_name";
    }>;
}

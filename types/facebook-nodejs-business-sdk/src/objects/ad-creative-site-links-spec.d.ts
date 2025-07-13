import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdCreativeSiteLinksSpec
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeSiteLinksSpec extends AbstractCrudObject {
    static get Fields(): Readonly<{
        site_link_image_hash: "site_link_image_hash";
        site_link_image_url: "site_link_image_url";
        site_link_recommendation_type: "site_link_recommendation_type";
        site_link_title: "site_link_title";
        site_link_url: "site_link_url";
    }>;
}

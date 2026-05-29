import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdCreativeSourcingSpec
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeSourcingSpec extends AbstractCrudObject {
    static get Fields(): Readonly<{
        associated_product_set_id: "associated_product_set_id";
        brand: "brand";
        destination_screenshot_spec: "destination_screenshot_spec";
        dynamic_site_links_spec: "dynamic_site_links_spec";
        enable_social_feedback_preservation: "enable_social_feedback_preservation";
        intent: "intent";
        pca_spec: "pca_spec";
        promotion_metadata_spec: "promotion_metadata_spec";
        site_links_data_consented: "site_links_data_consented";
        site_links_spec: "site_links_spec";
        source_url: "source_url";
        website_media_spec: "website_media_spec";
        website_summary_spec: "website_summary_spec";
    }>;
}

import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdCreativeSourcingSpec
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeSourcingSpec extends AbstractCrudObject {
    static get Fields(): Readonly<{
        associated_product_set_id: "associated_product_set_id";
        brand: "brand";
        enable_social_feedback_preservation: "enable_social_feedback_preservation";
        promotion_metadata_spec: "promotion_metadata_spec";
        site_links_spec: "site_links_spec";
        source_url: "source_url";
    }>;
}

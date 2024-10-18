import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * PartnershipAdContentSearchMedia
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PartnershipAdContentSearchMedia extends AbstractCrudObject {
    static get Fields(): Readonly<{
        ig_media: "ig_media";
        ig_media_has_product_tags: "ig_media_has_product_tags";
        is_ad_code_entry: "is_ad_code_entry";
    }>;
}

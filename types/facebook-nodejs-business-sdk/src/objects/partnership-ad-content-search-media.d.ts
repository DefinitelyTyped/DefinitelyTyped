import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * PartnershipAdContentSearchMedia
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PartnershipAdContentSearchMedia extends AbstractCrudObject {
    static get Fields(): Readonly<{
        ig_ad_code_sponsor_count: "ig_ad_code_sponsor_count";
        ig_ad_code_sponsors: "ig_ad_code_sponsors";
        ig_media: "ig_media";
        ig_media_has_product_tags: "ig_media_has_product_tags";
        is_ad_code_eligible_for_boosting_by_two_sponsors: "is_ad_code_eligible_for_boosting_by_two_sponsors";
        is_ad_code_entry: "is_ad_code_entry";
    }>;
}

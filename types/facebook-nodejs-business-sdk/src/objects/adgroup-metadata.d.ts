import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdgroupMetadata
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdgroupMetadata extends AbstractCrudObject {
    static get Fields(): Readonly<{
        ad_standard_enhancements_edit_source: "ad_standard_enhancements_edit_source";
        adgroup_creation_source: "adgroup_creation_source";
        adgroup_edit_source: "adgroup_edit_source";
        carousel_style: "carousel_style";
        carousel_with_static_card_style: "carousel_with_static_card_style";
    }>;
}

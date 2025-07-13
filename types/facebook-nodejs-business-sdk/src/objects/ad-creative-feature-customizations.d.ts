import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdCreativeFeatureCustomizations
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeFeatureCustomizations extends AbstractCrudObject {
    static get Fields(): Readonly<{
        background_color: "background_color";
        catalog_feed_tag_name: "catalog_feed_tag_name";
        font_name: "font_name";
        image_crop_style: "image_crop_style";
        showcase_card_display: "showcase_card_display";
        text_extraction: "text_extraction";
        text_style: "text_style";
    }>;
}

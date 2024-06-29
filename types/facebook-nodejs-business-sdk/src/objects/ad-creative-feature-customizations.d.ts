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
        product_recommendation_type: "product_recommendation_type";
        showcase_card_display: "showcase_card_display";
        text_style: "text_style";
        video_crop_style: "video_crop_style";
    }>;
}

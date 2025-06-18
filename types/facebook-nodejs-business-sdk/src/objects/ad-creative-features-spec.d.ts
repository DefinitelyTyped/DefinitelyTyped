import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdCreativeFeaturesSpec
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeFeaturesSpec extends AbstractCrudObject {
    static get Fields(): Readonly<{
        adapt_to_placement: "adapt_to_placement";
        add_text_overlay: "add_text_overlay";
        ads_with_benefits: "ads_with_benefits";
        advantage_plus_creative: "advantage_plus_creative";
        app_highlights: "app_highlights";
        audio: "audio";
        carousel_to_video: "carousel_to_video";
        catalog_feed_tag: "catalog_feed_tag";
        customize_product_recommendation: "customize_product_recommendation";
        cv_transformation: "cv_transformation";
        description_automation: "description_automation";
        dha_optimization: "dha_optimization";
        dynamic_partner_content: "dynamic_partner_content";
        enhance_cta: "enhance_cta";
        fb_feed_tag: "fb_feed_tag";
        fb_reels_tag: "fb_reels_tag";
        fb_story_tag: "fb_story_tag";
        feed_caption_optimization: "feed_caption_optimization";
        ig_feed_tag: "ig_feed_tag";
        ig_glados_feed: "ig_glados_feed";
        ig_reels_tag: "ig_reels_tag";
        ig_stream_tag: "ig_stream_tag";
        image_animation: "image_animation";
        image_auto_crop: "image_auto_crop";
        image_background_gen: "image_background_gen";
        image_brightness_and_contrast: "image_brightness_and_contrast";
        image_enhancement: "image_enhancement";
        image_templates: "image_templates";
        image_touchups: "image_touchups";
        image_uncrop: "image_uncrop";
        inline_comment: "inline_comment";
        local_store_extension: "local_store_extension";
        media_liquidity_animated_image: "media_liquidity_animated_image";
        media_order: "media_order";
        media_type_automation: "media_type_automation";
        multi_photo_to_video: "multi_photo_to_video";
        pac_relaxation: "pac_relaxation";
        product_extensions: "product_extensions";
        product_metadata_automation: "product_metadata_automation";
        product_tags: "product_tags";
        profile_card: "profile_card";
        site_extensions: "site_extensions";
        standard_enhancements: "standard_enhancements";
        standard_enhancements_catalog: "standard_enhancements_catalog";
        text_generation: "text_generation";
        text_optimizations: "text_optimizations";
        video_auto_crop: "video_auto_crop";
        video_filtering: "video_filtering";
        video_highlight: "video_highlight";
        video_uncrop: "video_uncrop";
    }>;
}

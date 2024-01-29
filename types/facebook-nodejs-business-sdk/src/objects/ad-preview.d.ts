import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdPreview
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdPreview extends AbstractCrudObject {
    static get Fields(): Readonly<{
        body: "body";
        transformation_spec: "transformation_spec";
    }>;
    static get AdFormat(): Readonly<{
        audience_network_instream_video: "AUDIENCE_NETWORK_INSTREAM_VIDEO";
        audience_network_instream_video_mobile: "AUDIENCE_NETWORK_INSTREAM_VIDEO_MOBILE";
        audience_network_outstream_video: "AUDIENCE_NETWORK_OUTSTREAM_VIDEO";
        audience_network_rewarded_video: "AUDIENCE_NETWORK_REWARDED_VIDEO";
        biz_disco_feed_mobile: "BIZ_DISCO_FEED_MOBILE";
        desktop_feed_standard: "DESKTOP_FEED_STANDARD";
        facebook_profile_feed_desktop: "FACEBOOK_PROFILE_FEED_DESKTOP";
        facebook_profile_feed_mobile: "FACEBOOK_PROFILE_FEED_MOBILE";
        facebook_reels_banner: "FACEBOOK_REELS_BANNER";
        facebook_reels_banner_desktop: "FACEBOOK_REELS_BANNER_DESKTOP";
        facebook_reels_mobile: "FACEBOOK_REELS_MOBILE";
        facebook_reels_postloop: "FACEBOOK_REELS_POSTLOOP";
        facebook_reels_sticker: "FACEBOOK_REELS_STICKER";
        facebook_story_mobile: "FACEBOOK_STORY_MOBILE";
        facebook_story_sticker_mobile: "FACEBOOK_STORY_STICKER_MOBILE";
        instagram_explore_contextual: "INSTAGRAM_EXPLORE_CONTEXTUAL";
        instagram_explore_grid_home: "INSTAGRAM_EXPLORE_GRID_HOME";
        instagram_explore_immersive: "INSTAGRAM_EXPLORE_IMMERSIVE";
        instagram_feed_web: "INSTAGRAM_FEED_WEB";
        instagram_feed_web_m_site: "INSTAGRAM_FEED_WEB_M_SITE";
        instagram_profile_feed: "INSTAGRAM_PROFILE_FEED";
        instagram_profile_reels: "INSTAGRAM_PROFILE_REELS";
        instagram_reels: "INSTAGRAM_REELS";
        instagram_reels_overlay: "INSTAGRAM_REELS_OVERLAY";
        instagram_search_chain: "INSTAGRAM_SEARCH_CHAIN";
        instagram_search_grid: "INSTAGRAM_SEARCH_GRID";
        instagram_standard: "INSTAGRAM_STANDARD";
        instagram_story: "INSTAGRAM_STORY";
        instagram_story_effect_tray: "INSTAGRAM_STORY_EFFECT_TRAY";
        instagram_story_web: "INSTAGRAM_STORY_WEB";
        instagram_story_web_m_site: "INSTAGRAM_STORY_WEB_M_SITE";
        instant_article_recirculation_ad: "INSTANT_ARTICLE_RECIRCULATION_AD";
        instant_article_standard: "INSTANT_ARTICLE_STANDARD";
        instream_banner_desktop: "INSTREAM_BANNER_DESKTOP";
        instream_banner_mobile: "INSTREAM_BANNER_MOBILE";
        instream_video_desktop: "INSTREAM_VIDEO_DESKTOP";
        instream_video_image: "INSTREAM_VIDEO_IMAGE";
        instream_video_mobile: "INSTREAM_VIDEO_MOBILE";
        job_browser_desktop: "JOB_BROWSER_DESKTOP";
        job_browser_mobile: "JOB_BROWSER_MOBILE";
        marketplace_mobile: "MARKETPLACE_MOBILE";
        messenger_mobile_inbox_media: "MESSENGER_MOBILE_INBOX_MEDIA";
        messenger_mobile_story_media: "MESSENGER_MOBILE_STORY_MEDIA";
        mobile_banner: "MOBILE_BANNER";
        mobile_feed_basic: "MOBILE_FEED_BASIC";
        mobile_feed_standard: "MOBILE_FEED_STANDARD";
        mobile_fullwidth: "MOBILE_FULLWIDTH";
        mobile_interstitial: "MOBILE_INTERSTITIAL";
        mobile_medium_rectangle: "MOBILE_MEDIUM_RECTANGLE";
        mobile_native: "MOBILE_NATIVE";
        right_column_standard: "RIGHT_COLUMN_STANDARD";
        suggested_video_desktop: "SUGGESTED_VIDEO_DESKTOP";
        suggested_video_mobile: "SUGGESTED_VIDEO_MOBILE";
        watch_feed_home: "WATCH_FEED_HOME";
        watch_feed_mobile: "WATCH_FEED_MOBILE";
    }>;
    static get CreativeFeature(): Readonly<{
        product_metadata_automation: "product_metadata_automation";
        profile_card: "profile_card";
        standard_enhancements_catalog: "standard_enhancements_catalog";
    }>;
    static get RenderType(): Readonly<{
        fallback: "FALLBACK";
    }>;
}

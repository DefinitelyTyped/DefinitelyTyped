import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * ReachFrequencyEstimatesPlacementBreakdown
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ReachFrequencyEstimatesPlacementBreakdown extends AbstractCrudObject {
    static get Fields(): Readonly<{
        android: "android";
        audience_network: "audience_network";
        desktop: "desktop";
        facebook_search: "facebook_search";
        fb_reels: "fb_reels";
        fb_reels_overlay: "fb_reels_overlay";
        ig_android: "ig_android";
        ig_ios: "ig_ios";
        ig_other: "ig_other";
        ig_reels: "ig_reels";
        ig_story: "ig_story";
        instant_articles: "instant_articles";
        instream_videos: "instream_videos";
        ios: "ios";
        msite: "msite";
        suggested_videos: "suggested_videos";
    }>;
}

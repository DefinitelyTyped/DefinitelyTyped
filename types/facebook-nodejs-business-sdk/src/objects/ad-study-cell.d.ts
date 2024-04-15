import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
/**
 * AdStudyCell
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdStudyCell extends AbstractCrudObject {
    static get Fields(): Readonly<{
        ad_entities_count: "ad_entities_count";
        control_percentage: "control_percentage";
        id: "id";
        name: "name";
        treatment_percentage: "treatment_percentage";
    }>;
    static get CreationTemplate(): Readonly<{
        automatic_placements: "AUTOMATIC_PLACEMENTS";
        brand_awareness: "BRAND_AWARENESS";
        facebook: "FACEBOOK";
        facebook_audience_network: "FACEBOOK_AUDIENCE_NETWORK";
        facebook_instagram: "FACEBOOK_INSTAGRAM";
        facebook_news_feed: "FACEBOOK_NEWS_FEED";
        facebook_news_feed_in_stream_video: "FACEBOOK_NEWS_FEED_IN_STREAM_VIDEO";
        high_frequency: "HIGH_FREQUENCY";
        instagram: "INSTAGRAM";
        in_stream_video: "IN_STREAM_VIDEO";
        low_frequency: "LOW_FREQUENCY";
        medium_frequency: "MEDIUM_FREQUENCY";
        mobile_optimized_video: "MOBILE_OPTIMIZED_VIDEO";
        page_post_engagement: "PAGE_POST_ENGAGEMENT";
        reach: "REACH";
        tv_commercial: "TV_COMMERCIAL";
        tv_facebook: "TV_FACEBOOK";
        video_view_optimization: "VIDEO_VIEW_OPTIMIZATION";
    }>;
    getAdAccounts(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getAdAccounts(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getAdAccounts(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getAdSets(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getAdSets(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getAdSets(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getCampaigns(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getCampaigns(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getCampaigns(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    get(fields: string[], params?: Record<any, any>): Promise<AdStudyCell>;
    update(fields: string[], params?: Record<any, any>): Promise<AdStudyCell>;
}

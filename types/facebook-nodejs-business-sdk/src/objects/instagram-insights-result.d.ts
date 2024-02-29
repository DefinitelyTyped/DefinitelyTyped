import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * InstagramInsightsResult
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class InstagramInsightsResult extends AbstractCrudObject {
    static get Fields(): Readonly<{
        description: "description";
        id: "id";
        name: "name";
        period: "period";
        title: "title";
        total_value: "total_value";
        values: "values";
    }>;
    static get Breakdown(): Readonly<{
        action_type: "action_type";
        follow_type: "follow_type";
        story_navigation_action_type: "story_navigation_action_type";
        surface_type: "surface_type";
    }>;
    static get Metric(): Readonly<{
        carousel_album_engagement: "carousel_album_engagement";
        carousel_album_impressions: "carousel_album_impressions";
        carousel_album_reach: "carousel_album_reach";
        carousel_album_saved: "carousel_album_saved";
        carousel_album_video_views: "carousel_album_video_views";
        comments: "comments";
        engagement: "engagement";
        exits: "exits";
        follows: "follows";
        ig_reels_avg_watch_time: "ig_reels_avg_watch_time";
        ig_reels_video_view_total_time: "ig_reels_video_view_total_time";
        impressions: "impressions";
        likes: "likes";
        navigation: "navigation";
        plays: "plays";
        profile_activity: "profile_activity";
        profile_visits: "profile_visits";
        reach: "reach";
        replies: "replies";
        saved: "saved";
        shares: "shares";
        taps_back: "taps_back";
        taps_forward: "taps_forward";
        total_interactions: "total_interactions";
        video_views: "video_views";
    }>;
    static get Period(): Readonly<{
        day: "day";
        days_28: "days_28";
        lifetime: "lifetime";
        month: "month";
        total_over_range: "total_over_range";
        week: "week";
    }>;
    static get MetricType(): Readonly<{
        default: "default";
        time_series: "time_series";
        total_value: "total_value";
    }>;
    static get Timeframe(): Readonly<{
        last_14_days: "last_14_days";
        last_30_days: "last_30_days";
        last_90_days: "last_90_days";
        prev_month: "prev_month";
        this_month: "this_month";
        this_week: "this_week";
    }>;
}

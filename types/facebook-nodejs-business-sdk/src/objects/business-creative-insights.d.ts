import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * BusinessCreativeInsights
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessCreativeInsights extends AbstractCrudObject {
    static get Fields(): Readonly<{
        actions: "actions";
        age: "age";
        country: "country";
        date_end: "date_end";
        date_start: "date_start";
        device_platform: "device_platform";
        gender: "gender";
        impressions: "impressions";
        inline_link_clicks: "inline_link_clicks";
        objective: "objective";
        optimization_goal: "optimization_goal";
        platform_position: "platform_position";
        publisher_platform: "publisher_platform";
        quality_ranking: "quality_ranking";
        video_play_actions: "video_play_actions";
        video_thruplay_watched_actions: "video_thruplay_watched_actions";
    }>;
}

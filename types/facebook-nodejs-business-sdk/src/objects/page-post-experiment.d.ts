import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
/**
 * PagePostExperiment
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PagePostExperiment extends AbstractCrudObject {
    static get Fields(): Readonly<{
        auto_resolve_settings: "auto_resolve_settings";
        control_video_id: "control_video_id";
        creation_time: "creation_time";
        creator: "creator";
        declared_winning_time: "declared_winning_time";
        declared_winning_video_id: "declared_winning_video_id";
        description: "description";
        experiment_video_ids: "experiment_video_ids";
        id: "id";
        insight_snapshots: "insight_snapshots";
        name: "name";
        optimization_goal: "optimization_goal";
        post_variant_fields: "post_variant_fields";
        publish_status: "publish_status";
        publish_time: "publish_time";
        scheduled_experiment_timestamp: "scheduled_experiment_timestamp";
        updated_time: "updated_time";
    }>;
    static get OptimizationGoal(): Readonly<{
        auto_resolve_to_control: "AUTO_RESOLVE_TO_CONTROL";
        avg_time_watched: "AVG_TIME_WATCHED";
        comments: "COMMENTS";
        impressions: "IMPRESSIONS";
        impressions_unique: "IMPRESSIONS_UNIQUE";
        link_clicks: "LINK_CLICKS";
        other: "OTHER";
        reactions: "REACTIONS";
        reels_plays: "REELS_PLAYS";
        shares: "SHARES";
        video_views_60s: "VIDEO_VIEWS_60S";
    }>;
    getVideoInsights(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getVideoInsights(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getVideoInsights(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    delete(fields: string[], params?: Record<any, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<any, any>): Promise<PagePostExperiment>;
}

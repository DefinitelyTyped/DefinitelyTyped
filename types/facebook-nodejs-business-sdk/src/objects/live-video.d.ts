import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
import LiveVideoInputStream from './live-video-input-stream';
import VideoPoll from './video-poll';
/**
 * LiveVideo
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class LiveVideo extends AbstractCrudObject {
    static get Fields(): Readonly<{
        ad_break_config: "ad_break_config";
        ad_break_failure_reason: "ad_break_failure_reason";
        broadcast_start_time: "broadcast_start_time";
        copyright: "copyright";
        creation_time: "creation_time";
        dash_ingest_url: "dash_ingest_url";
        dash_preview_url: "dash_preview_url";
        description: "description";
        embed_html: "embed_html";
        from: "from";
        id: "id";
        ingest_streams: "ingest_streams";
        is_manual_mode: "is_manual_mode";
        is_reference_only: "is_reference_only";
        live_views: "live_views";
        overlay_url: "overlay_url";
        permalink_url: "permalink_url";
        planned_start_time: "planned_start_time";
        recommended_encoder_settings: "recommended_encoder_settings";
        seconds_left: "seconds_left";
        secure_stream_url: "secure_stream_url";
        status: "status";
        stream_url: "stream_url";
        targeting: "targeting";
        title: "title";
        total_views: "total_views";
        video: "video";
    }>;
    static get Projection(): Readonly<{
        cubemap: "CUBEMAP";
        equirectangular: "EQUIRECTANGULAR";
        half_equirectangular: "HALF_EQUIRECTANGULAR";
    }>;
    static get SpatialAudioFormat(): Readonly<{
        ambix_4: "ambiX_4";
    }>;
    static get Status(): Readonly<{
        live_now: "LIVE_NOW";
        scheduled_canceled: "SCHEDULED_CANCELED";
        scheduled_live: "SCHEDULED_LIVE";
        scheduled_unpublished: "SCHEDULED_UNPUBLISHED";
        unpublished: "UNPUBLISHED";
    }>;
    static get StereoscopicMode(): Readonly<{
        left_right: "LEFT_RIGHT";
        mono: "MONO";
        top_bottom: "TOP_BOTTOM";
    }>;
    static get StreamType(): Readonly<{
        ambient: "AMBIENT";
        regular: "REGULAR";
    }>;
    static get BroadcastStatus(): Readonly<{
        live: "LIVE";
        live_stopped: "LIVE_STOPPED";
        processing: "PROCESSING";
        scheduled_canceled: "SCHEDULED_CANCELED";
        scheduled_expired: "SCHEDULED_EXPIRED";
        scheduled_live: "SCHEDULED_LIVE";
        scheduled_unpublished: "SCHEDULED_UNPUBLISHED";
        unpublished: "UNPUBLISHED";
        vod: "VOD";
    }>;
    static get Source(): Readonly<{
        owner: "owner";
        target: "target";
    }>;
    static get LiveCommentModerationSetting(): Readonly<{
        default: "DEFAULT";
        discussion: "DISCUSSION";
        followed: "FOLLOWED";
        follower: "FOLLOWER";
        no_hyperlink: "NO_HYPERLINK";
        protected_mode: "PROTECTED_MODE";
        restricted: "RESTRICTED";
        slow: "SLOW";
        supporter: "SUPPORTER";
        tagged: "TAGGED";
    }>;
    static get PersistentStreamKeyStatus(): Readonly<{
        disable: "DISABLE";
        enable: "ENABLE";
        regenerate: "REGENERATE";
    }>;
    getBlockedUsers(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getBlockedUsers(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getBlockedUsers(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getComments(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getComments(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getComments(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getCrosspostSharedPages(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getCrosspostSharedPages(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getCrosspostSharedPages(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getCrosspostedBroadcasts(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getCrosspostedBroadcasts(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getCrosspostedBroadcasts(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getErrors(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getErrors(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getErrors(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createInputStream(fields: string[], params?: Record<any, any>, pathOverride?: string | null): Promise<LiveVideoInputStream>;
    getPolls(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getPolls(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getPolls(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createPoll(fields: string[], params?: Record<any, any>, pathOverride?: string | null): Promise<VideoPoll>;
    getReactions(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getReactions(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getReactions(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    delete(fields: string[], params?: Record<any, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<any, any>): Promise<LiveVideo>;
    update(fields: string[], params?: Record<any, any>): Promise<LiveVideo>;
}

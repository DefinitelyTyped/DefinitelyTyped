import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
import Cursor from "./../cursor";
import LiveVideoInputStream from "./live-video-input-stream";
import VideoPoll from "./video-poll";
/**
 * LiveVideo

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class LiveVideo extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Projection(): Record<string, any>;
    static get SpatialAudioFormat(): Record<string, any>;
    static get Status(): Record<string, any>;
    static get StereoscopicMode(): Record<string, any>;
    static get StreamType(): Record<string, any>;
    static get BroadcastStatus(): Record<string, any>;
    static get Source(): Record<string, any>;
    static get LiveCommentModerationSetting(): Record<string, any>;
    static get PersistentStreamKeyStatus(): Record<string, any>;
    getBlockedUsers(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getComments(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getCrosspostShareDPages(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getCrosspostedBroadcasts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getErrors(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createInputStream(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<LiveVideoInputStream>;
    getPolls(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createPoll(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<VideoPoll>;
    getReactions(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    get(fields: string[], params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<string, any>): Promise<LiveVideo>;    get(fields: string[], params?: Record<string, any>): Promise<LiveVideo>;
}

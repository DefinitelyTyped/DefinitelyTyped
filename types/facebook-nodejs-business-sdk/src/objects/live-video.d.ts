import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
import Cursor from "./../cursor";
import LiveVideoInputStream from "./live-video-input-stream";
import VideoPoll from "./video-poll";
/**
 * LiveVideo
 * @extends AbstractCrudObject
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
    getBlockedUsers(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getComments(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getCrosspostShareDPages(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getCrosspostedBroadcasts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getErrors(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createInputStream(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<LiveVideoInputStream>;
    getPolls(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createPoll(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<VideoPoll>;
    getReactions(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    delete(fields: Array<string>, params?: Record<string, any>): AbstractObject;
    get(fields: Array<string>, params?: Record<string, any>): LiveVideo;
    update(fields: Array<string>, params?: Record<string, any>): LiveVideo;
}

import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
import LiveVideoInputStream from './live-video-input-stream';
import VideoPoll from './video-poll';
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
    getBlockedUsers(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getBlockedUsers(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getBlockedUsers(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getComments(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getComments(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getComments(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getCrosspostSharedPages(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getCrosspostSharedPages(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getCrosspostSharedPages(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getCrosspostedBroadcasts(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getCrosspostedBroadcasts(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getCrosspostedBroadcasts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getErrors(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getErrors(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getErrors(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createInputStream(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<LiveVideoInputStream>;
    getPolls(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getPolls(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getPolls(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createPoll(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<VideoPoll>;
    getReactions(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getReactions(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getReactions(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    delete(fields: string[], params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<string, any>): Promise<LiveVideo>;
    update(fields: string[], params?: Record<string, any>): Promise<LiveVideo>;
}

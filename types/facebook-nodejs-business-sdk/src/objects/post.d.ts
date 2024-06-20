import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
import Cursor from "./../cursor";
import Comment from "./comment";
/**
 * Post

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Post extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get BackdatedTimeGranularity(): Record<string, any>;
    static get Formatting(): Record<string, any>;
    static get PlaceAttachmentSetting(): Record<string, any>;
    static get PostSurfacesBlacklist(): Record<string, any>;
    static get PostingToRedspace(): Record<string, any>;
    static get TargetSurface(): Record<string, any>;
    static get UnpublishedContentType(): Record<string, any>;
    static get FeedStoryVisibility(): Record<string, any>;
    static get TimelineVisibility(): Record<string, any>;
    getAttachMEnts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getComments(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createComment(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Comment>;
    getDynamicPosts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getInsights(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    deleteLikes(params?: Record<string, any>): Promise<any>;
    createLike(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Post>;
    getReactions(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getShareDPosts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getSponsorTags(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getTo(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    get(fields: string[], params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<string, any>): Promise<Post>;    get(fields: string[], params?: Record<string, any>): Promise<Post>;
}

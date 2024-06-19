import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
import Cursor from "./../cursor";
import Comment from "./comment";
/**
 * Post
 * @extends AbstractCrudObject
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
    getAttachMEnts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getComments(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createComment(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<Comment>;
    getDynamicPosts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getInsights(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    deleteLikes(params?: Record<string, any>): Promise<any>;
    createLike(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<Post>;
    getReactions(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getShareDPosts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getSponsorTags(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getTo(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    delete(fields: Array<string>, params?: Record<string, any>): AbstractObject;
    get(fields: Array<string>, params?: Record<string, any>): Post;
    update(fields: Array<string>, params?: Record<string, any>): Post;
}

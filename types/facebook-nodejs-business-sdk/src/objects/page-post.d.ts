import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
import Cursor from "./../cursor";
import Comment from "./comment";
/**
 * PagePost

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PagePost extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get With(): Record<string, any>;
    static get BackdatedTimeGranularity(): Record<string, any>;
    static get FeedStoryVisibility(): Record<string, any>;
    static get TimelineVisibility(): Record<string, any>;
    getAttachMEnts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getComments(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createComment(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Comment>;
    getDynamicPosts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getInsights(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    deleteLikes(params?: Record<string, any>): Promise<any>;
    getLikes(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createLike(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<PagePost>;
    getReactions(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getShareDPosts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getSponsorTags(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getTo(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    get(fields: string[], params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<string, any>): Promise<PagePost>;    get(fields: string[], params?: Record<string, any>): Promise<PagePost>;
}

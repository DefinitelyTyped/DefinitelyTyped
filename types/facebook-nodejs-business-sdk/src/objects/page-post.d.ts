import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
import Comment from './comment';
export default class PagePost extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get With(): Record<string, any>;
    static get BackdatedTimeGranularity(): Record<string, any>;
    static get FeedStoryVisibility(): Record<string, any>;
    static get TimelineVisibility(): Record<string, any>;
    getAttachments(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getComments(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createComment(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null): Promise<Comment>;
    getDynamicPosts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getInsights(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    deleteLikes(params?: Record<string, any>): Promise<any>;
    getLikes(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createLike(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null): Promise<PagePost>;
    getReactions(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getSharedPosts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getSponsorTags(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getTo(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    delete(fields: Array<string>, params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: Array<string>, params?: Record<string, any>): Promise<PagePost>;
    update(fields: Array<string>, params?: Record<string, any>): Promise<PagePost>;
}

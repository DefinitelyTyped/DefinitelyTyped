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
    getAttachments(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getComments(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createComment(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Comment>;
    getDynamicPosts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getInsights(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    deleteLikes(params?: Record<string, any>): Promise<any>;
    getLikes(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createLike(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<PagePost>;
    getReactions(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getSharedPosts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getSponsorTags(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getTo(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    delete(fields: string[], params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<string, any>): Promise<PagePost>;
    update(fields: string[], params?: Record<string, any>): Promise<PagePost>;
}

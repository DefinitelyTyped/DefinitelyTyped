import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
import Comment from './comment';
export default class Photo extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get BackdatedTimeGranularity(): Record<string, any>;
    static get UnpublishedContentType(): Record<string, any>;
    static get Type(): Record<string, any>;
    getComments(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createComment(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Comment>;
    getInsights(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getLikes(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createLike(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Photo>;
    getSponsorTags(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    delete(fields: string[], params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<string, any>): Promise<Photo>;
}

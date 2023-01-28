import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
export default class Comment extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get CommentPrivacyValue(): Record<string, any>;
    static get Filter(): Record<string, any>;
    static get LiveFilter(): Record<string, any>;
    static get Order(): Record<string, any>;
    getComments(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getComments(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getComments(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createComment(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Comment>;
    deleteLikes(params?: Record<string, any>): Promise<any>;
    getLikes(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getLikes(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getLikes(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createLike(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Comment>;
    getReactions(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getReactions(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getReactions(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    delete(fields: string[], params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<string, any>): Promise<Comment>;
    update(fields: string[], params?: Record<string, any>): Promise<Comment>;
}

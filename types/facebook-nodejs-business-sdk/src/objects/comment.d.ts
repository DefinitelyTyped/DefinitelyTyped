import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
export default class Comment extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get CommentPrivacyValue(): Record<string, any>;
    static get Filter(): Record<string, any>;
    static get LiveFilter(): Record<string, any>;
    static get Order(): Record<string, any>;
    getComments(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createComment(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<Comment>;
    deleteLikes(params?: Record<string, any>): Promise<any>;
    getLikes(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createLike(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<Comment>;
    getReactions(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    delete(fields: Array<string>, params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: Array<string>, params?: Record<string, any>): Promise<Comment>;
    update(fields: Array<string>, params?: Record<string, any>): Promise<Comment>;
}

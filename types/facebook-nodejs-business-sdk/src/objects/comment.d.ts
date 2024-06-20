import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
import Cursor from "./../cursor";
/**
 * Comment

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Comment extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Order(): Record<string, any>;
    static get CommentPrivacyValue(): Record<string, any>;
    static get Filter(): Record<string, any>;
    static get LiveFilter(): Record<string, any>;
    getComments(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createComment(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Comment>;
    deleteLikes(params?: Record<string, any>): Promise<any>;
    getLikes(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createLike(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Comment>;
    getReactions(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    get(fields: string[], params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<string, any>): Promise<Comment>;    get(fields: string[], params?: Record<string, any>): Promise<Comment>;
}

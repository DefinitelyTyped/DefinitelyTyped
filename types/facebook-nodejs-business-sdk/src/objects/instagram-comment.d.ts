import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
import Cursor from "./../cursor";
/**
 * InstagramComment
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class InstagramComment extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    getReplies(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createReply(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<InstagramComment>;
    delete(fields: Array<string>, params?: Record<string, any>): AbstractObject;
    get(fields: Array<string>, params?: Record<string, any>): InstagramComment;
    update(fields: Array<string>, params?: Record<string, any>): InstagramComment;
}

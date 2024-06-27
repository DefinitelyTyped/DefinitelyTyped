import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
import Cursor from "./../cursor";
/**
 * IGComment
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class IGComment extends AbstractCrudObject {
    static get Fields(): Readonly<{
        from: "from";
        hidden: "hidden";
        id: "id";
        like_count: "like_count";
        media: "media";
        parent_id: "parent_id";
        text: "text";
        timestamp: "timestamp";
        user: "user";
        username: "username";
    }>;
    getReplies(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createReply(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<IGComment>;
    delete(fields: Array<string>, params?: Record<string, any>): AbstractObject;
    get(fields: Array<string>, params?: Record<string, any>): IGComment;
    update(fields: Array<string>, params?: Record<string, any>): IGComment;
}

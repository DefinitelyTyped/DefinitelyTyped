import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
import Cursor from "./../cursor";
/**
 * InstagramComment
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class InstagramComment extends AbstractCrudObject {
    static get Fields(): Readonly<{
        comment_type: "comment_type";
        created_at: "created_at";
        id: "id";
        instagram_comment_id: "instagram_comment_id";
        instagram_user: "instagram_user";
        mentioned_instagram_users: "mentioned_instagram_users";
        message: "message";
        username: "username";
    }>;
    getReplies(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createReply(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<InstagramComment>;
    delete(fields: Array<string>, params?: Record<string, any>): AbstractObject;
    get(fields: Array<string>, params?: Record<string, any>): InstagramComment;
    update(fields: Array<string>, params?: Record<string, any>): InstagramComment;
}

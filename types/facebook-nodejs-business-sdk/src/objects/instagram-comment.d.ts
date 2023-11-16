import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
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
    getReplies(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getReplies(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getReplies(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createReply(fields: string[], params?: Record<any, any>, pathOverride?: string | null): Promise<InstagramComment>;
    delete(fields: string[], params?: Record<any, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<any, any>): Promise<InstagramComment>;
    update(fields: string[], params?: Record<any, any>): Promise<InstagramComment>;
}

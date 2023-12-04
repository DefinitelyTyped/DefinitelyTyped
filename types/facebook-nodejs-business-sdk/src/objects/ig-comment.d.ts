import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
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
    getReplies(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getReplies(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getReplies(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createReply(fields: string[], params?: Record<any, any>, pathOverride?: string | null): Promise<IGComment>;
    delete(fields: string[], params?: Record<any, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<any, any>): Promise<IGComment>;
    update(fields: string[], params?: Record<any, any>): Promise<IGComment>;
}

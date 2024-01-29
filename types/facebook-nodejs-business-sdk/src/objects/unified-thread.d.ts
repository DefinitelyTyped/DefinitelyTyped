import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
/**
 * UnifiedThread
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class UnifiedThread extends AbstractCrudObject {
    static get Fields(): Readonly<{
        can_reply: "can_reply";
        folder: "folder";
        former_participants: "former_participants";
        id: "id";
        is_subscribed: "is_subscribed";
        link: "link";
        linked_group: "linked_group";
        message_count: "message_count";
        name: "name";
        participants: "participants";
        scoped_thread_key: "scoped_thread_key";
        senders: "senders";
        snippet: "snippet";
        subject: "subject";
        unread_count: "unread_count";
        updated_time: "updated_time";
        wallpaper: "wallpaper";
    }>;
    static get Platform(): Readonly<{
        instagram: "INSTAGRAM";
        messenger: "MESSENGER";
    }>;
    getMessages(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getMessages(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getMessages(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    get(fields: string[], params?: Record<any, any>): Promise<UnifiedThread>;
}

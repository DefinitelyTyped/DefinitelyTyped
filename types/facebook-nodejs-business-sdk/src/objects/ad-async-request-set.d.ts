import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
/**
 * AdAsyncRequestSet
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAsyncRequestSet extends AbstractCrudObject {
    static get Fields(): Readonly<{
        canceled_count: "canceled_count";
        created_time: "created_time";
        error_count: "error_count";
        id: "id";
        in_progress_count: "in_progress_count";
        initial_count: "initial_count";
        is_completed: "is_completed";
        name: "name";
        notification_mode: "notification_mode";
        notification_result: "notification_result";
        notification_status: "notification_status";
        notification_uri: "notification_uri";
        owner_id: "owner_id";
        success_count: "success_count";
        total_count: "total_count";
        updated_time: "updated_time";
    }>;
    static get NotificationMode(): Readonly<{
        off: "OFF";
        on_complete: "ON_COMPLETE";
    }>;
    getRequests(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getRequests(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getRequests(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    delete(fields: string[], params?: Record<any, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<any, any>): Promise<AdAsyncRequestSet>;
    update(fields: string[], params?: Record<any, any>): Promise<AdAsyncRequestSet>;
}

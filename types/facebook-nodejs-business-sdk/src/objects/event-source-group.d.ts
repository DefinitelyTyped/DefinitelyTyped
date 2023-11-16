import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
/**
 * EventSourceGroup
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class EventSourceGroup extends AbstractCrudObject {
    static get Fields(): Readonly<{
        business: "business";
        event_sources: "event_sources";
        id: "id";
        name: "name";
        owner_business: "owner_business";
    }>;
    getSharedAccounts(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getSharedAccounts(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getSharedAccounts(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createSharedAccount(fields: string[], params?: Record<any, any>, pathOverride?: string | null): Promise<EventSourceGroup>;
    get(fields: string[], params?: Record<any, any>): Promise<EventSourceGroup>;
    update(fields: string[], params?: Record<any, any>): Promise<EventSourceGroup>;
}

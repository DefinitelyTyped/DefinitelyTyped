import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
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
    getShareDAccounts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createShareDAccount(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<EventSourceGroup>;
    get(fields: string[], params?: Record<string, any>): Promise<EventSourceGroup>;
    update(fields: string[], params?: Record<string, any>): Promise<EventSourceGroup>;
}

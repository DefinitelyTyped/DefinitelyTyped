import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
/**
 * EventSourceGroup
 * @extends AbstractCrudObject
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
    getShareDAccounts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createShareDAccount(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<EventSourceGroup>;
    get(fields: Array<string>, params?: Record<string, any>): EventSourceGroup;
    update(fields: Array<string>, params?: Record<string, any>): EventSourceGroup;
}

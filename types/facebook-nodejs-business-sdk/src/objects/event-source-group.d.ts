import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
/**
 * EventSourceGroup

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class EventSourceGroup extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    getShareDAccounts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createShareDAccount(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<EventSourceGroup>;
    get(fields: string[], params?: Record<string, any>): Promise<EventSourceGroup>;    get(fields: string[], params?: Record<string, any>): Promise<EventSourceGroup>;
}

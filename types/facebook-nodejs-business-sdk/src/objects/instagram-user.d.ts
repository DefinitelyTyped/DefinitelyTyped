import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
import IGUpcomingEvent from "./ig-upcoming-event";
/**
 * InstagramUser

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class InstagramUser extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    getAgencies(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getArEffects(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getAuthorizedAdAccounts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createAuthorizedAdAccount(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<InstagramUser>;
    getUpcomingEvents(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createUpcomingEvent(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<IGUpcomingEvent>;
    get(fields: string[], params?: Record<string, any>): Promise<InstagramUser>;
}

import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
import IGUpcomingEvent from "./ig-upcoming-event";
/**
 * InstagramUser
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class InstagramUser extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    getAgencies(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getArEffects(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getAuthorizedAdAccounts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createAuthorizedAdAccount(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<InstagramUser>;
    getUpcomingEvents(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createUpcomingEvent(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<IGUpcomingEvent>;
    get(fields: Array<string>, params?: Record<string, any>): InstagramUser;
}

import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
import Cursor from "./../cursor";
/**
 * AdsPixel

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsPixel extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get SortBy(): Record<string, any>;
    static get AutomaticMatchingFields(): Record<string, any>;
    static get DataUseSetting(): Record<string, any>;
    static get FirstPartyCookieStatus(): Record<string, any>;
    static get PermittedTasks(): Record<string, any>;
    static get Tasks(): Record<string, any>;
    getAdAccounts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    deleteAgencies(params?: Record<string, any>): Promise<any>;
    getAgencies(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createAgency(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AdsPixel>;
    createAhpConfig(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AbstractObject>;
    getAssignedUsers(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createAssignedUser(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AdsPixel>;
    getDaChecks(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createEvent(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AbstractObject>;
    getOfflineEventUploads(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getOpenBridgeConfigurations(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createShadowTrafficHelper(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AbstractObject>;
    deleteShareDAccounts(params?: Record<string, any>): Promise<any>;
    getShareDAccounts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createShareDAccount(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AdsPixel>;
    getShareDAgencies(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getStats(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    get(fields: string[], params?: Record<string, any>): Promise<AdsPixel>;    get(fields: string[], params?: Record<string, any>): Promise<AdsPixel>;
}

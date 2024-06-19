import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
import Cursor from "./../cursor";
/**
 * AdsPixel
 * @extends AbstractCrudObject
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
    getAdAccounts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    deleteAgencies(params?: Record<string, any>): Promise<any>;
    getAgencies(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createAgency(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<AdsPixel>;
    createAhpConfig(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<AbstractObject>;
    getAssignedUsers(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createAssignedUser(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<AdsPixel>;
    getDaChecks(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createEvent(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<AbstractObject>;
    getOfflineEventUploads(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getOpenBridgeConfigurations(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createShadowTrafficHelper(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<AbstractObject>;
    deleteShareDAccounts(params?: Record<string, any>): Promise<any>;
    getShareDAccounts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createShareDAccount(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<AdsPixel>;
    getShareDAgencies(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getStats(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    get(fields: Array<string>, params?: Record<string, any>): AdsPixel;
    update(fields: Array<string>, params?: Record<string, any>): AdsPixel;
}

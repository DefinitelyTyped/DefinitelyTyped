import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
export default class AdsPixel extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get SortBy(): Record<string, any>;
    static get AutomaticMatchingFields(): Record<string, any>;
    static get DataUseSetting(): Record<string, any>;
    static get FirstPartyCookieStatus(): Record<string, any>;
    static get Tasks(): Record<string, any>;
    getAssignedUsers(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createAssignedUser(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<AdsPixel>;
    getDaChecks(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createEvent(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<AbstractObject>;
    createMeapitocapiconsolidationhelper(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<AbstractObject>;
    createShadowTrafficHelper(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<AbstractObject>;
    deleteSharedAccounts(params?: Record<string, any>): Promise<any>;
    getSharedAccounts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createSharedAccount(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<AdsPixel>;
    getSharedAgencies(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getStats(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createTelemetry(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<AbstractObject>;
    get(fields: Array<string>, params?: Record<string, any>): Promise<AdsPixel>;
    update(fields: Array<string>, params?: Record<string, any>): Promise<AdsPixel>;
}

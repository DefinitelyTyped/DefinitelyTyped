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
    getAssignedUsers(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createAssignedUser(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AdsPixel>;
    getDaChecks(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createEvent(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AbstractObject>;
    createMeapitocapiconsolidationhelper(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AbstractObject>;
    createShadowTrafficHelper(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AbstractObject>;
    deleteSharedAccounts(params?: Record<string, any>): Promise<any>;
    getSharedAccounts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createSharedAccount(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AdsPixel>;
    getSharedAgencies(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getStats(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createTelemetry(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AbstractObject>;
    get(fields: string[], params?: Record<string, any>): Promise<AdsPixel>;
    update(fields: string[], params?: Record<string, any>): Promise<AdsPixel>;
}

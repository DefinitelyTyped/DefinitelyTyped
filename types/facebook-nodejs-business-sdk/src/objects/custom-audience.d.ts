import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
export default class CustomAudience extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get ClaimObjective(): Record<string, any>;
    static get ContentType(): Record<string, any>;
    static get CustomerFileSource(): Record<string, any>;
    static get Subtype(): Record<string, any>;
    static get ActionSource(): Record<string, any>;
    deleteAdAccounts(params?: Record<string, any>): Promise<any>;
    getAdAccounts(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getAdAccounts(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getAdAccounts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createAdAccount(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<CustomAudience>;
    getAds(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getAds(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getAds(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getSessions(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getSessions(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getSessions(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getSharedAccountInfo(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getSharedAccountInfo(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getSharedAccountInfo(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    deleteUsers(params?: Record<string, any>): Promise<any>;
    createUser(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<CustomAudience>;
    createUsersReplace(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<CustomAudience>;
    delete(fields: string[], params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<string, any>): Promise<CustomAudience>;
    update(fields: string[], params?: Record<string, any>): Promise<CustomAudience>;
}

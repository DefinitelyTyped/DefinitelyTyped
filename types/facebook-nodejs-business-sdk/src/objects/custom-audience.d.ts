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
    getAdAccounts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createAdAccount(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<CustomAudience>;
    getAds(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getSessions(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getSharedAccountInfo(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    deleteUsers(params?: Record<string, any>): Promise<any>;
    createUser(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<CustomAudience>;
    createUsersReplace(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<CustomAudience>;
    delete(fields: Array<string>, params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: Array<string>, params?: Record<string, any>): Promise<CustomAudience>;
    update(fields: Array<string>, params?: Record<string, any>): Promise<CustomAudience>;
}

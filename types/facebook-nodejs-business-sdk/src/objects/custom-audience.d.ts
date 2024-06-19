import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
import Cursor from "./../cursor";
/**
 * CustomAudience
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CustomAudience extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get ClaimObjective(): Record<string, any>;
    static get ContentType(): Record<string, any>;
    static get CustomerFileSource(): Record<string, any>;
    static get Subtype(): Record<string, any>;
    static get ActionSource(): Record<string, any>;
    deleteAdAccounts(params?: Record<string, any>): Promise<any>;
    getAdAccounts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createAdAccount(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<CustomAudience>;
    getAds(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getSalts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createSalt(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<CustomAudience>;
    getSessions(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getShareDAccountInfo(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    deleteUsers(params?: Record<string, any>): Promise<any>;
    createUser(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<CustomAudience>;
    createUsersReplace(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<CustomAudience>;
    delete(fields: Array<string>, params?: Record<string, any>): AbstractObject;
    get(fields: Array<string>, params?: Record<string, any>): CustomAudience;
    update(fields: Array<string>, params?: Record<string, any>): CustomAudience;
}

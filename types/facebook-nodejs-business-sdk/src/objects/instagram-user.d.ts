import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
export default class InstagramUser extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    getAgencies(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getAuthorizedAdAccounts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createAuthorizedAdAccount(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<InstagramUser>;
    get(fields: Array<string>, params?: Record<string, any>): Promise<InstagramUser>;
}

import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
export default class InstagramUser extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    getAgencies(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getAuthorizedAdAccounts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createAuthorizedAdAccount(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<InstagramUser>;
    get(fields: string[], params?: Record<string, any>): Promise<InstagramUser>;
}

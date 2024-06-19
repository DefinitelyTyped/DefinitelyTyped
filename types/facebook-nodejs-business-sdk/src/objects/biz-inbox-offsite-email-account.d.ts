import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
/**
 * BizInboxOffsiteEmailAccount
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BizInboxOffsiteEmailAccount extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    getAssignedUsers(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    get(fields: Array<string>, params?: Record<string, any>): BizInboxOffsiteEmailAccount;
}

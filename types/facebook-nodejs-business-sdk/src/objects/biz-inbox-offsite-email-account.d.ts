import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
/**
 * BizInboxOffsiteEmailAccount
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BizInboxOffsiteEmailAccount extends AbstractCrudObject {
    static get Fields(): Readonly<{
        email_address: "email_address";
        id: "id";
    }>;
    getAssignedUsers(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    get(fields: string[], params?: Record<string, any>): Promise<BizInboxOffsiteEmailAccount>;
}

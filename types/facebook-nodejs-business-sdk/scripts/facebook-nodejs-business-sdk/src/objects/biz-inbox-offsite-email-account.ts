import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
import AssignedUser from "./assigned-user";
/**
 * BizInboxOffsiteEmailAccount
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class BizInboxOffsiteEmailAccount extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      email_address: 'email_address',
      id: 'id'
    });
  }

  getAssignedUsers(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AssignedUser, fields, params, fetchFirstPage, '/assigned_users');
  }

  get(fields: Array<string>, params: Record<string, any> = {}): BizInboxOffsiteEmailAccount {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}
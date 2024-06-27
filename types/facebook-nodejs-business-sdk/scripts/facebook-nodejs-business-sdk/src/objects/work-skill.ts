import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
import User from "./user";
/**
 * WorkSkill
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class WorkSkill extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      id: 'id',
      name: 'name'
    });
  }

  getUsers(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(User, fields, params, fetchFirstPage, '/users');
  }

  get(fields: Array<string>, params: Record<string, any> = {}): WorkSkill {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}
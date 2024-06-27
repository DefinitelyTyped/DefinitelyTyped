import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * Permission
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class Permission extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      permission: 'permission',
      status: 'status'
    });
  }

  static get Status() {
    return Object.freeze({
      declined: 'declined',
      expired: 'expired',
      granted: 'granted'
    });
  }

}
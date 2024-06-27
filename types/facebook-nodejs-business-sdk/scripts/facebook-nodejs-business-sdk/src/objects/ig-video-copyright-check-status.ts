import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * IGVideoCopyrightCheckStatus
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class IGVideoCopyrightCheckStatus extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      matches_found: 'matches_found',
      status: 'status'
    });
  }

}
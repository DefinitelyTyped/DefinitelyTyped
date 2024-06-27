import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * VideoCopyrightCheckStatus
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class VideoCopyrightCheckStatus extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      matches_found: 'matches_found',
      status: 'status'
    });
  }

}
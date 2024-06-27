import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * VideoCopyrightConditionGroup
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class VideoCopyrightConditionGroup extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      action: 'action',
      conditions: 'conditions',
      validity_status: 'validity_status'
    });
  }

}
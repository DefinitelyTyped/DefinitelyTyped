import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * UserLeadGenDisclaimerResponse
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class UserLeadGenDisclaimerResponse extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      checkbox_key: 'checkbox_key',
      is_checked: 'is_checked'
    });
  }

}
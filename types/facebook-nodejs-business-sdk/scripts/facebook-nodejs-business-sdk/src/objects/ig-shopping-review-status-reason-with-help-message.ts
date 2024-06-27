import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * IGShoppingReviewStatusReasonWithHelpMessage
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class IGShoppingReviewStatusReasonWithHelpMessage extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      code: 'code',
      help_url: 'help_url',
      message: 'message'
    });
  }

}
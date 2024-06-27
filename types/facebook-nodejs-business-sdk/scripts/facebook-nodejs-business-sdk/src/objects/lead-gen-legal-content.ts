import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * LeadGenLegalContent
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class LeadGenLegalContent extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      custom_disclaimer: 'custom_disclaimer',
      id: 'id',
      privacy_policy: 'privacy_policy'
    });
  }

}
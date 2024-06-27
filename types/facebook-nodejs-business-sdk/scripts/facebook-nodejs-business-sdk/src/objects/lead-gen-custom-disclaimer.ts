import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * LeadGenCustomDisclaimer
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class LeadGenCustomDisclaimer extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      body: 'body',
      checkboxes: 'checkboxes',
      title: 'title'
    });
  }

}
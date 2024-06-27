import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * PageAppWithLeadsAccess
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class PageAppWithLeadsAccess extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      can_access_leads: 'can_access_leads',
      type: 'type'
    });
  }

}
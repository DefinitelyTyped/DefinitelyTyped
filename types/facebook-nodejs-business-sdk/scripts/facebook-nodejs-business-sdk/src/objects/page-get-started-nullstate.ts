import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * PageGetStartedNullstate
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class PageGetStartedNullstate extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      cta_title: 'cta_title',
      processed_greeting: 'processed_greeting',
      responsiveness: 'responsiveness'
    });
  }

}
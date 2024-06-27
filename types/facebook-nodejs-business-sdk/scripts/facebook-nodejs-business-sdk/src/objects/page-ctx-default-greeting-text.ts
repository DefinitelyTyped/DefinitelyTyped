import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * PageCTXDefaultGreetingText
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class PageCTXDefaultGreetingText extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      ctd: 'ctd',
      ctm: 'ctm',
      ctwa: 'ctwa'
    });
  }

}
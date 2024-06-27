import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdCreativeAdDisclaimer
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdCreativeAdDisclaimer extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      text: 'text',
      title: 'title',
      url: 'url'
    });
  }

}
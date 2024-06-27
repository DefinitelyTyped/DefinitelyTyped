import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdAccountPromotableObjects
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdAccountPromotableObjects extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      promotable_app_ids: 'promotable_app_ids',
      promotable_page_ids: 'promotable_page_ids',
      promotable_urls: 'promotable_urls'
    });
  }

}
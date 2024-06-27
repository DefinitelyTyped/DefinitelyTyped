import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdsPixelRecentEventsResult
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdsPixelRecentEventsResult extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      count: 'count',
      event: 'event'
    });
  }

}
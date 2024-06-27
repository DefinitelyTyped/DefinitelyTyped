import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * SplitTestWinner
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class SplitTestWinner extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      ad_object_level: 'ad_object_level',
      confidences: 'confidences',
      winner_ad_object_id: 'winner_ad_object_id'
    });
  }

}
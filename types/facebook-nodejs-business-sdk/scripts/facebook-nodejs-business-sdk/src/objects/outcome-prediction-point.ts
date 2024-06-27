import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * OutcomePredictionPoint
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class OutcomePredictionPoint extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      actions: 'actions',
      impressions: 'impressions',
      reach: 'reach',
      spend: 'spend'
    });
  }

}
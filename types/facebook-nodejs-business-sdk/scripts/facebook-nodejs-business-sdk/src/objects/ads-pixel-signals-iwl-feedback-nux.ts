import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdsPixelSignalsIWLFeedbackNux
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdsPixelSignalsIWLFeedbackNux extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      should_ask_to_rate: 'should_ask_to_rate'
    });
  }

}
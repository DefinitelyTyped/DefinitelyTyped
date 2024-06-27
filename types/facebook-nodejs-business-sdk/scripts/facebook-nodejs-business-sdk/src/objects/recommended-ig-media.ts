import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * RecommendedIGMedia
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class RecommendedIGMedia extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      intent_score: 'intent_score',
      media: 'media'
    });
  }

}
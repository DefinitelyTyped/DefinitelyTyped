import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * RecommendedPagePost
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class RecommendedPagePost extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      intent_score: 'intent_score',
      is_ig_media: 'is_ig_media',
      post_id: 'post_id'
    });
  }

}
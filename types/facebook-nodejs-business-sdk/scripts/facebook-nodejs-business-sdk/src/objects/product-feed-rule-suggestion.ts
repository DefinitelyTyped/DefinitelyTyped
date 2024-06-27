import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ProductFeedRuleSuggestion
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class ProductFeedRuleSuggestion extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      attribute: 'attribute',
      params: 'params',
      type: 'type'
    });
  }

}
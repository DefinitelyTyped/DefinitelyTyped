import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ProductFeedRulePreviewSample
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class ProductFeedRulePreviewSample extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      properties_after: 'properties_after',
      properties_before: 'properties_before'
    });
  }

}
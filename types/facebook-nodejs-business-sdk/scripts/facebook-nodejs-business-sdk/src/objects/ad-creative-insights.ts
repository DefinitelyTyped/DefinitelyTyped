import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdCreativeInsights
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdCreativeInsights extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      aesthetics: 'aesthetics'
    });
  }

}
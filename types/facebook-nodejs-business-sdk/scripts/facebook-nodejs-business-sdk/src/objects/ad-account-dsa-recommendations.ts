import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdAccountDsaRecommendations
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdAccountDsaRecommendations extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      recommendations: 'recommendations'
    });
  }

}
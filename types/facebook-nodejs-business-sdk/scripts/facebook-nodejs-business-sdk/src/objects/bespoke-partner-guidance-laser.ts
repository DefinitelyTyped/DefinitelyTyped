import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * BespokePartnerGuidanceLaser
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class BespokePartnerGuidanceLaser extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      business: 'business',
      campaign_group: 'campaign_group',
      cpa_improvement: 'cpa_improvement',
      guidance_type: 'guidance_type',
      id: 'id'
    });
  }

}
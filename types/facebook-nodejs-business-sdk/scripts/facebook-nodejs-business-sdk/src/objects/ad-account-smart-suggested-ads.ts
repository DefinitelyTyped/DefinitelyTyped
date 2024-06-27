import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdAccountSmartSuggestedAds
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdAccountSmartSuggestedAds extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      ad_creative_spec: 'ad_creative_spec',
      description: 'description',
      guidance_spec: 'guidance_spec',
      thumbnail_url: 'thumbnail_url'
    });
  }

}
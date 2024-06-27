import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdAssetFeedSpecCarousel
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdAssetFeedSpecCarousel extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      adlabels: 'adlabels',
      child_attachments: 'child_attachments',
      multi_share_end_card: 'multi_share_end_card',
      multi_share_optimized: 'multi_share_optimized'
    });
  }

}
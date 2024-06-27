import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * WebsiteCreativeAssetSuggestions
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class WebsiteCreativeAssetSuggestions extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      ad_account_id: 'ad_account_id',
      extraction_status: 'extraction_status',
      id: 'id',
      link_url: 'link_url'
    });
  }

  get(fields: Array<string>, params: Record<string, any> = {}): WebsiteCreativeAssetSuggestions {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}
import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * WebsiteCreativeAssetSource
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class WebsiteCreativeAssetSource extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      id: 'id',
      source_url: 'source_url'
    });
  }

  get(fields: Array<string>, params: Record<string, any> = {}): WebsiteCreativeAssetSource {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}
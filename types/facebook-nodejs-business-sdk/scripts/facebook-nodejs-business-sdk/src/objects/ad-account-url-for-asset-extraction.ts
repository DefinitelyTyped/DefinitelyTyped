import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdAccountURLForAssetExtraction
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdAccountURLForAssetExtraction extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      source_type: 'source_type',
      source_url: 'source_url'
    });
  }

}
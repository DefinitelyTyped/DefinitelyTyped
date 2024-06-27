import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdCreativeFeatureActionMetadata
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdCreativeFeatureActionMetadata extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      type: 'type'
    });
  }

}
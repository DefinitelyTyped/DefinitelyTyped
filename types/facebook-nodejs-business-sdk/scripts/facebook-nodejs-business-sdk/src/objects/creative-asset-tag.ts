import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CreativeAssetTag
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class CreativeAssetTag extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      name: 'name'
    });
  }

}
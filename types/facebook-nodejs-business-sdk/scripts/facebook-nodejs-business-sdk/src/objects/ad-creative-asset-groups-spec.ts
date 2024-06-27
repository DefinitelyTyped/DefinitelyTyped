import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdCreativeAssetGroupsSpec
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdCreativeAssetGroupsSpec extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      groups: 'groups',
      origin: 'origin'
    });
  }

}
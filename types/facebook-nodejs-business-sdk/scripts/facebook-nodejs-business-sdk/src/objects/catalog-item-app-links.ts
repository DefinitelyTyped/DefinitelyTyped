import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CatalogItemAppLinks
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class CatalogItemAppLinks extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      android: 'android',
      ios: 'ios',
      ipad: 'ipad',
      iphone: 'iphone',
      web: 'web',
      windows: 'windows',
      windows_phone: 'windows_phone',
      windows_universal: 'windows_universal'
    });
  }

}
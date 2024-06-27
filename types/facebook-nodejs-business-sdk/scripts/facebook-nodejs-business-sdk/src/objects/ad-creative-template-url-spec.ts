import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdCreativeTemplateURLSpec
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdCreativeTemplateURLSpec extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      android: 'android',
      config: 'config',
      ios: 'ios',
      ipad: 'ipad',
      iphone: 'iphone',
      web: 'web',
      windows_phone: 'windows_phone'
    });
  }

}
import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AppLinks
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AppLinks extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      android: 'android',
      id: 'id',
      ios: 'ios',
      ipad: 'ipad',
      iphone: 'iphone',
      web: 'web',
      windows: 'windows',
      windows_phone: 'windows_phone',
      windows_universal: 'windows_universal'
    });
  }

  get(fields: Array<string>, params: Record<string, any> = {}): AppLinks {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}
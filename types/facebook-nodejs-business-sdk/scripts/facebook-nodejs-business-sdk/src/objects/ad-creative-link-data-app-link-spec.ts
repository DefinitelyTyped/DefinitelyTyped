import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdCreativeLinkDataAppLinkSpec
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdCreativeLinkDataAppLinkSpec extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      android: 'android',
      ios: 'ios',
      ipad: 'ipad',
      iphone: 'iphone'
    });
  }

}
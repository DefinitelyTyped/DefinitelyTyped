import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdCreativeOmnichannelLinkSpec
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdCreativeOmnichannelLinkSpec extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      app: 'app',
      web: 'web'
    });
  }

}
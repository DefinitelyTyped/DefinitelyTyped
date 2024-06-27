import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ExternalMerchantSettings
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class ExternalMerchantSettings extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      connect_woo: 'connect_woo',
      external_platform: 'external_platform',
      id: 'id'
    });
  }

  get(fields: Array<string>, params: Record<string, any> = {}): ExternalMerchantSettings {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}
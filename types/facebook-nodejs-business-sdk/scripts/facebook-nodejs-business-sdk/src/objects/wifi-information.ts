import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * WifiInformation
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class WifiInformation extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      id: 'id',
      name: 'name',
      network_access_type: 'network_access_type'
    });
  }

  get(fields: Array<string>, params: Record<string, any> = {}): WifiInformation {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}
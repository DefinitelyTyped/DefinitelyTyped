import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * VidwallaBroadcast
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class VidwallaBroadcast extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      id: 'id',
      overlay_url: 'overlay_url'
    });
  }

  get(fields: Array<string>, params: Record<string, any> = {}): VidwallaBroadcast {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}
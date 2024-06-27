import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * IGBoostMediaAd
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class IGBoostMediaAd extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      ad_id: 'ad_id',
      ad_status: 'ad_status',
      id: 'id'
    });
  }

  get(fields: Array<string>, params: Record<string, any> = {}): IGBoostMediaAd {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}
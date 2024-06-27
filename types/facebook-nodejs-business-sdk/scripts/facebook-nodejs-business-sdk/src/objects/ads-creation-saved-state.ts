import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdsCreationSavedState
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdsCreationSavedState extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      ad_account: 'ad_account',
      id: 'id',
      serialized_store_data: 'serialized_store_data',
      time_updated: 'time_updated',
      user: 'user'
    });
  }

  get(fields: Array<string>, params: Record<string, any> = {}): AdsCreationSavedState {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}
import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * OfflineTermsOfService
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class OfflineTermsOfService extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      accept_time: 'accept_time',
      id: 'id',
      signed_by_user: 'signed_by_user'
    });
  }

  get(fields: Array<string>, params: Record<string, any> = {}): OfflineTermsOfService {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}
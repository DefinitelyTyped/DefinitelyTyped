import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * PublisherWhiteList
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class PublisherWhiteList extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      business_owner_id: 'business_owner_id',
      id: 'id',
      last_updated_time: 'last_updated_time',
      last_updated_user: 'last_updated_user',
      name: 'name',
      placement_type: 'placement_type'
    });
  }

  get(fields: Array<string>, params: Record<string, any> = {}): PublisherWhiteList {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}
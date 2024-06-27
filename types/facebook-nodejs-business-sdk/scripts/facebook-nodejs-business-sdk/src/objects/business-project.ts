import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * BusinessProject
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class BusinessProject extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      business: 'business',
      created_time: 'created_time',
      creator: 'creator',
      id: 'id',
      name: 'name'
    });
  }

  get(fields: Array<string>, params: Record<string, any> = {}): BusinessProject {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}
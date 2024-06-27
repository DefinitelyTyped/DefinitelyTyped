import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdvAInstance
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdvAInstance extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      id: 'id',
      instance_type: 'instance_type',
      name: 'name',
      owner_business: 'owner_business'
    });
  }

  get(fields: Array<string>, params: Record<string, any> = {}): AdvAInstance {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}
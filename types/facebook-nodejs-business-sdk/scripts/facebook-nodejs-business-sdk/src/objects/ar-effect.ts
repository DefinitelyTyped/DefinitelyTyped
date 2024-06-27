import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AREffect
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AREffect extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      creation_time: 'creation_time',
      id: 'id',
      last_modified_time: 'last_modified_time',
      name: 'name',
      status: 'status',
      surfaces: 'surfaces'
    });
  }

  get(fields: Array<string>, params: Record<string, any> = {}): AREffect {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}
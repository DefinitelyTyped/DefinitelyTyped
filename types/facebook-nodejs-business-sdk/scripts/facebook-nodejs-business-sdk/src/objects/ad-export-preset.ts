import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdExportPreset
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdExportPreset extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      created_time: 'created_time',
      fields: 'fields',
      id: 'id',
      name: 'name',
      owner: 'owner',
      updated_time: 'updated_time'
    });
  }

  get(fields: Array<string>, params: Record<string, any> = {}): AdExportPreset {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}
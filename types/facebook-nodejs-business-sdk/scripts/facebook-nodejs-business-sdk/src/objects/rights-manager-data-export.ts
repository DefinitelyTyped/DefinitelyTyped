import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * RightsManagerDataExport
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class RightsManagerDataExport extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      download_uri: 'download_uri',
      export_scope: 'export_scope',
      id: 'id',
      name: 'name',
      record_type: 'record_type',
      time_range_end: 'time_range_end',
      time_range_start: 'time_range_start'
    });
  }

  get(fields: Array<string>, params: Record<string, any> = {}): RightsManagerDataExport {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}
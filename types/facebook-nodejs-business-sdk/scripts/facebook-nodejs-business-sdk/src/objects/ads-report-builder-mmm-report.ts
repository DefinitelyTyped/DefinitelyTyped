import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdsReportBuilderMMMReport
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdsReportBuilderMMMReport extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      async_status: 'async_status',
      export_format: 'export_format',
      export_name: 'export_name',
      export_type: 'export_type',
      has_seen: 'has_seen',
      id: 'id',
      mmm_status: 'mmm_status',
      time_start: 'time_start'
    });
  }

  get(fields: Array<string>, params: Record<string, any> = {}): AdsReportBuilderMMMReport {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}
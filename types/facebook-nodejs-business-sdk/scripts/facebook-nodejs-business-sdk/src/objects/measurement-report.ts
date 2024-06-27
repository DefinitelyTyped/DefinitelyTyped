import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * MeasurementReport
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class MeasurementReport extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      download_urls: 'download_urls',
      id: 'id',
      metadata: 'metadata',
      report_type: 'report_type',
      status: 'status'
    });
  }

  get(fields: Array<string>, params: Record<string, any> = {}): MeasurementReport {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}
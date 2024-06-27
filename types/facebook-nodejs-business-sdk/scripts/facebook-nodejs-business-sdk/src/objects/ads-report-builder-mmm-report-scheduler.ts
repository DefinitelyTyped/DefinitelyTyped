import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdsReportBuilderMMMReportScheduler
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdsReportBuilderMMMReportScheduler extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      ad_account_ids: 'ad_account_ids',
      filtering: 'filtering',
      id: 'id',
      report_name: 'report_name',
      schedule_frequency: 'schedule_frequency'
    });
  }

  get(fields: Array<string>, params: Record<string, any> = {}): AdsReportBuilderMMMReportScheduler {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}
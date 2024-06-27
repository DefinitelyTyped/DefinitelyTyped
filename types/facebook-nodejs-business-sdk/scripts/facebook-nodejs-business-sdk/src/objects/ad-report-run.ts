import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
import AdsInsights from "./ads-insights";
import FacebookAdsApi from "./../api";
/**
 * AdReportRun
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdReportRun extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      account_id: 'account_id',
      async_percent_completion: 'async_percent_completion',
      async_status: 'async_status',
      date_start: 'date_start',
      date_stop: 'date_stop',
      emails: 'emails',
      friendly_name: 'friendly_name',
      id: 'id',
      is_bookmarked: 'is_bookmarked',
      is_running: 'is_running',
      schedule_id: 'schedule_id',
      time_completed: 'time_completed',
      time_ref: 'time_ref'
    });
  }

  getInsights(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AdsInsights, fields, params, fetchFirstPage, '/insights');
  }

  get(fields: Array<string>, params: Record<string, any> = {}): AdReportRun {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

  constructor(id: number | (string | null | undefined) = null, data: Record<string, any> = {}, parentId: string | null | undefined, api: FacebookAdsApi | null | undefined) {
    super();
    this.id = data.report_run_id;
  }

}
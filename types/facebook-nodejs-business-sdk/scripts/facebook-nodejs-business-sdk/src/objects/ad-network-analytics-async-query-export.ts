import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdNetworkAnalyticsAsyncQueryExport
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdNetworkAnalyticsAsyncQueryExport extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      error: 'error',
      export_link: 'export_link',
      query_id: 'query_id',
      status: 'status'
    });
  }

}
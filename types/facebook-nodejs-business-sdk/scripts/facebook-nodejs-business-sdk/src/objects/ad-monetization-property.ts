import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
import AdNetworkAnalyticsSyncQueryResult from "./ad-network-analytics-sync-query-result";
import AdNetworkAnalyticsAsyncQueryResult from "./ad-network-analytics-async-query-result";
/**
 * AdMonetizationProperty
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdMonetizationProperty extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      owner_business: 'owner_business',
      id: 'id'
    });
  }

  getAdNetworkAnalytics(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AdNetworkAnalyticsSyncQueryResult, fields, params, fetchFirstPage, '/adnetworkanalytics');
  }

  createAdNetworkAnalytic(fields: Array<string>, params: Record<string, any> = {}, pathOverride?: string | null | undefined = null): Promise<AdMonetizationProperty> {
    return this.createEdge('/adnetworkanalytics', fields, params, AdMonetizationProperty, pathOverride);
  }

  getAdNetworkAnalyticsResults(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AdNetworkAnalyticsAsyncQueryResult, fields, params, fetchFirstPage, '/adnetworkanalytics_results');
  }

  get(fields: Array<string>, params: Record<string, any> = {}): AdMonetizationProperty {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}
import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
import ProductFeedUploadErrorSample from "./product-feed-upload-error-sample";
import ProductFeedRuleSuggestion from "./product-feed-rule-suggestion";
/**
 * ProductFeedUploadError
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class ProductFeedUploadError extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      affected_surfaces: 'affected_surfaces',
      description: 'description',
      error_type: 'error_type',
      id: 'id',
      severity: 'severity',
      summary: 'summary',
      total_count: 'total_count'
    });
  }

  static get AffectedSurfaces() {
    return Object.freeze({
      dynamic_ads: 'Dynamic Ads',
      marketplace: 'Marketplace',
      us_marketplace: 'US Marketplace'
    });
  }

  static get Severity() {
    return Object.freeze({
      fatal: 'fatal',
      warning: 'warning'
    });
  }

  static get ErrorPriority() {
    return Object.freeze({
      high: 'HIGH',
      low: 'LOW',
      medium: 'MEDIUM'
    });
  }

  getSamples(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(ProductFeedUploadErrorSample, fields, params, fetchFirstPage, '/samples');
  }

  getSuggestedRules(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(ProductFeedRuleSuggestion, fields, params, fetchFirstPage, '/suggested_rules');
  }

  get(fields: Array<string>, params: Record<string, any> = {}): ProductFeedUploadError {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}
import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
import AdsPixel from "./ads-pixel";
import Application from "./application";
import BrandRequest from "./brand-request";
import CustomConversion from "./custom-conversion";
import OfflineConversionDataSet from "./offline-conversion-data-set";
import Business from "./business";
import PartnerStudy from "./partner-study";
/**
 * AdStudyObjective
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdStudyObjective extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      id: 'id',
      is_primary: 'is_primary',
      last_updated_results: 'last_updated_results',
      name: 'name',
      results: 'results',
      type: 'type'
    });
  }

  static get Type() {
    return Object.freeze({
      brand: 'BRAND',
      brandlift: 'BRANDLIFT',
      conversions: 'CONVERSIONS',
      ftl: 'FTL',
      mae: 'MAE',
      mai: 'MAI',
      mpc_conversion: 'MPC_CONVERSION',
      nonsales: 'NONSALES',
      partner: 'PARTNER',
      sales: 'SALES',
      telco: 'TELCO'
    });
  }

  getAdsPixels(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AdsPixel, fields, params, fetchFirstPage, '/adspixels');
  }

  getApplications(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(Application, fields, params, fetchFirstPage, '/applications');
  }

  getBrandRequests(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(BrandRequest, fields, params, fetchFirstPage, '/brand_requests');
  }

  getCustomConversions(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(CustomConversion, fields, params, fetchFirstPage, '/customconversions');
  }

  getOfflineConversionDataSets(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(OfflineConversionDataSet, fields, params, fetchFirstPage, '/offline_conversion_data_sets');
  }

  getPartnerPrivateStudies(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(Business, fields, params, fetchFirstPage, '/partner_private_studies');
  }

  getPartnerStudies(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(PartnerStudy, fields, params, fetchFirstPage, '/partnerstudies');
  }

  get(fields: Array<string>, params: Record<string, any> = {}): AdStudyObjective {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

  // $FlowFixMe : Support Generic Types
  update(fields: Array<string>, params: Record<string, any> = {}): AdStudyObjective {
    // $FlowFixMe : Support Generic Types
    return super.update(params);
  }

}
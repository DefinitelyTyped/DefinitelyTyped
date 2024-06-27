import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
import Cursor from "./../cursor";
import AdCreative from "./ad-creative";
import Ad from "./ad";
import AdSet from "./ad-set";
import Campaign from "./campaign";
/**
 * AdLabel
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdLabel extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      account: 'account',
      created_time: 'created_time',
      id: 'id',
      name: 'name',
      updated_time: 'updated_time'
    });
  }

  getAdCreatives(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AdCreative, fields, params, fetchFirstPage, '/adcreatives');
  }

  getAds(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(Ad, fields, params, fetchFirstPage, '/ads');
  }

  getAdSets(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AdSet, fields, params, fetchFirstPage, '/adsets');
  }

  getCampaigns(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(Campaign, fields, params, fetchFirstPage, '/campaigns');
  }

  // $FlowFixMe : Support Generic Types
  delete(fields: Array<string>, params: Record<string, any> = {}): AbstractObject {
    // $FlowFixMe : Support Generic Types
    return super.delete(params);
  }

  get(fields: Array<string>, params: Record<string, any> = {}): AdLabel {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

  // $FlowFixMe : Support Generic Types
  update(fields: Array<string>, params: Record<string, any> = {}): AdLabel {
    // $FlowFixMe : Support Generic Types
    return super.update(params);
  }

}
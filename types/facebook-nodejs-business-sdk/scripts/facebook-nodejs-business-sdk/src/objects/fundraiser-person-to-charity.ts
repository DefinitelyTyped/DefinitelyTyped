import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
import Cursor from "./../cursor";
/**
 * FundraiserPersonToCharity
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class FundraiserPersonToCharity extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      amount_raised: 'amount_raised',
      charity_id: 'charity_id',
      currency: 'currency',
      description: 'description',
      donations_count: 'donations_count',
      donors_count: 'donors_count',
      end_time: 'end_time',
      external_amount_raised: 'external_amount_raised',
      external_donations_count: 'external_donations_count',
      external_donors_count: 'external_donors_count',
      external_event_name: 'external_event_name',
      external_event_start_time: 'external_event_start_time',
      external_event_uri: 'external_event_uri',
      external_fundraiser_uri: 'external_fundraiser_uri',
      external_id: 'external_id',
      goal_amount: 'goal_amount',
      id: 'id',
      internal_amount_raised: 'internal_amount_raised',
      internal_donations_count: 'internal_donations_count',
      internal_donors_count: 'internal_donors_count',
      name: 'name',
      uri: 'uri'
    });
  }

  static get FundraiserType() {
    return Object.freeze({
      person_for_charity: 'person_for_charity'
    });
  }

  getDonations(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AbstractObject, fields, params, fetchFirstPage, '/donations');
  }

  createEndFundraiser(fields: Array<string>, params: Record<string, any> = {}, pathOverride?: string | null | undefined = null): Promise<AbstractObject> {
    return this.createEdge('/end_fundraiser', fields, params, null, pathOverride);
  }

  getExternalDonations(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AbstractObject, fields, params, fetchFirstPage, '/external_donations');
  }

  createExternalDonation(fields: Array<string>, params: Record<string, any> = {}, pathOverride?: string | null | undefined = null): Promise<AbstractObject> {
    return this.createEdge('/external_donations', fields, params, null, pathOverride);
  }

  get(fields: Array<string>, params: Record<string, any> = {}): FundraiserPersonToCharity {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

  // $FlowFixMe : Support Generic Types
  update(fields: Array<string>, params: Record<string, any> = {}): FundraiserPersonToCharity {
    // $FlowFixMe : Support Generic Types
    return super.update(params);
  }

}
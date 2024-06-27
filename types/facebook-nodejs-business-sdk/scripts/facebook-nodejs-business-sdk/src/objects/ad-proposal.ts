import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdProposal
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdProposal extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      ad_proposal_type_name: 'ad_proposal_type_name',
      adaccount: 'adaccount',
      creation_time: 'creation_time',
      creator: 'creator',
      delivery_interface: 'delivery_interface',
      expiration_time: 'expiration_time',
      has_conflict: 'has_conflict',
      id: 'id',
      kpi_metric: 'kpi_metric',
      message: 'message',
      name: 'name',
      proposal_dts_template: 'proposal_dts_template',
      proposal_template_name: 'proposal_template_name',
      recommendation: 'recommendation',
      review_time: 'review_time',
      reviewed_by: 'reviewed_by',
      send_time: 'send_time',
      status: 'status',
      use_testing: 'use_testing'
    });
  }

  get(fields: Array<string>, params: Record<string, any> = {}): AdProposal {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}
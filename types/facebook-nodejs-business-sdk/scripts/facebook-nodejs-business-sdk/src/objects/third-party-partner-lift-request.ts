import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ThirdPartyPartnerLiftRequest
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class ThirdPartyPartnerLiftRequest extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      ad_entities: 'ad_entities',
      country: 'country',
      created_time: 'created_time',
      description: 'description',
      holdout_size: 'holdout_size',
      id: 'id',
      modified_time: 'modified_time',
      owner_instance_id: 'owner_instance_id',
      region: 'region',
      status: 'status',
      study_cells: 'study_cells',
      study_end_time: 'study_end_time',
      study_start_time: 'study_start_time'
    });
  }

  static get Status() {
    return Object.freeze({
      created: 'CREATED',
      failure: 'FAILURE',
      in_progress: 'IN_PROGRESS',
      scheduled: 'SCHEDULED',
      success: 'SUCCESS'
    });
  }

  get(fields: Array<string>, params: Record<string, any> = {}): ThirdPartyPartnerLiftRequest {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}
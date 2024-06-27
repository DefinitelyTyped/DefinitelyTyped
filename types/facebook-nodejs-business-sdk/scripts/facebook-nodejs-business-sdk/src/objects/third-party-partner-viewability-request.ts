import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ThirdPartyPartnerViewabilityRequest
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class ThirdPartyPartnerViewabilityRequest extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      created_time: 'created_time',
      description: 'description',
      hour: 'hour',
      id: 'id',
      metric: 'metric',
      modified_time: 'modified_time',
      owner_instance_id: 'owner_instance_id',
      platform: 'platform',
      status: 'status',
      total_file_count: 'total_file_count'
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

  get(fields: Array<string>, params: Record<string, any> = {}): ThirdPartyPartnerViewabilityRequest {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}
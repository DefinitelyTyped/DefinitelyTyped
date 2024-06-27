import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdDraft
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdDraft extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      account_id: 'account_id',
      api_version: 'api_version',
      async_request_set: 'async_request_set',
      author_id: 'author_id',
      created_by: 'created_by',
      draft_version: 'draft_version',
      id: 'id',
      is_active: 'is_active',
      name: 'name',
      ownership_type: 'ownership_type',
      publish_status: 'publish_status',
      state: 'state',
      summary: 'summary',
      time_created: 'time_created',
      time_updated: 'time_updated'
    });
  }

  get(fields: Array<string>, params: Record<string, any> = {}): AdDraft {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}
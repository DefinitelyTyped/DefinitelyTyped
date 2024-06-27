import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
/**
 * AppRequest
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AppRequest extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      action_type: 'action_type',
      application: 'application',
      created_time: 'created_time',
      data: 'data',
      from: 'from',
      id: 'id',
      message: 'message',
      object: 'object',
      to: 'to'
    });
  }

  // $FlowFixMe : Support Generic Types
  delete(fields: Array<string>, params: Record<string, any> = {}): AbstractObject {
    // $FlowFixMe : Support Generic Types
    return super.delete(params);
  }

  get(fields: Array<string>, params: Record<string, any> = {}): AppRequest {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}
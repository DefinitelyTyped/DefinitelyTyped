import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * WhitehatFBDLRun
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class WhitehatFBDLRun extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      creation_time: 'creation_time',
      id: 'id',
      is_pinned: 'is_pinned',
      note: 'note',
      result: 'result',
      run_code: 'run_code',
      status: 'status',
      user_type: 'user_type'
    });
  }

  get(fields: Array<string>, params: Record<string, any> = {}): WhitehatFBDLRun {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}
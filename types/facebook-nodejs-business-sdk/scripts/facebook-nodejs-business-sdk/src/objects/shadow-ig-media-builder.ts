import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ShadowIGMediaBuilder
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class ShadowIGMediaBuilder extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      copyright_check_status: 'copyright_check_status',
      id: 'id',
      status: 'status',
      status_code: 'status_code',
      video_status: 'video_status'
    });
  }

  get(fields: Array<string>, params: Record<string, any> = {}): ShadowIGMediaBuilder {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}
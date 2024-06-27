import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * VoipInfo
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class VoipInfo extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      has_mobile_app: 'has_mobile_app',
      has_permission: 'has_permission',
      is_callable: 'is_callable',
      is_callable_webrtc: 'is_callable_webrtc',
      is_pushable: 'is_pushable',
      reason_code: 'reason_code',
      reason_description: 'reason_description'
    });
  }

}
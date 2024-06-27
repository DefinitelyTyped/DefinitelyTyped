import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * WhatsAppBusinessHealthStatus
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class WhatsAppBusinessHealthStatus extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      additional_info: 'additional_info',
      can_send_message: 'can_send_message',
      entity_type: 'entity_type',
      errors: 'errors',
      id: 'id'
    });
  }

}
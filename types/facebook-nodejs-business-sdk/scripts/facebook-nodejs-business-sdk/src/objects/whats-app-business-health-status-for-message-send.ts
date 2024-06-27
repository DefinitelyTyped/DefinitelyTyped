import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * WhatsAppBusinessHealthStatusForMessageSend
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class WhatsAppBusinessHealthStatusForMessageSend extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      can_send_message: 'can_send_message',
      entities: 'entities'
    });
  }

}
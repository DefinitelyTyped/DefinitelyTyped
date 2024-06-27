import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * EventTicketSetting
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class EventTicketSetting extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      id: 'id',
      ticket_delivery_type: 'ticket_delivery_type'
    });
  }

  get(fields: Array<string>, params: Record<string, any> = {}): EventTicketSetting {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}
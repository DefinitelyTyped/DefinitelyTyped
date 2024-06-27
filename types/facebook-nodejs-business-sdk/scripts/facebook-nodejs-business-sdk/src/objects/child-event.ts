import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ChildEvent
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class ChildEvent extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      end_time: 'end_time',
      id: 'id',
      start_time: 'start_time',
      ticket_uri: 'ticket_uri'
    });
  }

}
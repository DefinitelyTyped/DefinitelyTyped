import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * LeadGenAppointmentTimeSlot
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class LeadGenAppointmentTimeSlot extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      end_time: 'end_time',
      start_time: 'start_time'
    });
  }

}
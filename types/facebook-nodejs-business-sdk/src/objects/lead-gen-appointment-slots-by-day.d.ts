import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * LeadGenAppointmentSlotsByDay
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class LeadGenAppointmentSlotsByDay extends AbstractCrudObject {
    static get Fields(): Readonly<{
        appointment_slots: "appointment_slots";
        day: "day";
    }>;
}

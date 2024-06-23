import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * LeadGenAppointmentTimeSlot
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class LeadGenAppointmentTimeSlot extends AbstractCrudObject {
    static get Fields(): Readonly<{
        end_time: "end_time";
        start_time: "start_time";
    }>;
}

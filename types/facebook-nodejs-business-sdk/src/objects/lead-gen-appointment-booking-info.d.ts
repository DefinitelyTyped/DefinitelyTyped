import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * LeadGenAppointmentBookingInfo
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class LeadGenAppointmentBookingInfo extends AbstractCrudObject {
    static get Fields(): Readonly<{
        advertiser_timezone_offset: "advertiser_timezone_offset";
        appointment_durations: "appointment_durations";
        appointment_slots_by_day: "appointment_slots_by_day";
    }>;
}

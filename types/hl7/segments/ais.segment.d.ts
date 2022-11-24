/**
 * Appointment Information - Location Resource
 * @description The AIS segment contains information about various kinds of services that can be scheduled.
 * Services included in a transaction using this segment are assumed to be controlled by a schedule on a schedule filler application.
 * Services not controlled by a schedule are not identified on a schedule request using this segment.
 * [documentation](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Segments/AIS)
 */
export interface AIS {
    'AIS.1': string;
    'AIS.2': string;
    'AIS.3': string;
    'AIS.4': string;
    'AIS.5': string;
    'AIS.6': string;
    'AIS.7': string;
    'AIS.8': string;
    'AIS.9': string;
    'AIS.10': string;
    'AIS.11': string;
    'AIS.12': string;
}

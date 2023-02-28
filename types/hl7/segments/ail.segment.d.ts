/**
 * Appointment Information - Location Resource
 * @description The AIL segment contains information about location resources (meeting rooms, operating rooms, examination rooms, or other locations) that can be scheduled.
 * Resources included in a transaction using this segment are assumed to be controlled by a schedule on a schedule filler application.
 * Resources not controlled by a schedule are not identified on a schedule request using this segment.
 * Location resources are identified with this specific segment because of the specific encoding of locations used by the HL7 specification.
 *
 * [documentation](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Segments/AIL)
 */
export interface AIL {
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

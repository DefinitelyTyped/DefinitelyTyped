/**
 * Patient Visit
 * @description The PV1 segment is used by Registration/Patient Administration applications to communicate information on an account or visit-specific basis.
 * The default is to send account level data. To use this segment for visit level data PV1-51 - Visit Indicator must be valued to V.
 * The value of PV-51 affects the level of data being sent on the PV1, PV2, and any other segments that are part of the associated PV1 hierarchy (e.g. ROL, DG1, or OBX).
 *
 * [documentation](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Segments/PV1)
 */

export interface PV1 {
    'PV1.1': string;
    'PV1.2': string;
    'PV1.3': string;
    'PV1.4': string;
    'PV1.5': string;
    'PV1.6': string;
    'PV1.7': string;
    'PV1.8': string;
    'PV1.9': string;
    'PV1.10': string;
    'PV1.11': string;
    'PV1.12': string;
    'PV1.13': string;
    'PV1.14': string;
    'PV1.15': string;
    'PV1.16': string;
    'PV1.17': string;
    'PV1.18': string;
    'PV1.19': string;
    'PV1.20': string;
    'PV1.22': string;
    'PV1.23': string;
    'PV1.24': string;
    'PV1.25': string;
    'PV1.26': string;
    'PV1.27': string;
    'PV1.28': string;
    'PV1.29': string;
    'PV1.30': string;
    'PV1.31': string;
    'PV1.32': string;
    'PV1.33': string;
    'PV1.34': string;
    'PV1.35': string;
    'PV1.36': string;
    'PV1.37': string;
    'PV1.38': string;
    'PV1.40': string;
    'PV1.41': string;
    'PV1.42': string;
    'PV1.43': string;
    'PV1.44': string;
    'PV1.45': string;
    'PV1.46': string;
    'PV1.47': string;
    'PV1.48': string;
    'PV1.49': string;
    'PV1.50': string;
    'PV1.51': string;
    'PV1.52': string;
}

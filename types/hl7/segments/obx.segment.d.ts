/**
 * Observation/Result
 * @description The OBX segment is used to transmit a single observation or observation fragment.
 * It represents the smallest indivisible unit of a report.
 * The OBX segment can also contain encapsulated data, e.g., a CDA document or a DICOM image.
 *
 * [documentation](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Segments/OBX)
 */
 export interface OBX {
    'OBX.1'?: string;
    'OBX.2'?: string;
    'OBX.3'?: string;
    'OBX.4'?: string;
    'OBX.5'?: string;
    'OBX.6'?: string;
    'OBX.7'?: string;
    'OBX.8'?: string;
    'OBX.9'?: string;
    'OBX.10'?: string;
    'OBX.11'?: string;
    'OBX.12'?: string;
    'OBX.13'?: string;
    'OBX.14'?: string;
    'OBX.15'?: string;
    'OBX.16'?: string;
    'OBX.17'?: string;
    'OBX.18'?: string;
    'OBX.19'?: string;
}

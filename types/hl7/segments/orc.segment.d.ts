/**
 * Common Order
 * @description The Common Order segment (ORC) is used to transmit fields that are common to all orders (all types of services that are requested).
 * The ORC segment is required in the Order (ORM) message.
 * ORC is mandatory in Order Acknowledgment (ORR) messages if an order detail segment is present, but is not required otherwise.
 *
 * [documentation](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Segments/ORC)
 */
 export interface ORC {
    'ORC.1'?: string;
    'ORC.2'?: string;
    'ORC.3'?: string;
    'ORC.4'?: string;
    'ORC.5'?: string;
    'ORC.6'?: string;
    'ORC.7'?: string;
    'ORC.8'?: string;
    'ORC.9'?: string;
    'ORC.10'?: string;
    'ORC.11'?: string;
    'ORC.12'?: string;
    'ORC.13'?: string;
    'ORC.14'?: string;
    'ORC.15'?: string;
    'ORC.16'?: string;
    'ORC.17'?: string;
    'ORC.18'?: string;
    'ORC.19'?: string;
    'ORC.20'?: string;
    'ORC.22'?: string;
    'ORC.23'?: string;
    'ORC.24'?: string;
    'ORC.25'?: string;
    'ORC.26'?: string;
    'ORC.27'?: string;
    'ORC.28'?: string;
    'ORC.29'?: string;
    'ORC.30'?: string;
    'ORC.31'?: string;
}

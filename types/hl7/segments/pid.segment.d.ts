/**
 * Patient Identification
 * @description The PID segment is used by all applications as the primary means of communicating patient identification information.
 * This segment contains permanent patient identifying and demographic information that, for the most part, is not likely to change frequently.
 *
 * [documentation](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Segments/PID)
 */
 export interface PID {
    'PID.1'?: string;
    'PID.2'?: string;
    'PID.3'?: string[];
    'PID.4'?: string;
    'PID.5': {
        /**
         * Family Name
         */
        'PID.5.1'?: string;
        /**
         * Given Name
         */
        'PID.5.2'?: string;
        /**
         * Second And Further Given Names Or Initials Thereof
         */
        'PID.5.3'?: string;
        /**
         * Suffix
         */
        'PID.5.4'?: string;
        /**
         * Prefix
         */
        'PID.5.5'?: string;
        /**
         * Degree
         */
        'PID.5.6'?: string;
        /**
         * Name Type Code
         */
        'PID.5.7'?: string;
        /**
         * Name Representation Code
         */
        'PID.5.8'?: string;
        /**
         * Name Context
         */
        'PID.5.9'?: string;
        /**
         * Name Validity Range
         */
        'PID.5.10'?: string;
        /**
         * Name Assembly Order
         */
        'PID.5.11'?: string;
        /**
         * Effective Date
         */
        'PID.5.12'?: string;
        /**
         * Expiration Date
         */
        'PID.5.13'?: string;
        /**
         * Professional Suffix
         */
        'PID.5.14'?: string;
    };
    'PID.6'?: string;
    'PID.7'?: string;
    'PID.8'?: string;
    'PID.9'?: string;
    'PID.10'?: string;
    'PID.11'?: string;
    'PID.12'?: string;
    'PID.13'?: string;
    'PID.14'?: string;
    'PID.15'?: string;
    'PID.16'?: string;
    'PID.17'?: string;
    'PID.18'?: string;
    'PID.19'?: string;
    'PID.20'?: string;
    'PID.22'?: string;
    'PID.23'?: string;
    'PID.24'?: string;
    'PID.25'?: string;
    'PID.26'?: string;
    'PID.27'?: string;
    'PID.28'?: string;
    'PID.29'?: string;
    'PID.30'?: string;
    'PID.31'?: string;
    'PID.32'?: string;
    'PID.33'?: string;
    'PID.34'?: string;
    'PID.35'?: string;
    'PID.36'?: string;
    'PID.37'?: string;
    'PID.38'?: string;
    'PID.39'?: string;
}

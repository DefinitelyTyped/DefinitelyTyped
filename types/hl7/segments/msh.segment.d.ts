/**
 * Message Header
 * @description The MSH segment defines the intent, source, destination, and some specifics of the syntax of a message.
 * [documentation](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Segments/MSH)
 */
export interface MSH {
    /**
     * Field Separator
     * @description This field contains the separator between the segment ID and the first real field, MSH-2 Encoding Characters.
     * As such it serves as the separator and defines the character to be used as a separator for the rest of the message. Recommended value is | (ASCII 124).
     *
     * [documentation](https://hl7-definition.caristix.com/v2/HL7v2.8/Fields/MSH.1)
     */
    'MSH.1': string;
    /**
     * Encoding Characters
     * @description This field contains the separator between the segment ID and the first real field, MSH-2 Encoding Characters.
     * As such it serves as the separator and defines the character to be used as a separator for the rest of the message. Recommended value is | (ASCII 124).
     *
     * [documentation](https://hl7-definition.caristix.com/v2/HL7v2.8/Fields/MSH.2)
     */
    'MSH.2': string;
    /**
     * Sending Application
     * @description This field contains the separator between the segment ID and the first real field, MSH-2 Encoding Characters.
     * As such it serves as the separator and defines the character to be used as a separator for the rest of the message. Recommended value is | (ASCII 124).
     *
     * [documentation](https://hl7-definition.caristix.com/v2/HL7v2.8/Fields/MSH.3)
     */
    'MSH.3': string;
    /**
     * Sending Facility
     * @description This field contains the separator between the segment ID and the first real field, MSH-2 Encoding Characters.
     * As such it serves as the separator and defines the character to be used as a separator for the rest of the message. Recommended value is | (ASCII 124).
     *
     * [documentation](https://hl7-definition.caristix.com/v2/HL7v2.8/Fields/MSH.4)
     */
    'MSH.4': string;
    /**
     * Receiving Application
     * @description This field contains the separator between the segment ID and the first real field, MSH-2 Encoding Characters.
     * As such it serves as the separator and defines the character to be used as a separator for the rest of the message. Recommended value is | (ASCII 124).
     *
     * [documentation](https://hl7-definition.caristix.com/v2/HL7v2.8/Fields/MSH.5)
     */
    'MSH.5': string;
    /**
     * Receiving Facility
     * @description This field contains the separator between the segment ID and the first real field, MSH-2 Encoding Characters.
     * As such it serves as the separator and defines the character to be used as a separator for the rest of the message. Recommended value is | (ASCII 124).
     *
     * [documentation](https://hl7-definition.caristix.com/v2/HL7v2.8/Fields/MSH.6)
     */
    'MSH.6': string;
    /**
     * Date/Time Of Message
     * @description This field contains the separator between the segment ID and the first real field, MSH-2 Encoding Characters.
     * As such it serves as the separator and defines the character to be used as a separator for the rest of the message. Recommended value is | (ASCII 124).
     *
     * [documentation](https://hl7-definition.caristix.com/v2/HL7v2.8/Fields/MSH.7)
     */
    'MSH.7': string;
    /**
     * Security
     * @description This field contains the separator between the segment ID and the first real field, MSH-2 Encoding Characters.
     * As such it serves as the separator and defines the character to be used as a separator for the rest of the message. Recommended value is | (ASCII 124).
     *
     * [documentation](https://hl7-definition.caristix.com/v2/HL7v2.8/Fields/MSH.8)
     */
    'MSH.8': string;
    /**
     * Message Type
     * @description This field contains the separator between the segment ID and the first real field, MSH-2 Encoding Characters.
     * As such it serves as the separator and defines the character to be used as a separator for the rest of the message. Recommended value is | (ASCII 124).
     *
     * [documentation](https://hl7-definition.caristix.com/v2/HL7v2.8/Fields/MSH.9)
     */
    'MSH.9': string;
    /**
     * Message Control ID
     * @description This field contains the separator between the segment ID and the first real field, MSH-2 Encoding Characters.
     * As such it serves as the separator and defines the character to be used as a separator for the rest of the message. Recommended value is | (ASCII 124).
     *
     * [documentation](https://hl7-definition.caristix.com/v2/HL7v2.8/Fields/MSH.10)
     */
    'MSH.10': string;
    /**
     * Processing ID
     * @description This field contains the separator between the segment ID and the first real field, MSH-2 Encoding Characters.
     * As such it serves as the separator and defines the character to be used as a separator for the rest of the message. Recommended value is | (ASCII 124).
     *
     * [documentation](https://hl7-definition.caristix.com/v2/HL7v2.8/Fields/MSH.11)
     */
    'MSH.11': string;
    /**
     * Version ID
     * @description This field contains the separator between the segment ID and the first real field, MSH-2 Encoding Characters.
     * As such it serves as the separator and defines the character to be used as a separator for the rest of the message. Recommended value is | (ASCII 124).
     *
     * [documentation](https://hl7-definition.caristix.com/v2/HL7v2.8/Fields/MSH.12)
     */
    'MSH.12': string;
    /**
     * Sequence Number
     * @description This field contains the separator between the segment ID and the first real field, MSH-2 Encoding Characters.
     * As such it serves as the separator and defines the character to be used as a separator for the rest of the message. Recommended value is | (ASCII 124).
     *
     * [documentation](https://hl7-definition.caristix.com/v2/HL7v2.8/Fields/MSH.13)
     */
    'MSH.13': string;
    /**
     * Continuation Pointer
     * @description This field contains the separator between the segment ID and the first real field, MSH-2 Encoding Characters.
     * As such it serves as the separator and defines the character to be used as a separator for the rest of the message. Recommended value is | (ASCII 124).
     *
     * [documentation](https://hl7-definition.caristix.com/v2/HL7v2.8/Fields/MSH.14)
     */
    'MSH.14': string;
    /**
     * Accept Acknowledgment Type
     * @description This field contains the separator between the segment ID and the first real field, MSH-2 Encoding Characters.
     * As such it serves as the separator and defines the character to be used as a separator for the rest of the message. Recommended value is | (ASCII 124).
     *
     * [documentation](https://hl7-definition.caristix.com/v2/HL7v2.8/Fields/MSH.15)
     */
    'MSH.15': string;
    /**
     * Application Acknowledgment Type
     * @description This field contains the separator between the segment ID and the first real field, MSH-2 Encoding Characters.
     * As such it serves as the separator and defines the character to be used as a separator for the rest of the message. Recommended value is | (ASCII 124).
     *
     * [documentation](https://hl7-definition.caristix.com/v2/HL7v2.8/Fields/MSH.16)
     */
    'MSH.16': string;
    /**
     * Country Code
     * @description This field contains the separator between the segment ID and the first real field, MSH-2 Encoding Characters.
     * As such it serves as the separator and defines the character to be used as a separator for the rest of the message. Recommended value is | (ASCII 124).
     *
     * [documentation](https://hl7-definition.caristix.com/v2/HL7v2.8/Fields/MSH.17)
     */
    'MSH.17': string;
    /**
     * Character Set
     * @description This field contains the separator between the segment ID and the first real field, MSH-2 Encoding Characters.
     * As such it serves as the separator and defines the character to be used as a separator for the rest of the message. Recommended value is | (ASCII 124).
     *
     * [documentation](https://hl7-definition.caristix.com/v2/HL7v2.8/Fields/MSH.18)
     */
    'MSH.18': string;
    /**
     * Principal Language Of Message
     * @description This field contains the separator between the segment ID and the first real field, MSH-2 Encoding Characters.
     * As such it serves as the separator and defines the character to be used as a separator for the rest of the message. Recommended value is | (ASCII 124).
     *
     * [documentation](https://hl7-definition.caristix.com/v2/HL7v2.8/Fields/MSH.19)
     */
    'MSH.19': string;
    /**
     * Alternate Character Set Handling Scheme
     * @description This field contains the separator between the segment ID and the first real field, MSH-2 Encoding Characters.
     * As such it serves as the separator and defines the character to be used as a separator for the rest of the message. Recommended value is | (ASCII 124).
     *
     * [documentation](https://hl7-definition.caristix.com/v2/HL7v2.8/Fields/MSH.20)
     */
    'MSH.20': string;
    /**
     * Message Profile Identifier
     * @description This field contains the separator between the segment ID and the first real field, MSH-2 Encoding Characters.
     * As such it serves as the separator and defines the character to be used as a separator for the rest of the message. Recommended value is | (ASCII 124).
     *
     * [documentation](https://hl7-definition.caristix.com/v2/HL7v2.8/Fields/MSH.21)
     */
    'MSH.21': string;
}

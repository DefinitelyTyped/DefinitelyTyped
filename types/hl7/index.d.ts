// Type definitions for non-npm package hl7 2.5
// Project: https://github.com/MinaroShikuchi/hl7
// Definitions by: Minaro <https://github.com/MinaroShikuchi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// import './segments';
// import './events';
import { ADT, OMG, ORM, ORU, SIU } from './events';
import { AIL, AIS, MSH, OBR, OBX, ORC, PID, PV1 } from './segments';
// import TriggerEvent = require('./events');
// import Segment = require('./segments');

/**
 *  Health Level Seven International (HL7) is a not-for-profit,
 * ANSI-accredited standards developing organization dedicated to providing a comprehensive framework and related standards for the exchange, integration, sharing,
 * and retrieval of electronic health information that supports clinical practice and the management, delivery and evaluation of health services.
 * @see [source](https://www.hl7.org/)
 */
export namespace hl7 {
    /**
     * The standard is written from the assumption that an event in the real world of healthcare creates the need for data to flow among systems.
     * The real-world event is called the trigger event.
     * For example, the trigger event a patient is admitted may cause the need for data about that patient to be sent to some other systems.
     * The trigger event, an observation (e.g., a CBC result) for a patient is available, may cause the need for that observation to be sent to some other systems too.
     * When the transfer of information is initiated by the application system that deals with the triggering event, the exchange is termed an unsolicited update.
     */
    interface TriggerEvent {
        ADT: ADT;
        ORM: ORM;
        SIU: SIU;
        ORU: ORU;
        OMG: OMG;
    }
    /**
     * A segment is a logical grouping of data fields. Segments of a message may be required or optional.
     * They may occur only once in a message or they may be allowed to repeat. Each segment is given a name.
     * For example, the ADT message may contain the following segments: Message Header (MSH), Event Type (EVN), Patient ID (PID), and Patient Visit (PV1).
     * Each segment is identified by a unique three-character code known as the Segment ID.
     * Although the actual segments are defined in various chapters, the ID codes assigned to the various segments are listed in Appendix A.
     * All Segment ID codes beginning with the letter Z are reserved for locally defined segments. Z Codes SHALL NOT be defined within the HL7 Standard.
     */
    interface Segment {
        MSH: MSH;
        PID: PID;
        OBR: OBR;
        OBX: OBX;
        ORC: ORC;
        PV1: PV1;
        AIL: AIL;
        AIS: AIS;
    }
}

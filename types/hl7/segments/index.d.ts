export * from './ail.segment';
export * from './pid.segment';
export * from './msh.segment';
export * from './pv1.segment';
export * from './orc.segment';
export * from './obr.segment';
export * from './obx.segment';
export * from './ais.segment';

/**
 * A segment is a logical grouping of data fields. Segments of a message may be required or optional.
 * They may occur only once in a message or they may be allowed to repeat. Each segment is given a name.
 * For example, the ADT message may contain the following segments: Message Header (MSH), Event Type (EVN), Patient ID (PID), and Patient Visit (PV1).
 * Each segment is identified by a unique three-character code known as the Segment ID.
 * Although the actual segments are defined in various chapters, the ID codes assigned to the various segments are listed in Appendix A.
 * All Segment ID codes beginning with the letter Z are reserved for locally defined segments. Z Codes SHALL NOT be defined within the HL7 Standard.
 */
// export as namespace Segment;

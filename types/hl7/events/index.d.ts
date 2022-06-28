// import { ADT } from './adt.event';

export * from './base.event';
export * from './adt.event';
export * from './orm.event';
export * from './siu.event';
export * from './oru.event';
export * from './omg.event';

/**
 * The standard is written from the assumption that an event in the real world of healthcare creates the need for data to flow among systems.
 * The real-world event is called the trigger event.
 * For example, the trigger event a patient is admitted may cause the need for data about that patient to be sent to some other systems.
 * The trigger event, an observation (e.g., a CBC result) for a patient is available, may cause the need for that observation to be sent to some other systems too.
 * When the transfer of information is initiated by the application system that deals with the triggering event, the exchange is termed an unsolicited update.
 */
// export as namespace TriggerEvent;

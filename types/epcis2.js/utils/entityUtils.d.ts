export default objectToEvent;
/**
 * Returns an instance of an Event object corresponding to the object passed in param
 * e.g if you provide {isA: 'ObjectEvent', ...}, it will return an ObjectEvent instance created
 * from the parameter
 *
 * @return an event corresponding to the parameter
 */
declare function objectToEvent(obj: any): Event;
import Event from "../entity/events/Event";

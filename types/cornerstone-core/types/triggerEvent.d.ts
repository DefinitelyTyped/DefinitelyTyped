/**
 * Trigger a CustomEvent
 *
 * @param el The element or EventTarget to trigger the event upon
 * @param type The event type name
 * @param detail=null The event data to be sent
 * @returns The return value is false if at least one event listener called preventDefault(). Otherwise it returns true.
 */
export default function triggerEvent(el: EventTarget, type: string, detail?: any): boolean;

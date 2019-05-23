import { EventType } from "./cast.framework.events";

export as namespace category;

/**
 * Includes high-level events. These events fire less frequently and are the most likely to be useful for debugging.
 */
declare const CORE: EventType[];
/**
 * Includes low-level events. These events fire somewhat frequently, and usually indicate clip-level loading / ready statuses.
 */
declare const DEBUG: EventType[];
/**
 * Includes low-level events that trigger frequently.
 */
declare const FINE: EventType[];
/**
 * Includes all events that represent a request made to the receiver.
 */
declare const REQUEST: EventType[];

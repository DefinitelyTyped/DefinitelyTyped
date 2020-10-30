/**
 * OpenLayers version.
 */
export const VERSION: string;
export function abstract(): any;
/**
 * Gets a unique ID for an object. This mutates the object so that further calls
 * with the same object as a parameter returns the same value. Unique IDs are generated
 * as a strictly increasing sequence. Adapted from goog.getUid.
 */
export function getUid(obj: any): string;

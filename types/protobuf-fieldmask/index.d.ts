export type WithFieldMask<T> = { [K in keyof T]?: WithFieldMask<T[K]> | undefined };
/**
 * Creates a new object that copies fields present in field mask from specified source object
 * @param sourceObject - object to apply field mask to
 * @param fieldMask
 * @returns new object created by applying field mask on source object or original entity if source is not an object
 */
export function applyFieldMask<T>(sourceObject: T, fieldMask: readonly string[]): WithFieldMask<T>;
/**
 * Generates field mask that includes all non-function own properties on specified object
 * @param object - object to generate field mask from
 * @returns - generated field mask
 */
export function generateFieldMask(object: unknown): string[];

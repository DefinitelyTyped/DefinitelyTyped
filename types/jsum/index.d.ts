// Type definitions for jsum 0.1
// Project: https://github.com/fraunhoferfokus/JSum#readme
// Definitions by: David Uzumeri <https://github.com/daviduzumeri>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Creates hash of given JSON object.
 *
 * @param obj JSON object
 * @param hashAlgorithm hash algorithm (e.g. SHA256)
 * @param encoding hash encoding (e.g. base64) or none for buffer
 */
export function digest(obj: any, hashAlgorithm: string, encoding: string): string;

/**
 * Stringifies a JSON object (not any random JS object).
 *
 * It should be noted that JS objects can have members of
 * specific type (e.g. function), that are not supported
 * by JSON.
 *
 * @param obj JSON object
 * @returns stringified JSON object.
 */
export function stringify(obj: any): string;

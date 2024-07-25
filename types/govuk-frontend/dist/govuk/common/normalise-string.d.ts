import { type SchemaProperty } from "./index.js";

/**
 * Normalise string
 *
 * 'If it looks like a duck, and it quacks like a duck…' 🦆
 *
 * If the passed value looks like a boolean or a number, convert it to a boolean
 * or number.
 *
 * Designed to be used to convert config passed via data attributes (which are
 * always strings) into something sensible.
 *
 * @internal
 * @param {DOMStringMap[string]} value - The value to normalise
 * @param {SchemaProperty} [property] - Component schema property
 * @returns {string | boolean | number | undefined} Normalised data
 */
export function normaliseString(
    value: DOMStringMap[string],
    property?: SchemaProperty,
): string | boolean | number | undefined;

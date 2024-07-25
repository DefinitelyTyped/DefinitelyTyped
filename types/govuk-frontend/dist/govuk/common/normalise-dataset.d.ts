import { type ObjectNested, type Schema } from "./index.js";

/**
 * Normalise dataset
 *
 * Loop over an object and normalise each value using {@link normaliseString},
 * optionally expanding nested `i18n.field`
 *
 * @internal
 * @param {{ schema: Schema }} Component - Component class
 * @param {DOMStringMap} dataset - HTML element dataset
 * @returns {ObjectNested} Normalised dataset
 */
export function normaliseDataset(Component: {
    schema: Schema;
}, dataset: DOMStringMap): ObjectNested;

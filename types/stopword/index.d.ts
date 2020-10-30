// Type definitions for stopword 0.3
// Project: https://github.com/fergiemcdowall/stopword
// Definitions by: Rico Sandyca Novenza <https://github.com/ricosandyca>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Stopword removal
 *
 * @param text Array string of words
 * @param stopwords Array string of your custom stopwords (default: English stopwords | .en)
 */
export function removeStopwords(text: string[], stopwords?: string[]): string[];

/**
 * Get array of stopwords according by language code
 */
export const af: string[];
export const ar: string[];
export const bn: string[];
export const br: string[];
export const da: string[];
export const de: string[];
export const en: string[];
export const es: string[];
export const fa: string[];
export const fr: string[];
export const fi: string[];
export const ha: string[];
export const he: string[];
export const hi: string[];
export const id: string[];
export const it: string[];
export const ja: string[];
export const lgg: string[];
export const lggo: string[];
export const my: string[];
export const nl: string[];
export const no: string[];
export const pa: string[];
export const pl: string[];
export const pt: string[];
export const ru: string[];
export const so: string[];
export const st: string[];
export const sv: string[];
export const sw: string[];
export const vi: string[];
export const yo: string[];
export const zh: string[];
export const zu: string[];

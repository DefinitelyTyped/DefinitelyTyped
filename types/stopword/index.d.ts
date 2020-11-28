// Type definitions for stopword 1.0
// Project: https://github.com/fergiemcdowall/stopword
// Definitions by: Rico Sandyca Novenza <https://github.com/ricosandyca>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace sw;

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
export const bg: string[];
export const bn: string[];
export const br: string[];
export const ca: string[];
export const cs: string[];
export const da: string[];
export const de: string[];
export const el: string[];
export const en: string[];
export const eo: string[];
export const es: string[];
export const et: string[];
export const eu: string[];
export const fa: string[];
export const fr: string[];
export const fi: string[];
export const ga: string[];
export const gl: string[];
export const ha: string[];
export const he: string[];
export const hi: string[];
export const hr: string[];
export const hu: string[];
export const hy: string[];
export const id: string[];
export const it: string[];
export const ja: string[];
export const ko: string[];
export const la: string;
export const lgg: string[];
export const lggo: string[];
export const lv: string[];
export const mr: string[];
export const my: string[];
export const nl: string[];
export const no: string[];
export const pa: string[];
export const pl: string[];
export const pt: string[];
export const ptbr: string[];
export const ro: string[];
export const ru: string[];
export const sk: string[];
export const sl: string[];
export const so: string[];
export const st: string[];
export const sv: string[];
export const sw: string[];
export const th: string[];
export const tr: string[];
export const vi: string[];
export const yo: string[];
export const zh: string[];
export const zu: string[];

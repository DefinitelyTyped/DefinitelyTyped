// Type definitions for emojione 2.2
// Project: https://github.com/Ranks/emojione
// Definitions by: Danilo Bargen <https://github.com/dbrgn>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace emojione;

export let sprites: boolean;
export let imagePathPNG: string;
export let imagePathSVG: string;
export let imagePathSVGSprites: string;
export let imageType: 'png' | 'svg';
export let unicodeAlt: boolean;
export let ascii: boolean;
export let unicodeRegexp: string;
export let cacheBustParam: string;
export function toShort(str: string): string;
export function toImage(str: string): string;
export function shortnameToImage(str: string): string;
export function unicodeToImage(str: string): string;
export function shortnameToUnicode(str: string): string;

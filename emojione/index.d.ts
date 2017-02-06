// Type definitions for emojione 2.2
// Project: https://github.com/Ranks/emojione
// Definitions by: Danilo Bargen <https://github.com/dbrgn/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace emojione;

export var sprites: boolean;
export var imagePathPNG: string;
export var imagePathSVG: string;
export var imagePathSVGSprites: string;
export var imageType: 'png' | 'svg';
export var unicodeAlt: boolean;
export var ascii: boolean;
export var unicodeRegexp: string;
export var cacheBustParam: string;
export function toShort(str: string): string;
export function toImage(str: string): string;
export function shortnameToImage(str: string): string;
export function unicodeToImage(str: string): string;

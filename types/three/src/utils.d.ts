import { Color, ColorKeyword } from './math/Color';

export type ColorModelString = `${'rgb' | 'hsl'}(${string})`;
export type HexColorString = `#${string}`;

export type ColorRepresentation = Color | ColorKeyword | ColorModelString | HexColorString | number;

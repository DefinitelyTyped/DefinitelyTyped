import Color, { ColorTypes } from './color';

/** @todo fix type for prop */
export default function set(color: ColorTypes, prop: any, value: number | ((coord: number) => number)): Color;

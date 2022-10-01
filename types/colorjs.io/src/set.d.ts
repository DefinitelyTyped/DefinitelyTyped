import Color, { ColorTypes } from './color';
import { Ref } from './space';

export default function set(color: ColorTypes, prop: Ref, value: number | ((coord: number) => number)): Color;

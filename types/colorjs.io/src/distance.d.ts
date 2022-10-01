import Color, { ColorObject } from './color';
import ColorSpace from './space';

export default function distance(
    color1: Color | ColorObject,
    color2: Color | ColorObject,
    space: string | ColorSpace,
): number;

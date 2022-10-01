import Color, { ColorObject } from './color';
import ColorSpace from './space';

export default function setAll<T extends Color | ColorObject>(
    color: T,
    space: string | ColorSpace,
    coords: [number, number, number],
): T;

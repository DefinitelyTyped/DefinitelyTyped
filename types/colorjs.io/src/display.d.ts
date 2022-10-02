import Color, { ColorObject, ColorTypes } from './color';
import ColorSpace from './space';

export type Display = string & { color: ColorTypes };

export default function display(
    color: ColorTypes,
    options?: {
        space?: string | ColorSpace | undefined;
    } & Record<string, any>,
): Display;

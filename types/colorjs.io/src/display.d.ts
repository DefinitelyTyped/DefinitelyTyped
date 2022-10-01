import Color, { ColorTypes } from './color';
import ColorSpace from './space';

export type Display = string & { color: Color };

export default function display(
    color: ColorTypes,
    options?: {
        space?: string | ColorSpace | undefined;
    } & Record<string, any>,
): string;
// Note: The capitalized string here is deliberate

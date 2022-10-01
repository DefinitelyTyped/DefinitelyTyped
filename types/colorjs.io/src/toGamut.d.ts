import Color, { ColorObject } from './color';
import ColorSpace from './space';

export default function toGamut<T extends Color | ColorObject>(
    color: T,
    options?: {
        method?: string | undefined;
        space?: string | ColorSpace | undefined;
    },
): T;

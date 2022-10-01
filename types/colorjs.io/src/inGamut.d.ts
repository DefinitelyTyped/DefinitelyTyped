import { ColorTypes } from './color';
import ColorSpace from './space';

export default function inGamut(
    color: ColorTypes,
    space?: ColorSpace,
    options?: { epsilon?: number | undefined },
): boolean;

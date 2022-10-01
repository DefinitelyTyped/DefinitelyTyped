import { ColorObject, ColorTypes } from './color';
import ColorSpace from './space';

declare namespace to {
    let returns: 'color';
}

declare function to(
    color: ColorTypes,
    space: string | ColorSpace,
    options?: { inGamut?: boolean | undefined },
): ColorObject;

export default to;

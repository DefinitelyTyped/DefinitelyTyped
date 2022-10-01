import Color, { ColorObject } from '../color';
export default function (
    color: Color | ColorObject,
    sample: Color | ColorObject,
    options?: {
        l?: number | undefined;
        c?: number | undefined;
    },
): number;

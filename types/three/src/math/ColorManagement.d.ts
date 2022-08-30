import { LinearSRGBColorSpace, SRGBColorSpace } from '../constants';
import { Color } from './Color';

export function SRGBToLinear(c: number): number;

export function LinearToSRGB(c: number): number;

export namespace ColorManagement {
    function convert(
        color: Color,
        sourceColorSpace: SRGBColorSpace | LinearSRGBColorSpace,
        targetColorSpace: SRGBColorSpace | LinearSRGBColorSpace,
    ): Color;

    function fromWorkingColorSpace(color: Color, targetColorSpace: SRGBColorSpace | LinearSRGBColorSpace): Color;

    function toWorkingColorSpace(color: Color, sourceColorSpace: SRGBColorSpace | LinearSRGBColorSpace): Color;
}

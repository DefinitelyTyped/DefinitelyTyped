import { ColorSpace, DisplayP3ColorSpace, LinearSRGBColorSpace, SRGBColorSpace } from '../constants.js';
import { Color } from './Color.js';

export function SRGBToLinear(c: number): number;

export function LinearToSRGB(c: number): number;

export namespace ColorManagement {
    /**
     * @default false
     */
    let enabled: boolean;

    /**
     * @default LinearSRGBColorSpace
     */
    let workingColorSpace: ColorSpace;

    function convert(
        color: Color,
        sourceColorSpace: typeof SRGBColorSpace | typeof LinearSRGBColorSpace | typeof DisplayP3ColorSpace,
        targetColorSpace: typeof SRGBColorSpace | typeof LinearSRGBColorSpace | typeof DisplayP3ColorSpace,
    ): Color;

    function fromWorkingColorSpace(
        color: Color,
        targetColorSpace: typeof SRGBColorSpace | typeof LinearSRGBColorSpace | typeof DisplayP3ColorSpace,
    ): Color;

    function toWorkingColorSpace(
        color: Color,
        sourceColorSpace: typeof SRGBColorSpace | typeof LinearSRGBColorSpace | typeof DisplayP3ColorSpace,
    ): Color;
}

import {
    ColorSpace,
    ColorSpacePrimaries,
    ColorSpaceTransfer,
    DisplayP3ColorSpace,
    LinearDisplayP3ColorSpace,
    LinearSRGBColorSpace,
    SRGBColorSpace,
} from "../constants.js";
import { Color } from "./Color.js";
import { Vector3 } from "./Vector3.js";

export type WorkingColorSpace = typeof LinearSRGBColorSpace | typeof LinearDisplayP3ColorSpace;
export type DefinedColorSpace =
    | typeof LinearSRGBColorSpace
    | typeof SRGBColorSpace
    | typeof LinearDisplayP3ColorSpace
    | typeof DisplayP3ColorSpace;

export interface ColorManagement {
    /**
     * @default false
     */
    enabled: boolean;

    /**
     * @default LinearSRGBColorSpace
     */
    get workingColorSpace(): WorkingColorSpace;
    set workingColorSpace(colorSpace: WorkingColorSpace);

    convert: (color: Color, sourceColorSpace: DefinedColorSpace, targetColorSpace: DefinedColorSpace) => Color;

    fromWorkingColorSpace: (color: Color, targetColorSpace: DefinedColorSpace) => Color;

    toWorkingColorSpace: (color: Color, sourceColorSpace: DefinedColorSpace) => Color;

    getPrimaries: (colorSpace: DefinedColorSpace) => ColorSpacePrimaries;

    getTransfer: (colorSpace: ColorSpace) => ColorSpaceTransfer;

    getLuminanceCoefficients: (target: Vector3, colorSpace?: ColorSpace) => Vector3;
}

export const ColorManagement: ColorManagement;

export function SRGBToLinear(c: number): number;

export function LinearToSRGB(c: number): number;

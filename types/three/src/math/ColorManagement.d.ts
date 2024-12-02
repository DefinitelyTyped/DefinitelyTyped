import { ColorSpaceTransfer } from "../constants.js";
import { Color } from "./Color.js";
import { Matrix3 } from "./Matrix3.js";
import { Vector3 } from "./Vector3.js";

export interface ColorSpaceDefinition {
    primaries: [number, number, number, number, number, number];
    whitePoint: [number, number];
    transfer: ColorSpaceTransfer;
    toXYZ: Matrix3;
    fromXYZ: Matrix3;
    luminanceCoefficients: [number, number, number];
    workingColorSpaceConfig?: { unpackColorSpace: string };
    outputColorSpaceConfig?: { drawingBufferColorSpace: string };
}

export interface ColorManagement {
    /**
     * @default true
     */
    enabled: boolean;

    /**
     * @default LinearSRGBColorSpace
     */
    workingColorSpace: string;

    spaces: Record<string, ColorSpaceDefinition>;

    convert: (color: Color, sourceColorSpace: string, targetColorSpace: string) => Color;

    fromWorkingColorSpace: (color: Color, targetColorSpace: string) => Color;

    toWorkingColorSpace: (color: Color, sourceColorSpace: string) => Color;

    getPrimaries: (colorSpace: string) => [number, number, number, number, number, number];

    getTransfer: (colorSpace: string) => ColorSpaceTransfer;

    getLuminanceCoefficients: (target: Vector3, colorSpace?: string) => [number, number, number];

    define: (colorSpaces: Record<string, ColorSpaceDefinition>) => void;
}

export const ColorManagement: ColorManagement;

export function SRGBToLinear(c: number): number;

export function LinearToSRGB(c: number): number;

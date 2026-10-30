import { ToneMapping } from "../../../../../src/constants.js";
import { Data3DTexture } from "../../../../../src/textures/Data3DTexture.js";
import { Extension } from "../../Extension.js";
import { LUTParams } from "./LUTMath.js";

export interface ColorGradingJSON {
    version: number;
    lutSize: number;
    selectedToneMapping: ToneMapping;
    pipelineOrder: string[];
    modules: { [id: string]: unknown };
    params: { [name: string]: unknown };
}

export interface ColorGradingOptions {
    nonce?: string | null | undefined;
}

export class ColorGrading extends Extension {
    constructor(options?: ColorGradingOptions);

    lutSize: number;
    lutTexture: Data3DTexture | null;
    sceneGradingEnabled: boolean;
    selectedToneMapping: ToneMapping;

    generate3DLUTData(size?: number, buffer?: Float32Array | null): Float32Array;

    toJSON(): ColorGradingJSON;

    serialize(): ColorGradingJSON;
    deserialize(data: ColorGradingJSON): void;

    load(data: Partial<ColorGradingJSON> | { params: LUTParams } | LUTParams | string): void;
}

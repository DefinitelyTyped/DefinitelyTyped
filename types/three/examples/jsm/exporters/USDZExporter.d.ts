import { Object3D } from "three";
import WebGLTextureUtils = require("../utils/WebGLTextureUtils.js");
import WebGPUTextureUtils = require("../utils/WebGPUTextureUtils.js");

export interface USDZExporterOptions {
    ar?: { anchoring: { type: "plane" }; planeAnchoring: { alignment: "horizontal" | "vertical" | "any" } } | undefined;
    includeAnchoringProperties?: boolean | undefined;
    onlyVisible?: boolean | undefined;
    quickLookCompatible?: boolean | undefined;
    maxTextureSize?: number | undefined;
}

export class USDZExporter {
    textureUtils: typeof WebGLTextureUtils | typeof WebGPUTextureUtils | null;

    constructor();

    parse(
        scene: Object3D,
        onDone: (result: Uint8Array<ArrayBuffer>) => void,
        onError: (error: unknown) => void,
        options?: USDZExporterOptions,
    ): void;

    parseAsync(scene: Object3D, options?: USDZExporterOptions): Promise<Uint8Array<ArrayBuffer>>;
}

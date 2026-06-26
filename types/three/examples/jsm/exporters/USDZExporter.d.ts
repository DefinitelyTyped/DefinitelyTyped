import { AnimationClip, Object3D } from "three";
import * as WebGLTextureUtils from "../utils/WebGLTextureUtils.js";
import * as WebGPUTextureUtils from "../utils/WebGPUTextureUtils.js";

export interface USDZExporterOptions {
    ar?: { anchoring: { type: "plane" }; planeAnchoring: { alignment: "horizontal" | "vertical" | "any" } } | undefined;
    includeAnchoringProperties?: boolean | undefined;
    onlyVisible?: boolean | undefined;
    quickLookCompatible?: boolean | undefined;
    maxTextureSize?: number | undefined;
    animations?: AnimationClip[] | undefined;
    animationFrameRate?: number | undefined;
}

export class USDZExporter {
    textureUtils: typeof WebGLTextureUtils | typeof WebGPUTextureUtils | null;

    constructor();

    setTextureUtils(textureUtils: typeof WebGLTextureUtils | typeof WebGPUTextureUtils | null): void;

    parse(
        scene: Object3D,
        onDone: (result: Uint8Array<ArrayBuffer>) => void,
        onError: (error: unknown) => void,
        options?: USDZExporterOptions,
    ): void;

    parseAsync(scene: Object3D, options?: USDZExporterOptions): Promise<Uint8Array<ArrayBuffer>>;
}

import { Object3D } from "three";

export interface USDZExporterOptions {
    ar?: { anchoring: { type: "plane" }; planeAnchoring: { alignment: "horizontal" | "vertical" | "any" } } | undefined;
    includeAnchoringProperties?: boolean | undefined;
    quickLookCompatible?: boolean | undefined;
    maxTextureSize?: number | undefined;
}

export class USDZExporter {
    constructor();

    parse(
        scene: Object3D,
        onDone: (result: Uint8Array) => void,
        onError: (error: unknown) => void,
        options?: USDZExporterOptions,
    ): void;

    parseAsync(scene: Object3D, options?: USDZExporterOptions): Promise<Uint8Array>;
}

import { Object3D } from "three";

export interface USDZExporterOptions {
    quickLookCompatible?: boolean;
    maxTextureSize?: number;
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

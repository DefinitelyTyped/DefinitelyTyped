import { Object3D } from "../../../src/Three.js";

export interface USDZExporterOptions {
    quickLookCompatible?: boolean;
    maxTextureSize?: number;
}

export class USDZExporter {
    constructor();

    parse(scene: Object3D, options?: USDZExporterOptions): Promise<Uint8Array>;
}

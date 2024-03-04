import { Object3D } from "three";

export interface USDZExporterOptions {
    quickLookCompatible?: boolean;
    maxTextureSize?: number;
}

export class USDZExporter {
    constructor();

    parse(scene: Object3D, options?: USDZExporterOptions): Promise<Uint8Array>;
}

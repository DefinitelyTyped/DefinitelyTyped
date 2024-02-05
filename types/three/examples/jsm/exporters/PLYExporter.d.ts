import { Object3D } from "../../../src/Three.js";

export interface PLYExporterOptionsBase {
    excludeAttributes?: string[];
    littleEndian?: boolean;
}

export interface PLYExporterOptionsBinary extends PLYExporterOptionsBase {
    binary: true;
}

export interface PLYExporterOptionsString extends PLYExporterOptionsBase {
    binary?: false;
}

export interface PLYExporterOptions extends PLYExporterOptionsBase {
    binary?: boolean;
}

export class PLYExporter {
    constructor();

    parse(object: Object3D, onDone: (res: ArrayBuffer) => void, options: PLYExporterOptionsBinary): ArrayBuffer | null;
    parse(object: Object3D, onDone: (res: string) => void, options?: PLYExporterOptionsString): string | null;
    parse(
        object: Object3D,
        onDone: (res: string | ArrayBuffer) => void,
        options?: PLYExporterOptions,
    ): string | ArrayBuffer | null;
}

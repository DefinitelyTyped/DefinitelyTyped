import { Object3D } from "three";

export interface PLYExporterOptionsBase {
    excludeAttributes?: string[] | undefined;
    littleEndian?: boolean | undefined;
    customPropertyMapping?: Record<string, string[]>;
}

export interface PLYExporterOptionsBinary extends PLYExporterOptionsBase {
    binary: true;
}

export interface PLYExporterOptionsString extends PLYExporterOptionsBase {
    binary?: false | undefined;
}

export interface PLYExporterOptions extends PLYExporterOptionsBase {
    binary?: boolean | undefined;
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

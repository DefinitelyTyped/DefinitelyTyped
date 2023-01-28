import { Loader, LoadingManager, Mesh } from '../../../src/Three';

export class USDAParser {
    parse(text: string): object;
}

export class USDZLoader extends Loader {
    constructor(manager?: LoadingManager);

    load(
        url: string,
        onLoad: (usdz: Mesh) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void,
    ): void;

    parse(buffer: ArrayBuffer | string): THREE.Group;
}

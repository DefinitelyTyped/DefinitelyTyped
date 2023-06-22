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
    loadAsync(url: string, onProgress?: (event: ProgressEvent) => void): Promise<Mesh>;

    parse(buffer: ArrayBuffer | string): THREE.Group;
}

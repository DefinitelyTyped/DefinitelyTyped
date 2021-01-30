import { Loader, LoadingManager } from '../../../src/Three';

export class VOXLoader extends Loader {
    constructor(manager?: LoadingManager);

    load(
        url: string,
        onLoad: (chunks: object[]) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void,
    ): void;
    loadAsync(url: string, onProgress?: (event: ProgressEvent) => void): Promise<object[]>;
    parse(data: ArrayBuffer): object[];
}

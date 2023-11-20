import { Loader } from './Loader.js';
import { LoadingManager } from './LoadingManager.js';

export class FileLoader extends Loader<string | ArrayBuffer> {
    constructor(manager?: LoadingManager);

    load(
        url: string,
        onLoad?: (data: string | ArrayBuffer) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (err: unknown) => void,
    ): void;

    mimeType: undefined | MimeType;
    responseType: undefined | string;

    setMimeType(mimeType: MimeType): FileLoader;
    setResponseType(responseType: string): FileLoader;
}

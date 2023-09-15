import { Loader } from './Loader.js';
import { LoadingManager } from './LoadingManager.js';

export class FileLoader extends Loader<string | ArrayBuffer> {
    constructor(manager?: LoadingManager);

    mimeType: undefined | MimeType;
    responseType: undefined | string;

    setMimeType(mimeType: MimeType): FileLoader;
    setResponseType(responseType: string): FileLoader;
}

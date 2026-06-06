import { Loader } from "./Loader.js";
import { LoadingManager } from "./LoadingManager.js";

export class FileLoader<TData = string | ArrayBuffer> extends Loader<TData> {
    constructor(manager?: LoadingManager);

    load(
        url: string,
        onLoad?: (data: TData) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (err: unknown) => void,
    ): void;

    mimeType: string;
    responseType: string;

    setResponseType(value: string): this;
    setMimeType(value: string): this;
}

import { LoadingManager } from './LoadingManager.js';

/**
 * Base class for implementing loaders.
 */
export class Loader<TData = unknown, TUrl = string> {
    constructor(manager?: LoadingManager);

    /**
     * @default 'anonymous'
     */
    crossOrigin: string;

    /**
     * @default false
     */
    withCredentials: boolean;

    /**
     * @default ''
     */
    path: string;

    /**
     * @default ''
     */
    resourcePath: string;
    manager: LoadingManager;

    /**
     * @default {}
     */
    requestHeader: { [header: string]: string };

    load(
        url: TUrl,
        onLoad: (data: TData) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (err: unknown) => void,
    ): void;
    loadAsync(url: TUrl, onProgress?: (event: ProgressEvent) => void): Promise<TData>;

    setCrossOrigin(crossOrigin: string): this;
    setWithCredentials(value: boolean): this;
    setPath(path: string): this;
    setResourcePath(resourcePath: string): this;
    setRequestHeader(requestHeader: { [header: string]: string }): this;

    static DEFAULT_MATERIAL_NAME: string;
}

import { LoadingManager } from './LoadingManager';

/**
 * Base class for implementing loaders.
 */
export class Loader {
    constructor(manager?: LoadingManager);

    /**
     * @default 'anonymous'
     */
    crossOrigin: string;

    /**
     * @default: false
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

    /*
	load(): void;
    loadAsync(): Promise<unknown>;
	parse(): void;
	*/

    setCrossOrigin(crossOrigin: string): this;
    setWithCredentials(value: boolean): this;
    setPath(path: string): this;
    setResourcePath(resourcePath: string): this;
    setRequestHeader(requestHeader: { [header: string]: string }): this;
}

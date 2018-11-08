// https://github.com/mrdoob/three.js/blob/master/examples/js/loaders/GLTFLoader.js

import {LoadingManager} from "./three-core";
import {Group} from "./three-core";

export class GLTFLoader {

    constructor(manager?: LoadingManager);
    manager: LoadingManager;
    path: string;

    load(url: string, onLoad: (group: Group) => void, onProgress?: (event: ProgressEvent) => void, onError?: (event: ErrorEvent) => void) : void;
    setPath(path: string) : GLTFLoader;
    setResourcePath(path: string) : GLTFLoader;
    setCrossOrigin(value: string): void;
    setDRACOLoader(dracoLoader: object): void;
    parse(data: ArrayBuffer, path: string, onLoad: (group: Group) => void, onError?: (event: ErrorEvent) => void) : void;
}

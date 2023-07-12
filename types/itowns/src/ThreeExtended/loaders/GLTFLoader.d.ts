import * as THREE from "three";

export class GLTFLoader extends THREE.Loader {
    constructor(manager: any);
    dracoLoader: any;
    ktx2Loader: any;
    meshoptDecoder: any;
    pluginCallbacks: any[];
    load(url: any, onLoad: any, onProgress: any, onError: any): void;
    setDRACOLoader(dracoLoader: any): GLTFLoader;
    setDDSLoader(): void;
    setKTX2Loader(ktx2Loader: any): GLTFLoader;
    setMeshoptDecoder(meshoptDecoder: any): GLTFLoader;
    register(callback: any): GLTFLoader;
    unregister(callback: any): GLTFLoader;
    parse(data: any, path: any, onLoad: any, onError: any): void;
    parseAsync(data: any, path: any): Promise<any>;
}

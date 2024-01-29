import * as THREE from "three";
import { GLTFLoader } from "../ThreeExtended/loaders/GLTFLoader";

// TODO: rework all

export function enableDracoLoader(path: string, config?: object): void;
export const glTFLoader: GLTFLoader;
// export const legacyGLTFLoader: {
//     load(url: any, onLoad: any, onProgress: any, onError: any): void;
//     parse(data: any, path: any, callback: any): void;
//     crossOrigin: string;
//     withCredentials: boolean;
//     path: string;
//     resourcePath: string;
//     manager: THREE.LoadingManager;
//     requestHeader: {
//         [header: string]: string;
//     };
//     loadAsync(url: string, onProgress?: ((event: ProgressEvent<EventTarget>) => void) | undefined): Promise<any>;
//     setCrossOrigin(crossOrigin: string): any;
//     setWithCredentials(value: boolean): any;
//     setPath(path: string): any;
//     setResourcePath(resourcePath: string): any;
//     setRequestHeader(requestHeader: {
//         [header: string]: string;
//     }): any;
// };
declare namespace _default {
    function parse(buffer: ArrayBuffer, options: {
        gltfUpAxis?: string | undefined;
        urlBase: string;
        doNotPatchMaterial?: boolean | undefined;
        opacity?: any;
        overrideMaterials?: any;
    }): Promise<any>;
}
export default _default;

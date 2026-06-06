import * as THREE from "three";

export function enableDracoLoader(path: string, config?: object): void;
export function enableKtx2Loader(path: string, renderer: THREE.WebGLRenderer): void;

export const glTFLoader: any;
export const legacyGLTFLoader: any;

// TODO: rework all
declare namespace _default {
    function parse(buffer: ArrayBuffer, options: {
        gltfUpAxis?: string;
        urlBase: string;
        doNotPatchMaterial?: boolean;
        opacity?: any;
        overrideMaterials?: any;
    }): Promise<any>;
}

export default _default;

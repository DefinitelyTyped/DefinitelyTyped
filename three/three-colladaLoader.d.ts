// Type definitions for three.js (ColladaLoader2.js)
// NOTE :   These typings are for the loader named ColladaLoader2.js
//          supplied by the npm package @types/three 0.81.
// Definitions by: Brandon Roberge

declare namespace THREE {
    export interface ColladaLoaderReturnType {

    }
    export class ColladaModel {
        animations: any[];
        kinematics: any;
        scene: THREE.Scene;
        library: any;
    }
    export class ColladaLoader {
        constructor();

        load(url: string, onLoad: (model: ColladaModel) => void, onProgress?: (request: ProgressEvent) => void, onError?:(event: ErrorEvent) => void): void;
        setCrossOrigin(value: any): void;
        parse(text: string): ColladaModel;
    }
}
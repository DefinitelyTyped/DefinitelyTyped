// Type definitions for three.js (ColladaLoader2.js)
// NOTE :   These typings are for the loader named ColladaLoader2.js
//          supplied by the npm package @types/three 0.81.
// Definitions by: Emilio Rivera

declare namespace THREE {
    export class ColladaModel {
        animations: any[];//[];
        kinematics: any;// { joints: []};
        scene: THREE.Scene;
    }
    export class ColladaLoader {
        constructor();

        load(url: string, onLoad: (model: ColladaModel) => void): void;
    }
}
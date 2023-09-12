// Type definitions for three-dat.gui 2.0
// Project: https://github.com/SolalDR/three-dat.gui#readme
// Definitions by: hkleungai <https://github.com/hkleungai>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.4

import THREE = require("three");

declare module "dat.gui" {
    interface GUI {
        addCamera(name: string, camera: THREE.Camera): GUI;
        addFog(name: string, fog: THREE.Fog | THREE.FogExp2): GUI;
        addLight(name: string, light: THREE.Light): GUI;
        addMaterial(name: string, material: THREE.Material): GUI;
        addMesh(name: string, mesh: THREE.Mesh, options?: { recursive?: boolean | undefined }): GUI;
        addScene(name: string, mesh: THREE.Scene | THREE.Object3D, options?: { recursive?: boolean | undefined }): GUI;
        addObject3D(name: string, mesh: THREE.Object3D, options?: {
            recursive?: boolean | undefined;
            inner?: boolean | undefined;
            stepPosition?: number | undefined;
            stepRotation?: number | undefined;
            stepScale?: number | undefined;
        }): GUI;
        addVector(name: string, vector: THREE.Vector | THREE.Euler, options?: { step?: number | undefined }): GUI;
    }
}

// FIXME: Get rid of the "unknown" here.
declare function init(dat: { GUI: unknown }): void;

export = init;

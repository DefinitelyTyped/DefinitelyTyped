// Type definitions for three-dat.gui 2.0
// Project: https://github.com/SolalDR/three-dat.gui#readme
// Definitions by: hkleungai <https://github.com/hkleungai>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.7

import THREE from 'three';

declare module 'dat.gui' {
    interface GUI {
        addCamera(name: string, camera: THREE.Camera): GUI;
        addFog(name: string, fog: THREE.Fog | THREE.FogExp2): GUI;
        addLight(name: string, light: THREE.Light): GUI;
        addMaterial(name: string, material: THREE.Material): GUI;
        addMesh(name: string, mesh: THREE.Mesh, options?: { recursive?: boolean }): GUI;
        addScene(name: string, mesh: THREE.Scene | THREE.Object3D, options?: { recursive?: boolean }): GUI;
        addObject3D(name: string, mesh: THREE.Object3D, options?: { recursive?: boolean, inner?: boolean, stepPosition?: number, stepRotation?: number, stepScale?: number }): GUI;
        addVector(name: string, vector: THREE.Vector | THREE.Euler, options?: { step?: number }): GUI;
    }
}

// FIXME: Get rid of the "unknown" here.
declare function init(dat: { GUI: unknown }): void;

export = init;

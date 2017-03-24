// Type definitions for three.js (Octree.js)
// Project: https://github.com/mrdoob/three.js/blob/master/examples/js/Octree.js
// Definitions by: Hou Chunlei <https://github.com/omni360>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="three" />

declare  namespace THREE {
    export class Octree {
        constructor(parameters?: any);

        update(): void;

        add(object: any, options?: any): any;

        addDeferred(object: any, options?: any): any;

        addObjectData(object: any, part: any): any;

        remove(object: any): any;

        extend(octree: Octree): any;

        rebuild(): any;

        updateObject(object: any): any;

        search(position: THREE.Vector3, radius: number, organizeByObject: boolean, direction: THREE.Vector3): any;

        setRoot(root: any): any;

        getDepthEnd(): number;

        getNodeCountEnd(): number;

        getObjectCountEnd(): number;

        toConsole(): any;


    }
}

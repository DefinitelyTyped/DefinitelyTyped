// Type definitions for three.js (EditorControls.js)
// Project: https://github.com/mrdoob/three.js/blob/master/examples/js/controls/EditorControls.js
// Definitions by: Qinsi ZHU <https://github.com/qszhusightp>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="./three.d.ts" />

declare module THREE {

  class EditorControls extends EventDispatcher {

    constructor(object: Camera, domElement?:HTMLElement);

    enabled: boolean;
    center: THREE.Vector3;

    focus(target: THREE.Object3D, frame: boolean): void;
    pan(delta: THREE.Vector3): void;
    zoom(delta: THREE.Vector3): void;
    rotate(delta: THREE.Vector3): void;
    dispose(): void;

  }

}

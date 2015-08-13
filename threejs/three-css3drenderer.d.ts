// Type definitions for three.js (CSS3DRenderer.js)
// Project: https://github.com/mrdoob/three.js/blob/master/examples/js/renderers/CSS3DRenderer.js
// Definitions by: Satoru Kimura <https://github.com/gyohk>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// This renderer does not work in IE. Can be found here for more information.
// https://github.com/mrdoob/three.js/issues/4783

/// <reference path="./three.d.ts" />

declare module THREE {
    class CSS3DObject extends Object3D {
        constructor(element: any);

        element: any;
    }

    class CSS3DSprite extends CSS3DObject {
        constructor(element: any);

    }


    class CSS3DRenderer {
        constructor();

        domElement:HTMLElement;

        setSize(width: number, height: number): void;
        render(scene: THREE.Scene, camera: THREE.Camera): void;
    }
}
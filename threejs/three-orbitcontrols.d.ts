// Type definitions for OrbitControls.js
// Project: https://github.com/mrdoob/three.js/blob/master/examples/js/controls/OrbitControls.js
// Definitions by: Satoru Kimura <https://github.com/gyohk>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="./three.d.ts" />

declare module THREE {
    class OrbitControls {
        constructor(object:Camera, domElement?:HTMLElement);

        object:Camera;
        domElement:HTMLElement;

        // API
        enabled: boolean;
        target: THREE.Vector3;

        // deprecated
        center: THREE.Vector3;

        noZoom: boolean;
        zoomSpeed: number;
        minDistance: number;
        maxDistance: number;
        noRotate: boolean;
        rotateSpeed: number;
        noPan: boolean;
        keyPanSpeed: number;
        autoRotate: boolean;
        autoRotateSpeed: number;
        minPolarAngle: number;
        maxPolarAngle: number;
        minAzimuthAngle: number;
        maxAzimuthAngle: number;
        noKeys: boolean;
        keys: { LEFT: number; UP: number; RIGHT: number; BOTTOM: number; };
        mouseButtons: { ORBIT: MOUSE; ZOOM: MOUSE; PAN: MOUSE; };

        update():void;
    }
}
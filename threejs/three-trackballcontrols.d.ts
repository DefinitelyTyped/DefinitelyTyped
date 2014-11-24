// Type definitions for three.js (TrackballControls.js)
// Project: https://github.com/mrdoob/three.js/blob/master/examples/js/controls/TrackballControls.js
// Definitions by: Satoru Kimura <https://github.com/gyohk>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="./three.d.ts" />

declare module THREE {
    class TrackballControls extends EventDispatcher {
        constructor(object:Camera, domElement?:HTMLElement);

        object:Camera;
        domElement:HTMLElement;

        // API
        enabled:boolean;
        screen:{ left: number; top: number; width: number; height: number };
        rotateSpeed:number;
        zoomSpeed:number;
        panSpeed:number;
        noRotate:boolean;
        noZoom:boolean;
        noPan:boolean;
        noRoll:boolean;
        staticMoving:boolean;
        dynamicDampingFactor:number;
        minDistance:number;
        maxDistance:number;
        keys:number[];

        update():void;
    }
}
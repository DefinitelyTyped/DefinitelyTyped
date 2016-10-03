// Type definitions for three.js (TrackballControls.js)
// Project: https://github.com/mrdoob/three.js/blob/master/examples/js/controls/TrackballControls.js
// Definitions by: Satoru Kimura <https://github.com/gyohk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="./three.d.ts" />

declare namespace THREE {
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

        target: THREE.Vector3;
        position0: THREE.Vector3;
        target0: THREE.Vector3;
        up0: THREE.Vector3;

        update():void;
        reset():void;
        checkDistances():void;
        zoomCamera():void;
        panCamera():void;
        rotateCamera():void;

        handleResize():void;
        handleEvent(event: any):void;
    }
}

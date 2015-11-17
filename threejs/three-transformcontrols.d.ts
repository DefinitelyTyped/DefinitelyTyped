// Type definitions for three.js (TransformControls.js)
// Project: https://github.com/mrdoob/three.js/blob/master/examples/js/controls/TransformControls.js
// Definitions by: Stefan Profanter <https://github.com/Pro>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="./three.d.ts" />

declare module THREE {
	class TransformControls extends Object3D {
		constructor(object:Camera, domElement?:HTMLElement);

		object: Object3D;

		update():void;
		detach(): void;
		attach(object: Object3D): void;
		setMode(mode: string): void;
		setSnap(snap: any): void;
		setSize(size:number):void;
		setSpace(space:string):void;

	}
}

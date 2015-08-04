
/// <reference path="./three.d.ts" />

declare module THREE {
	class TransformControls extends Object3D {
		constructor(object:Camera, domElement?:HTMLElement);

		object: Object3D;

		update():void;
		detach(object: Object3D): void;
		attach(object: Object3D): void;
		setMode(mode: string): void;
		setSnap(snap: any): void;
		setSize(size:number):void;
		setSpace(space:string):void;

	}
}
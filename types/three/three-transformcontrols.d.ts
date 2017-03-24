// Type definitions for three.js (TransformControls.js)
// Project: https://github.com/mrdoob/three.js/blob/master/examples/js/controls/TransformControls.js
// Definitions by: Stefan Profanter <https://github.com/Pro>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare namespace THREE {
    class TransformControls extends Object3D {
        constructor(object: Camera, domElement?: HTMLElement);

        object: Object3D;

        update(): void;

        detach(): void;

        attach(object: Object3D): void;

        getMode(): string;

        setMode(mode: string): void;

        setSnap(snap: any): void;

        setSize(size: number): void;

        setSpace(space: string): void;

    }
}

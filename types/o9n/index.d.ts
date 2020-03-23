// Type definitions for o9n 2.0
// Project: https://github.com/chmanie/o9n#readme
// Definitions by: Corbin Crutchley <https://github.com/crutchcorn>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="w3c-screen-orientation" />

interface Orientation extends ScreenOrientation {
    install(): undefined;
    onchange: ((this: ScreenOrientation, ev: any) => any) | null;
}

declare const OrientationObj: Orientation;

export = OrientationObj;

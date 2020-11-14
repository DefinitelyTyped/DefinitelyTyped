// Type definitions for non-npm package W3C Screen Orientation API 1.0
// Project: https://www.w3.org/TR/screen-orientation/
// Definitions by: Kenneth Rohde Christiansen <https://github.com/kenchris>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type ScreenOrientationLockType = "any" | "natural" | "landscape" | "portrait" | "portrait-primary" | "portrait-secondary" | "landscape-primary" | "landscape-secondary";

interface ScreenOrientation extends EventTarget {
    lock(orientation: ScreenOrientationLockType): Promise<void>;
    unlock(): void;
    readonly type: OrientationType;
    readonly angle: number;
    addEventListener(type: "change", listener: (this: this, ev: Event) => any, useCapture?: boolean): void;
}

interface Screen {
    readonly orientation: ScreenOrientation;
}

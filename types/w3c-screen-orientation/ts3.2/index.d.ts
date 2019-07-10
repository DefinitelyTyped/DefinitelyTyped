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

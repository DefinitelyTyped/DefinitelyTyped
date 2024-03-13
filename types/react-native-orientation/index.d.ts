declare namespace Orientation {
    type orientation = "LANDSCAPE" | "PORTRAIT" | "UNKNOWN" | "PORTRAITUPSIDEDOWN";
    type specificOrientation = "LANDSCAPE-LEFT" | "LANDSCAPE-RIGHT" | "PORTRAIT" | "UNKNOWN" | "PORTRAITUPSIDEDOWN";

    export function addOrientationListener(callback: (orientation: orientation) => void): void;
    export function removeOrientationListener(callback: (orientation: orientation) => void): void;
    export function addSpecificOrientationListener(callback: (specificOrientation: specificOrientation) => void): void;
    export function removeSpecificOrientationListener(
        callback: (specificOrientation: specificOrientation) => void,
    ): void;

    export function getInitialOrientation(): orientation;
    export function lockToPortrait(): void;
    export function lockToLandscape(): void;
    export function lockToLandscapeLeft(): void;
    export function lockToLandscapeRight(): void;
    export function unlockAllOrientations(): void;
    export function getOrientation(callback: (err: Error, orientation: orientation) => void): void;
    export function getSpecificOrientation(callback: (err: Error, orientation: specificOrientation) => void): void;
}

export = Orientation;

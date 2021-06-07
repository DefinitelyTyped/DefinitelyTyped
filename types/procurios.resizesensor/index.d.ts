// Type definitions for procurios.resizesensor 0.2
// Project: https://github.com/procurios/ResizeSensor
// Definitions by: Taylor Clark <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace resizeSensor;

export function create(targetElement: HTMLElement, callback: (dimensions: Dimensions) => void): ResizeSensor;

export interface Dimensions {
    width: number;
    height: number;
}

export interface ResizeSensor {
    destroy(): void;
}

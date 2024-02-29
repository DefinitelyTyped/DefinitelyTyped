export as namespace resizeSensor;

export function create(targetElement: HTMLElement, callback: (dimensions: Dimensions) => void): ResizeSensor;

export interface Dimensions {
    width: number;
    height: number;
}

export interface ResizeSensor {
    destroy(): void;
}

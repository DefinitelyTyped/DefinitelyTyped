export as namespace simpleElementResizeDetector;

declare function simpleElementResizeDetector(
    element: HTMLElement,
    handler: (element: HTMLElement) => void,
): HTMLIFrameElement;
export = simpleElementResizeDetector;

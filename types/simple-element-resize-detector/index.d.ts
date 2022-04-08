// Type definitions for simple-element-resize-detector 1.3
// Project: https://github.com/developit/simple-element-resize-detector#readme
// Definitions by: Nathan Bierema <https://github.com/Methuselah96>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
export as namespace simpleElementResizeDetector;

declare function simpleElementResizeDetector(
    element: HTMLElement,
    handler: (element: HTMLElement) => void
): HTMLIFrameElement;
export = simpleElementResizeDetector;

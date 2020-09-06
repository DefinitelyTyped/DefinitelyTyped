// Type definitions for simple-element-resize-detector 1.3
// Project: https://github.com/developit/simple-element-resize-detector#readme
// Definitions by: Nathan Bierema <https://github.com/Methuselah96>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function resizeDetector(
    element: HTMLElement,
    handler: () => void
): HTMLIFrameElement;
export = resizeDetector;

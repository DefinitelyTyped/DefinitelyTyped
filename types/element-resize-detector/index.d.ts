// Type definitions for element-resize-detector 1.1
// Project: https://github.com/wnr/element-resize-detector
// Definitions by: Saransh Kataria <https://github.com/saranshkataria>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface ElementResizeDetectorProps {
    strategy?: 'scroll' | 'object';
}

export interface ElementResizeDetectorActions {
    listenTo(element: HTMLElement, callback: (elem: HTMLElement) => void): void;
    removeListener(element: HTMLElement, callback: (elem: HTMLElement) => void): void;
    removeAllListeners(element: HTMLElement): void;
    uninstall(element: HTMLElement): void;
}

export default function elementResizeDetectorMaker(
    options?: ElementResizeDetectorProps
): ElementResizeDetectorActions;

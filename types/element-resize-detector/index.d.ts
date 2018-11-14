// Type definitions for element-resize-detector 1.2
// Project: https://github.com/wnr/element-resize-detector
// Definitions by: Saransh Kataria <https://github.com/saranshkataria>
//                 Frank Li <https://github.com/franklixuefei>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface IdHandlerProps {
    get(element: HTMLElement, readonly: boolean): string;
    set(element: HTMLElement): string;
}

export interface ReporterProps {
    log(): void;
    warn(): void;
    error(): void;
}

export interface ElementResizeDetectorProps {
    strategy?: 'scroll' | 'object';
    reporter?: ReporterProps;
    callOnAdd?: boolean;
    idHandler?: IdHandlerProps;
    debug?: boolean;
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

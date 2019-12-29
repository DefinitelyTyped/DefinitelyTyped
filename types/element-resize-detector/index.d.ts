// Type definitions for element-resize-detector 1.1
// Project: https://github.com/wnr/element-resize-detector
// Definitions by: Saransh Kataria <https://github.com/saranshkataria>
//                 Frank Li <https://github.com/franklixuefei>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function elementResizeDetectorMaker(options?: elementResizeDetectorMaker.ErdmOptions): elementResizeDetectorMaker.Erd;

declare namespace elementResizeDetectorMaker {
    interface ErdmOptions {
        strategy?: 'scroll' | 'object';
        /**
         * A custom reporter that handles reporting logs, warnings and errors.
         * If not provided, a default id handler will be used.
         * If set to false, then nothing will be reported.
         */
        reporter?: ReporterProps;

        /**
         * Determines if listeners should be called when they are getting added.
         * If true, the listener is guaranteed to be called when it has been added.
         * If false, the listener will not be guarenteed to be called when
         * it has been added (does not prevent it from being called).
         *
         * @default true
         */
        callOnAdd?: boolean;

        /**
         * A custom id handler that is responsible for generating,
         * setting and retrieving id's for elements.
         * If not provided, a default id handler will be used.
         */
        idHandler?: IdHandlerProps;

        /**
         * If set to true, the the system will report debug messages as default
         * for the listenTo method.
         */
        debug?: boolean;
    }

    interface IdHandlerProps {
        get(element: HTMLElement, readonly: boolean): string;
        set(element: HTMLElement): string;
    }

    interface ReporterProps {
        log(idOrText: string, textOrId: string, element?: HTMLElement): void;
        warn(text: string, element?: HTMLElement): void;
        error(text: string): void;
    }

    interface Erd {
        listenTo(element: HTMLElement, callback: (elem: HTMLElement) => void): void;
        removeListener(element: HTMLElement, callback: (elem: HTMLElement) => void): void;
        removeAllListeners(element: HTMLElement): void;
        uninstall(element: HTMLElement): void;
    }
}

export = elementResizeDetectorMaker;

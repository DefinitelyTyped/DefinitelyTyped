// Type definitions for materialize-css 1.0
// Project: http://materializecss.com/
// Definitions by:  胡玮文 <https://github.com/huww98>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

export = M;

declare global {
    namespace M {
         class Sidenav {
            /**
             * Construct Sidenav instance and set up overlay
             */
            constructor(elem: Element, options?: Partial<SidenavOptions>);

            /**
             * Get Instance
             */
            static getInstance(elem: Element): Sidenav;

            /**
             * Opens Sidenav
             */
            open(): void;

            /**
             * Closes Sidenav
             */
            close(): void;

            /**
             * Destroy plugin instance and teardown
             */
            destroy(): void;

            /**
             * The DOM element the plugin was initialized with
             */
            el: Element;

            /**
             * The options the instance was initialized with
             */
            options: SidenavOptions;

            /**
             * Describes open/close state of Sidenav
             */
            isOpen: boolean;

            /**
             * Describes if sidenav is fixed
             */
            isFixed: boolean;

            /**
             * Describes if Sidenav is being dragged
             */
            isDragged: boolean;
        }

        /**
         * Options for the Sidenav
         */
        interface SidenavOptions {
            /**
             * Side of screen on which Sidenav appears
             * @default 'left'
             */
            edge: 'left' | 'right';

            /**
             * Allow swipe gestures to open/close Sidenav
             * @default true
             */
            draggable: boolean;

            /**
             * Length in ms of enter transition
             * @default 250
             */
            inDuration: number;

            /**
             * Length in ms of exit transition
             * @default 200
             */
            outDuration: number;

            /**
             * Function called when sidenav starts entering
             */
            onOpenStart: (instance: Sidenav, elem: Element) => void;

            /**
             * Function called when sidenav finishes entering
             */
            onOpenEnd: (instance: Sidenav, elem: Element) => void;

            /**
             * Function called when sidenav starts exiting
             */
            onCloseStart: (instance: Sidenav, elem: Element) => void;

            /**
             * Function called when sidenav finishes exiting
             */
            onCloseEnd: (instance: Sidenav, elem: Element) => void;
        }
    }
}

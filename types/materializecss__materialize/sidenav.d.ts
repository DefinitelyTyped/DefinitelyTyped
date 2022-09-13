/// <reference path="./common.d.ts" />

declare namespace M {
    class Sidenav extends Component<SidenavOptions> implements Openable {
        /**
         * Get Instance
         */
        static getInstance(elem: Element): Sidenav;

        /**
         * Init Sidenav
         */
        static init(els: Element, options?: Partial<SidenavOptions>): Sidenav;

        /**
         * Init Sidenavs
         */
        static init(els: MElements, options?: Partial<SidenavOptions>): Sidenav[];

        /**
         * Opens Sidenav
         */
        open(): void;

        /**
         * Closes Sidenav
         */
        close(): void;

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
         * Width of the area where you can start dragging.
         * @default '10px'
         */
        dragTargetWidth: string;

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
        onOpenStart: (this: Sidenav, elem: Element) => void;

        /**
         * Function called when sidenav finishes entering
         */
        onOpenEnd: (this: Sidenav, elem: Element) => void;

        /**
         * Function called when sidenav starts exiting
         */
        onCloseStart: (this: Sidenav, elem: Element) => void;

        /**
         * Function called when sidenav finishes exiting
         */
        onCloseEnd: (this: Sidenav, elem: Element) => void;
    }
}

interface JQuery {
    sidenav(method: keyof Pick<M.Sidenav, "open" | "close" | "destroy">): JQuery;
    sidenav(options?: Partial<M.SidenavOptions>): JQuery;
}

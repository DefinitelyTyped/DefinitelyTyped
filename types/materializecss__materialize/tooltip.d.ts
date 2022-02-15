/// <reference path="./common.d.ts" />

declare namespace M {
    class Tooltip extends Component<TooltipOptions> implements Openable {
        /**
         * Get Instance
         */
        static getInstance(elem: Element): Tooltip;

        /**
         * Init Tooltip
         */
        static init(els: Element, options?: Partial<TooltipOptions>): Tooltip;

        /**
         * Init Tooltips
         */
        static init(els: MElements, options?: Partial<TooltipOptions>): Tooltip[];

        /**
         * Show tooltip.
         */
        open(): void;

        /**
         * Hide tooltip.
         */
        close(): void;

        /**
         * If tooltip is open.
         */
        isOpen: boolean;

        /**
         * If tooltip is hovered.
         */
        isHovered: boolean;
    }

    interface TooltipOptions {
        /**
         * Delay time before tooltip disappears.
         * @default 0
         */
        exitDelay: number;

        /**
         * Delay time before tooltip appears.
         * @default 200
         */
        enterDelay: number;

        /**
         * Text string for the tooltip.
         */
        text: string;

        /**
         * HTML content that will be appended to the text.
         * Only use properly sanitized or otherwise trusted data for unsafeHTML.
         * @default null
         */
        unsafeHTML: string;

        /**
         * HTML content that will be appended to text. Only use properly sanitized or otherwise trusted data for html.
         * Will be ignored if unsafeHTML is set.\
         * @deprecated Will be removed in a later release.
         * @default null
         */
        html: string;

        /**
         * Set distance tooltip appears away from its activator excluding transitionMovement.
         * @default 5
         */
        margin: number;

        /**
         * Enter transition duration.
         * @default 300
         */
        inDuration: number;

        /**
         * Opacity of the tooltip.
         * @default 1
         */
        opacity: number;

        /**
         * Exit transition duration.
         * @default 250
         */
        outDuration: number;

        /**
         * Set the direction of the tooltip.
         * @default 'bottom'
         */
        position: 'top' | 'right' | 'bottom' | 'left';

        /**
         * Amount in px that the tooltip moves during its transition.
         * @default 10
         */
        transitionMovement: number;
    }
}

interface JQuery {
    tooltip(method: keyof Pick<M.Tooltip, "open" | "close" | "destroy">): JQuery;
    tooltip(options?: Partial<M.TooltipOptions>): JQuery;
}

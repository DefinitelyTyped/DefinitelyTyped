/// <reference path="./common.d.ts" />

declare namespace M {
    class Tabs extends Component<TabsOptions> {
        /**
         * Get Instance
         */
        static getInstance(elem: Element): Tabs;

        /**
         * Init Tabs
         */
        static init(els: Element, options?: Partial<TabsOptions>): Tabs;

        /**
         * Init Tabses
         */
        static init(els: MElements, options?: Partial<TabsOptions>): Tabs[];

        /**
         * Show tab content that corresponds to the tab with the id
         * @param tabId The id of the tab that you want to switch to
         */
        select(tabId: string): void;

        /**
         * The index of tab that is currently shown
         */
        index: number;

        /**
         * Recalculate tab indicator position. This is useful when the indicator position is not correct
         */
        updateTabIndicator(): void;
    }

    /**
     * Options for the Tabs
     */
    interface TabsOptions {
        /**
         * Transition duration in milliseconds.
         * @default 300
         */
        duration: number;

        /**
         * Callback for when a new tab content is shown
         */
        onShow: (this: Tabs, newContent: Element) => void;

        /**
         * Set to true to enable swipeable tabs. This also uses the responsiveThreshold option
         * @default false
         */
        swipeable: boolean;

        /**
         * The maximum width of the screen, in pixels, where the swipeable functionality initializes.
         * @default infinity
         */
        responsiveThreshold: number;
    }
}

interface JQuery {
    tabs(method: keyof Pick<M.Tabs, "destroy">): JQuery;
    tabs(method: keyof Pick<M.Tabs, "select">, tabId: string): JQuery;
    tabs(options?: Partial<M.TabsOptions>): JQuery;
}

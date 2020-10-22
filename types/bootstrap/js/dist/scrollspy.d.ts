declare class ScrollSpy {
    constructor(element: Element, options?: Partial<ScrollSpy.Options>);

    /**
     * When using scrollspy in conjunction with adding or removing of
     * elements from the DOM, you’ll need to call the refresh method like
     * so:
     */
    refresh(): void;

    /**
     * Destroys an element’s scrollspy.
     */
    dispose(): void;

    /**
     * Static method which allows you to get the scrollspy instance associated
     * with a DOM element
     */
    static getInstance(element: Element, options?: Partial<ScrollSpy.Options>): ScrollSpy;
}

declare namespace ScrollSpy {
    enum Events {
        /**
         * This event fires on the scroll element whenever a new item becomes
         * activated by the scrollspy.
         */
        activate = 'activate.bs.scrollspy',
    }

    interface Options {
        /**
         * Pixels to offset from top when calculating position of scroll.
         *
         * @default 10
         */
        offset: number;

        /**
         * Finds which section the spied element is in. auto will choose the
         * best method to get scroll coordinates. offset will use the
         * Element.getBoundingClientRect() method to get scroll coordinates.
         * position will use the HTMLElement.offsetTop and
         * HTMLElement.offsetLeft properties to get scroll coordinates.
         *
         * @default 'auto'
         */
        method: 'auto' | 'offset' | 'position';

        /**
         * Specifies element to apply Scrollspy plugin.
         */
        target: string | Element | JQuery;
    }
}

export default ScrollSpy;

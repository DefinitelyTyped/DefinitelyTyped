import BaseComponent from './base-component';

declare class ScrollSpy extends BaseComponent {
    constructor(element: Element, options?: Partial<ScrollSpy.Options>);

    /**
     * When using scrollspy in conjunction with adding or removing of
     * elements from the DOM, you’ll need to call the refresh method like
     * so:
     */
    refresh(): void;

    /**
     * Static method which allows you to get the scrollspy instance associated
     * with a DOM element
     */
    static getInstance(element: Element, options?: Partial<ScrollSpy.Options>): ScrollSpy;

    static jQueryInterface: ScrollSpy.jQueryInterface;

    // static NAME: 'scrollspy';

    /**
     * Default settings of this plugin
     *
     * @link https://getbootstrap.com/docs/5.0/getting-started/javascript/#default-settings
     */
    static Default: ScrollSpy.Options;
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

    type jQueryInterface = (config?: Partial<Options> | 'refresh' | 'dispose') => void;
}

export default ScrollSpy;

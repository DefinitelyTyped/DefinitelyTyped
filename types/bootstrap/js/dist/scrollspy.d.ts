import BaseComponent, { GetInstanceFactory, GetOrCreateInstanceFactory } from './base-component';

declare class ScrollSpy extends BaseComponent {
    /**
     * Static method which allows you to get the scrollspy instance associated
     * with a DOM element
     */
    static getInstance: GetInstanceFactory<ScrollSpy>;

    /**
     * Static method which allows you to get the scrollspy instance associated with
     * a DOM element, or create a new one in case it wasn’t initialised
     */
    static getOrCreateInstance: GetOrCreateInstanceFactory<ScrollSpy, Partial<ScrollSpy.Options>>;

    static jQueryInterface: ScrollSpy.jQueryInterface;

    /**
     * Default settings of this plugin
     *
     * @link https://getbootstrap.com/docs/5.0/getting-started/javascript/#default-settings
     */
    static Default: ScrollSpy.Options;
    constructor(element: string | Element, options?: Partial<ScrollSpy.Options>);

    /**
     * When using scrollspy in conjunction with adding or removing of
     * elements from the DOM, you’ll need to call the refresh method like
     * so:
     */
    refresh(): void;
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

    type jQueryInterface = (config?: Partial<Options> | 'refresh' | 'dispose') => JQuery;
}

export default ScrollSpy;

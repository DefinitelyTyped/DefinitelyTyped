import BaseComponent from './base-component';

declare class Tab extends BaseComponent {
    /**
     * Selects the given list item and shows its associated pane. Any other
     * list item that was previously selected becomes unselected and its
     * associated pane is hidden. Returns to the caller before the tab pane
     * has actually been shown (for example, before the shown.bs.tab event
     * occurs).
     */
    show(): void;

    /**
     * Static method which allows you to get the tab instance associated with a
     * DOM element
     */
    static getInstance(element: Element): Tab | null;

    static jQueryInterface: Tab.jQueryInterface;

    // static NAME: 'tab';
}

declare namespace Tab {
    enum Events {
        /**
         * This event fires on tab show, but before the new tab has been shown.
         * Use event.target and event.relatedTarget to target the active tab and
         * the previous active tab (if available) respectively.
         */
        show = 'show.bs.tab',

        /**
         * This event fires on tab show after a tab has been shown. Use
         * event.target and event.relatedTarget to target the active tab and the
         * previous active tab (if available) respectively.
         */
        shown = 'shown.bs.tab',

        /**
         * This event fires when a new tab is to be shown (and thus the previous
         * active tab is to be hidden). Use event.target and event.relatedTarget
         * to target the current active tab and the new soon-to-be-active tab,
         * respectively.
         */
        hide = 'hide.bs.tab',

        /**
         * This event fires after a new tab is shown (and thus the previous
         * active tab is hidden). Use event.target and event.relatedTarget to
         * target the previous active tab and the new active tab, respectively.
         */
        hidden = 'hidden.bs.tab',
    }

    type jQueryInterface = (config?: 'show' | 'dispose') => void;
}

export default Tab;

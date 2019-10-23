// Type definitions for isotope 3.0
// Project: https://isotope.metafizzy.co
// Definitions by: Anže Videnič <https://github.com/avidenic>
//                 Mălin Brândușe <https://github.com/malinushj>
//                 SPWizard01 <https://github.com/SPWizard01>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export as namespace Isotope
export = Isotope;

declare namespace Isotope {
    type LayoutModes = 'masonry' | 'fitRows' | 'cellsByRow' | 'vertical' | 'packery' | 'masonryHorizontal' | 'fitColumns' | 'cellsByColumn' | 'horiz';
    type Elements = HTMLElement[] | HTMLElement | JQuery | NodeList;

    interface IsotopeOptions {
        /**
         * A horizontal grid layout where items are centered inside each cell. The grid is defined by columnWidth and rowHeight options.
         */
        cellsByColumn?: CellsByColumn;
        /**
         * A vertical grid layout where items are centered inside each cell. The grid is defined by columnWidth and rowHeight options.
         */
        cellsByRow?: CellsByRow;
        /**
         * CSS styles that are applied to the container element.
         */
        containerStyle?: Style;
        /**
         * Shows items that match the filter and hides items that do not match.
         * If set to a string, that value is used as a selector.
         * If filter is set to a function, that function checks each item and returns true or false if the item should be shown or hidden.
         */
        filter?: string | ((itemElement: HTMLElement) => boolean);
        /**
         * Items are arranged into rows. Rows progress vertically. Similar to what you would expect from a layout that uses CSS floats. fitRows works well for items that have the same height.
         */
        fitRows?: FitRows;
        /**
         * Enables layout on initialization. Enabled by default initLayout: true.
         * Set initLayout: false to disable layout on initialization, so you can use methods or add events before the initial layout.
         * initLayout was previously isInitLayout in Isotope v2. isInitLayout will still work in Isotope v3
         */
        initLayout?: boolean;
        /**
         * Specifies which child elements will be used as item elements in the layout.
         * We recommend always setting itemSelector. itemSelector is useful to exclude sizing elements or other elements that are not part of the layout.
         */
        itemSelector?: string;
        /**
         * Layout modes can have their own separate options. These are set in a corresponding object within the options.
         * masonry, fitRows, and vertical are included in Isotope by default. All other layout modes need to installed separately.
         */
        layoutMode?: LayoutModes;
        /**
         * Isotope reads data from HTML with the getSortData option.
         * getSortData is set with an object. The object’s keys are keywords used to sort by. Object values are either a shortcut string or function to retrieve the data.
         */
        getSortData?: Sorter;
        /**
         * The styles applied to hide items when filtering.
         */
        hiddenStyle?: Style;
        /**
         * Items are arranged horizontally.
         */
        horiz?: Horizontal;
        /**
         * The default layout mode. Items are arranged in a vertically cascading grid.
         */
        masonry?: Masonry;
        /**
         * Horizontal version of masonry. Items are arranged in a horizontally cascading grid.
         */
        masontryHorizontal?: MasonryHorizontal;
        /**
         * Controls the horizontal flow of the layout. By default, item elements start positioning at the left, with originLeft: true. Set originLeft: false for right-to-left layouts.
         */
        originLeft?: boolean;
        /**
         * Controls the vertical flow of the layout. By default, item elements start positioning at the top. Set to false for bottom-up layouts. It’s like Tetris!
         */
        originTop?: boolean;
        /**
         * The packery layout mode uses a bin-packing algorithm. This is a fancy way of saying “it fills empty gaps.” It works similarly to masonry, except gaps will be filled.
         */
        packery?: Packery;
        /**
         * Sets item positions in percent values, rather than pixel values. percentPosition: true works well with percent-width items, as items will not transition their position on resize.
         */
        percentPosition?: boolean;
        /**
         * Adjusts sizes and positions when window is resized. Enabled by default resize: true.
         */
        resize?: boolean;
        /**
         * Sorts items ascendingly if sortAscending: true “A, B, C…”, “1, 2, 3…”, or descendingly if sortAscending: false, “Z, Y, X…”, “9, 8, 7…”.
         * You can set ascending order for each sortBy value by setting sortAscending to an object.
         */
        sortAscending?: boolean | SortOrder;
        /**
         * Sorts items according to which property of getSortData. The value of sortBy needs to match a key name in getSortData.
         */
        sortBy?: string | string[];
        /**
         * Staggers item transitions, so items transition incrementally after one another. Set as a CSS time format, '0.03s', or as a number in milliseconds, 30.
         */
        stagger?: number | string;
        /**
         * Specifies which elements are stamped within the layout. Isotope will layout items around stamped elements.
         * The masonry, packery, and masonryHorizontal layout modes support stamping.
         * The stamp option stamps elements only when the Isotope instance is first initialized. You can stamp additional elements afterwards with the stamp method.
         */
        stamp?: string;
        /**
         * Duration of the transition when items change position or appearance, set in a CSS time format, or as a number in milliseconds. Default: transitionDuration: '0.4s'
         */
        transitionDuration?: number | string;
        /**
         * Items are stacked vertically.
         */
        vertical?: Vertical;
        /**
         * The styles applied to reveal items when filtering.
         */
        visibleStyle?: Style;
    }

    interface Sorter {
        [key: string]: ((itemElm: JQuery) => number | string) | string;
    }

    interface SortOrder {
        [key: string]: boolean;
    }

    interface Style {
        [key: string]: number | string;
    }

    interface CellsByColumn {
        columnWidth?: number | string;
        rowHeight?: number | string;
    }

    interface CellsByRow {
        columnWidth?: number | string;
        rowHeight?: number | string;
    }

    interface FitRows {
        gutter?: number | string;
    }

    interface Horizontal {
        verticalAligment?: number;
    }

    interface Masonry {
        columnWidth?: number | string;
        fitWidth?: boolean;
        gutter?: number | string;
    }

    interface MasonryHorizontal {
        gutter?: number | string;
        rowHeight?: number | string;
    }

    interface Packery {
        columnWidth?: number | string;
        gutter?: number | string;
        horizontal?: boolean;
        rowHeight?: number;
    }

    interface Vertical {
        horizontalAlignment?: number;
    }
}

interface Isotope {
    /**
     * Adds item elements to the Isotope instance. addItems does not lay out items like appended, prepended, or insert.
     * @param elements Element, jQuery Object, NodeList, or Array of Elements
     */
    addItems(elements: Isotope.Elements): void;
    /**
     * Adds and lays out newly appended item elements to the end of the layout.
     * @param elements Element, jQuery Object, NodeList, or Array of Elements
     */
    appended(elements: Isotope.Elements): void;
    /**
     * Filters, sorts, and lays out items. arrange is the principle method of Isotope. It is the default method with jQuery .isotope(). Pass in options to apply filtering and sorting.
     * @param options All options are optional, but itemSelector is recommended. Layout modes have their own separate options.
     */
    arrange(options: Isotope.IsotopeOptions): void;
    /**
     * Removes the Isotope functionality completely. destroy will return the element back to its pre-initialized state.
     */
    destroy(): void;
    /**
     * Returns an array of filtered item elements in current sorted order.
     */
    getFilteredItemElements(): Element[];
    /**
     * Returns an array of all item elements in the Isotope instance.
     */
    getItemElements(): Element[];
    /**
     * Hide items.
     * @param elements Element, jQuery Object, NodeList, or Array of Elements
     */
    hideItemElements(elements: Isotope.Elements): void;
    /**
     * Appends elements into container element, adds elements as items, and arranges items with filtering and sorting.
     * @param elements Element, jQuery Object, NodeList, or Array of Elements
     */
    insert(elements: Isotope.Elements): void;
    /**
     * Lays out all item elements. layout is useful when an item has changed size, and all items need to be laid out again. layout does not apply filtering or sorting.
     */
    layout(): void;
    /**
     * Lays out specified items.
     * @param elements Array of Isotope.Items
     * @param isStill Disables transitions
     */
    layoutItems(elements: HTMLElement[], isStill: boolean): void;
    /**
     * Adds and lays out newly prepended item elements at the beginning of layout.
     * @param elements Element, jQuery Object, NodeList, or Array of Elements
     */
    prepended(elements: Isotope.Elements): void;
    /**
     * Recollects all item elements.
     * For frameworks like Angular and React, reloadItems may be useful to apply changes to the DOM to Isotope.
     */
    reloadItems(): void;
    /**
     * Removes elements from the Isotope instance and DOM.
     * @param elements Element, jQuery Object, NodeList, or Array of Elements
     */
    remove(elements: Isotope.Elements): void;
    /**
     * Reveals hidden items.
     * @param elements Element, jQuery Object, NodeList, or Array of Elements
     */
    revealItemElements(elements: Isotope.Elements): void;
    /**
     * Shuffles items in a random order.
     */
    shuffle(): void;
    /**
     * Stamps elements in the layout. Isotope will lay out item elements around stamped elements.
     * Stamping is only supported by some layout modes: masonry, packery and masonryhorizontal.
     * @param elements Element, jQuery Object, NodeList, or Array of Elements
     */
    stamp(elements: Isotope.Elements): void;
    /**
     * Un-stamps elements in the layout, so that Isotope will no longer layout item elements around them.
     * @param elements Element, jQuery Object, NodeList, or Array of Elements
     */
    unstamp(elements: Isotope.Elements): void;
    /**
     * Updates sort data
     * @param elements Element, jQuery Object, NodeList, or Array of Elements
     */
    updateSortData(elements: Isotope.Elements): void;
}

declare const Isotope: {
    prototype: Isotope,
    new (elementOrSelector: HTMLElement | string, options: Isotope.IsotopeOptions): Isotope;
    /**
     * Get the Isotope instance via its element. Isotope.data() is useful for getting the Isotope instance in JavaScript, after it has been initalized in HTML.
     */
    data(element: HTMLElement | string): Isotope;
};

declare global {
    interface JQuery {
        /**
         * Get the Isotope instance from a jQuery object. Isotope instances are useful to access Isotope properties.
         */
        data(methodName: 'isotope'): Isotope;
        /**
         * Filters, sorts, and lays out items.
         */
        isotope(): JQuery;
        /**
         * Lays out specified items.
         * @param elements Array of Isotope.Items
         * @param isStill Disables transitions
         */
        isotope(methodName: 'layoutItems', elements: HTMLElement[], isStill: boolean): JQuery;
        /**
         * Adds item elements to the Isotope instance. addItems does not lay out items like appended, prepended, or insert.
         * @param elements Element, jQuery Object, NodeList, or Array of Elements
         */
        isotope(methodName: 'addItems', elements: Isotope.Elements): JQuery;
        /**
         * Adds and lays out newly appended item elements to the end of the layout.
         * @param elements Element, jQuery Object, NodeList, or Array of Elements
         */
        isotope(methodName: 'appended', elements: Isotope.Elements): JQuery;
        /**
         * Hide items.
         * @param elements Element, jQuery Object, NodeList, or Array of Elements
         */
        isotope(methodName: 'hideItemElements', elements: Isotope.Elements): JQuery;
        /**
         * Appends elements into container element, adds elements as items, and arranges items with filtering and sorting.
         * @param elements Element, jQuery Object, NodeList, or Array of Elements
         */
        isotope(methodName: 'insert', elements: Isotope.Elements): JQuery;
        /**
         * Adds and lays out newly prepended item elements at the beginning of layout.
         * @param elements Element, jQuery Object, NodeList, or Array of Elements
         */
        isotope(methodName: 'prepended', elements: Isotope.Elements): JQuery;
        /**
         * Removes elements from the Isotope instance and DOM.
         * @param elements Element, jQuery Object, NodeList, or Array of Elements
         */
        isotope(methodName: 'remove', elements: Isotope.Elements): JQuery;
        /**
         * Reveals hidden items.
         * @param elements Element, jQuery Object, NodeList, or Array of Elements
         */
        isotope(methodName: 'revealItemElements', elements: Isotope.Elements): JQuery;
        /**
         * Stamps elements in the layout. Isotope will lay out item elements around stamped elements.
         * Stamping is only supported by some layout modes: masonry, packery and masonryhorizontal.
         * @param elements Element, jQuery Object, NodeList, or Array of Elements
         */
        isotope(methodName: 'stamp', elements: Isotope.Elements): JQuery;
        /**
         * Un-stamps elements in the layout, so that Isotope will no longer layout item elements around them.
         * @param elements Element, jQuery Object, NodeList, or Array of Elements
         */
        isotope(methodName: 'unstamp', elements: Isotope.Elements): JQuery;
        /**
         * Updates sort data
         * @param elements Element, jQuery Object, NodeList, or Array of Elements
         */
        isotope(methodName: 'updateSortData', elements: Isotope.Elements): JQuery;
        /**
         * Removes the Isotope functionality completely. destroy will return the element back to its pre-initialized state.
         */
        isotope(methodName: 'destroy'): void;
        /**
         * Returns an array of filtered item elements in current sorted order.
         */
        isotope(methodName: 'getFilteredItemElements'): Element[];
        /**
         * Returns an array of all item elements in the Isotope instance.
         */
        isotope(methodName: 'getItemElements'): Element[];
        /**
         * Lays out all item elements. layout is useful when an item has changed size, and all items need to be laid out again. layout does not apply filtering or sorting.
         */
        isotope(methodName: 'layout'): JQuery;
        /**
         * Recollects all item elements.
         * For frameworks like Angular and React, reloadItems may be useful to apply changes to the DOM to Isotope.
         */
        isotope(methodName: 'reloadItems'): JQuery;
        /**
         * Shuffles items in a random order.
         */
        isotope(methodName: 'shuffle'): JQuery;
        /**
         * Filters, sorts, and lays out items. Pass in options to apply filtering and sorting.
         * @param options All options are optional, but itemSelector is recommended. Layout modes have their own separate options.
         */
        isotope(options: Isotope.IsotopeOptions): JQuery;
    }
}

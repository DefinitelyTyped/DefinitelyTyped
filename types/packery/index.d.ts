// Type definitions for Packery v1.4.1
// Project: http://packery.metafizzy.co
// Definitions by:  Piraveen Kamalathas from Kilix <https://github.com/piraveen>
//                  Juliën Hanssens <https://github.com/hanssens>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

declare module 'packery' {

    export interface PackeryOptions {
        /**
         * [itemSelector Specifies which child elements to be used as item elements. Setting itemSelector is always recommended. itemSelector is useful to exclude sizing elements]
         * @type {string}
         */
        itemSelector?: string;

        /**
         * [columnWidth The width of a column of a horizontal grid. When set, Packery will align item elements horizontally to this grid]
         * @type {number}
         */
        columnWidth?: number;

        /**
         * [rowHeight Height of a row of a vertical grid. When set, Packery will align item elements vertically to this grid]
         * @type {number}
         */
        rowHeight?: number;

        /**
         * [gutter The space between item elements, both vertically and horizontally]
         * @type {number}
         */
        gutter?: number;

        /**
         * [percentPosition Will set item position in percent values, rather than pixel values. percentPosition works well with percent-width items, as items will not transition their position on resize]
         * @type {boolean}
         */
        percentPosition?: boolean;

        /**
         * [stamp Specifies which elements are stamped within the layout. These are special layout elements which will not be laid out by Packery. Rather, Packery will layout item elements around stamped elements]
         * @type {string}
         */
        stamp?: string;

        /**
         * [isHorizontal Arranges items horizontally instead of vertically]
         * @type {boolean}
         */
        isHorizontal?: boolean;

        /**
         * [isOriginLeft Controls the horizontal flow of the layout. By default, item elements start positioning at the left. Set to false for right-to-left layouts]
         * @type {boolean}
         */
        isOriginLeft?: boolean;

        /**
         * [isOriginTop Controls the vertical flow of the layout. By default, item elements start positioning at the top. Set to false for bottom-up layouts. It’s like Tetris!]
         * @type {boolean}
         */
        isOriginTop?: boolean;

        /**
         * [transitionDuration The time duration of transitions for item elements]
         * @type {string}
         */
        transitionDuration?: string;

        /**
         * [containerStyle CSS styles that are applied to the container element. To disable Packery from setting any CSS to the container element, set containerStyle: null]
         * @type {Object}
         */
        containerStyle?: Object;

        /**
         * [isResizeBound Binds layout to window resizing]
         * @type {boolean}
         */
        isResizeBound?: boolean;

        /**
         * [isInitLayout Enables layout on initialization. Set this to false to disable layout on initialization, so you can use methods or add events before the initial layout]
         * @type {boolean}
         */
        isInitLayout?: boolean;
    }

    export class Packery {
        constructor(element: Element, options?: Object);

        /**
         * [addItems Add item elements to the Packery instance]
         * @param {Element} elements [description]
         */
        addItems(elements: Element): void;

        /**
         * [addItems Add item elements to the Packery instance]
         * @param {NodeList} elements [description]
         */
        addItems(elements: NodeList): void;

        /**
         * [addItems Add item elements to the Packery instance]
         * @param {Array<Element>} elements [description]
         */
        addItems(elements: Array<Element>): void;

        /**
         * [appended Add and lay out newly appended item elements]
         * @param {Element} elements [description]
         */
        appended(elements: Element): void;

        /**
         * [appended Add and lay out newly appended item elements]
         * @param {NodeList} elements [description]
         */
        appended(elements: NodeList): void;

        /**
         * [appended Add and lay out newly appended item elements]
         * @param {Array<Element>} elements [description]
         */
        appended(elements: Array<Element>): void;

        /**
         * [bindDraggabillyEvents Bind Draggabilly events, so that the Packery instance will layout around the dragged element]
         * @param {any} draggie [description]
         */
        bindDraggabillyEvents(draggie: any): void;

        /**
         * [bindResize Binds event listener to window resize, so layout is triggered when the browser window is resized]
         */
        bindResize(): void;

        /**
         * [bindUIDraggableEvents Bind jQuery UI Draggable events, so that the Packery instance will layout around the dragged element]
         * @param {any} elements [jQuery UI]
         */
        bindUIDraggableEvents($element: any): void;

        /**
         * [data Get the Packery instance from an element. Note this method is of Packery, rather than of a Packery instance]
         * @param  {Element} element [description]
         * @return {Packery}         [description]
         */
        data(element: Element): Packery;

        /**
         * [destroy Removes the Packery functionality completely. This will return the element back to its pre-initialized state]
         */
        destroy(): void;

        /**
         * [fit Fit an item element within the layout, and have other item elements laid out around it. This method is useful when expanding an element, and keeping it in its same position.]
         * @param {any}    element [description]
         * @param {number} x       [description]
         * @param {number} y       [description]
         */
        fit(element: Element, x?: number, y?: number): void;

        /**
         * [getItemElements Get an array of elements used as the Packery instance's items.]
         * @return {Array<Element>}      [description]
         */
        getItemElements(): Array<Element>;

        /**
         * [getItem Get a Packery.Item from an element]
         * @param  {Element} element [description]
         * @return {any}             [Packery.item]
         */
        getItem(element: Element): any;

        /**
         * [layout Lay out all item elements.]
         */
        layout(): void;

        /**
         * [layoutItems Lay out specified items]
         * @param {Array<Packery.items>} items [description]
         */
        layoutItems(items: Array<any>): void;

        /**
         * [off Remove an event listener]
         * @param  {string}   eventName [description]
         * @param  {Function} listener  [description]
         * @return {Packery}            [description]
         */
        off(eventName: string, listener: Function): Packery;

        /**
         * [on Add an event listener for certain events]
         * @param  {string}   eventName [description]
         * @param  {Function} listener  [description]
         * @return {Packery}            [description]
         */
        on(eventName: string, listener: Function): Packery;

        /**
         * [once Add an event listener for certain events, to be triggered once]
         * @param {string}   eventName [description]
         * @param {Function} listener  [description]
         */
        once(eventName: string, listener: Function): void;

        /**
         * [prepended Add and lay out newly prepended item elements at the beginning of layout]
         * @param {Element} elements [description]
         */
        prepended(elements: Element): void;

        /**
         * [prepended Add and lay out newly prepended item elements at the beginning of layout]
         * @param {NodeList} elements [description]
         */
        prepended(elements: NodeList): void;

        /**
         * [prepended Add and lay out newly prepended item elements at the beginning of layout]
         * @param {Array<Element>} elements [description]
         */
        prepended(elements: Array<Element>): void;

        /**
         * [reloadItems Recollect all item elements]
         */
        reloadItems(): void;

        /**
         * [remove Remove elements from the Packery instance, then from the DOM]
         * @param {Element} elements [description]
         */
        remove(elements: Element): void;

        /**
         * [remove Remove elements from the Packery instance, then from the DOM]
         * @param {NodeList} elements [description]
         */
        remove(elements: NodeList): void;

        /**
         * [remove Remove elements from the Packery instance, then from the DOM]
         * @param {Array<Element>} elements [description]
         */
        remove(elements: Array<Element>): void;

        /**
         * [stamp Stamp the elements in the layout. Packery will lay out item elements around stamped element]
         * @param {Element} elements [description]
         */
        stamp(elements: Element): void;

        /**
         * [stamp Stamp the elements in the layout. Packery will lay out item elements around stamped element]
         * @param {NodeList} elements [description]
         */
        stamp(elements: NodeList): void;

        /**
         * [stamp Stamp the elements in the layout. Packery will lay out item elements around stamped element]
         * @param {Array<Element>} elements [description]
         */
        stamp(elements: Array<Element>): void;

        /**
         * [unbindResize Un-bind layout to window resize event]
         */
        unbindResize(): void;

        /**
         * [unstamp Un-stamp the elements, so that Packery will no longer layout item elements around them]
         * @param {Element} element [description]
         */
        unstamp(element: Element): void;

        /**
         * [unstamp Un-stamp the elements, so that Packery will no longer layout item elements around them]
         * @param {NodeList} element [description]
         */
        unstamp(element: NodeList): void;

        /**
         * [unstamp Un-stamp the elements, so that Packery will no longer layout item elements around them]
         * @param {Array<Element>} element [description]
         */
        unstamp(element: Array<Element>): void;
    }

}

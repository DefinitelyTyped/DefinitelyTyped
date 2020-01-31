// Type definitions for DragSelect v1.13.1
// Project: https://ThibaultJanBeyer.com/
// Definitions by: IceCreamYou <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace DragSelect;

export declare class DragSelect {
    // These properties store the options passed to the constructor, or the
    // defaults if the relevant options aren't passed. See the docs below.
    selectedClass: string;
    hoverClass: string;
    selectorClass: string;
    selectableClass: string;
    selectables: ArrayLike<HTMLElement | SVGElement> | HTMLElement | SVGElement;
    multiSelectKeys: ReadonlyArray<'ctrlKey' | 'shiftKey' | 'metaKey' | 'altKey'>;
    multiSelectMode: boolean;
    autoScrollSpeed: number;
    selectCallback: (selected: HTMLElement | SVGElement) => void;
    unselectCallback: (selected: HTMLElement | SVGElement) => void;
    onDragStartBegin: (event: MouseEvent | TouchEvent) => void;
    moveStartCallback: (event: MouseEvent | TouchEvent) => void;
    moveCallback: (event: MouseEvent | TouchEvent) => void;
    callback: (selected: Array<HTMLElement | SVGElement>, event: MouseEvent | TouchEvent) => void;
    area: HTMLElement | SVGElement | Document;
    customStyles: boolean;
    zoom: number;
    selector: HTMLElement;

    /**
     * @constructor
     * @param {HTMLElement | SVGElement | Document} [options.area=document] area in which you can drag. If not provided it will be the whole document
     * @param {number} [options.autoScrollSpeed=1] Speed in which the area scrolls while selecting (if available). Unit is pixel per movement. Default = 1
     * @param {number} [options.zoom=1] Zoom scale factor (in case of using CSS style transform: scale() which messes with real positions). Unit scale zoom. Default = 1
     * @param {Function} [options.callback=(selected, event) => {}] a callback function that gets fired when the element is dropped. This callback gets a property which is an array that holds all selected nodes. The second property passed is the event object.
     * @param {boolean} [options.customStyles=false] if set to true, no styles (except for position absolute) will be applied by default
     * @param {string} [options.hoverClass=ds-hover] the class assigned to the mouse hovered items
     * @param {boolean} [options.multiSelectMode=false] Add newly selected elements to the selection instead of replacing them. Default = false
     * @param {Function} [options.onDragMove=()=>{}] It is fired when the user drags. This callback gets the event object. Executed before DragSelect function code ran, after getting the current mouse position.
     * @param {Function} [options.onDragStartBegin=()=>{}] Is fired when the user clicks in the area. This callback gets the event object. Executed *before* DragSelect function code ran.
     * @param {Function} [options.onDragStart=()=>{}] It is fired when the user clicks in the area. This callback gets the event object. Executed after DragSelect function code ran, before the setup of event listeners.
     * @param {Function} [options.onElementSelect=()=>{}] It is fired every time an element is selected. This callback gets a property which is the just selected node
     * @param {Function} [options.onElementUnselect=()=>{}] It is fired every time an element is de-selected. This callback gets a property which is the just de-selected node
     * @param {string} [options.selectableClass=ds-selectable] the class assigned to the elements that can be selected
     * @param {HTMLElement[] | SVGElement[] | HTMLElement | SVGElement} [options.selectables=[]] the elements that can be selected
     * @param {string} [options.selectedClass=ds-selected] the class assigned to the selected items
     * @param {HTMLElement} [options.selector=HTMLElement] the square that will draw the selection
     * @param {string} [options.selectorClass=ds-selector] the class assigned to the square selector helper
     * @param {string[]} [options.multiSelectKeys=['ctrlKey', 'shiftKey', 'metaKey']] An array of keys that allows switching to the multi-select mode (see the @multiSelectMode option). The only possible values are keys that are provided via the event object. So far: <kbd>ctrlKey</kbd>, <kbd>shiftKey</kbd>, <kbd>metaKey</kbd> and <kbd>altKey</kbd>. Provide an empty array `[]` if you want to turn off the functionality.
     */
    constructor(options?: Partial<{
        area: HTMLElement | SVGElement | Document;
        autoScrollSpeed: number;
        callback: (selected: Array<HTMLElement | SVGElement>, event: MouseEvent | TouchEvent) => void;
        customStyles: boolean;
        hoverClass: string;
        multiSelectKeys: ReadonlyArray<'ctrlKey' | 'shiftKey' | 'metaKey' | 'altKey'>;
        multiSelectMode: boolean;
        onDragMove: (event: MouseEvent | TouchEvent) => void;
        onDragStart: (event: MouseEvent | TouchEvent) => void;
        onDragStartBegin: (event: MouseEvent | TouchEvent) => void;
        onElementSelect: (selected: HTMLElement | SVGElement) => void;
        onElementUnselect: (selected: HTMLElement | SVGElement) => void;
        selectableClass: string;
        selectables: ArrayLike<HTMLElement | SVGElement> | HTMLElement | SVGElement;
        selectedClass: string;
        selector: HTMLElement;
        selectorClass: string;
        zoom: number;
    }>);
    /**
     * Starts the functionality. Automatically triggered when created.
     * Also, reset the functionality after a teardown
     */
    start(): void;
    /**
     * Checks if any selectable element is inside selection.
     * @param {boolean} [force] forces through. Handles first clicks and accessibility. Here is user is clicking directly onto some element at start, (contrary to later hovers) we can assume that he really wants to select/deselect that item.
     * @return {boolean}
     */
    checkIfInsideSelection(force?: boolean): boolean;
    /**
     * Adds an item to the selection.
     * @param {(HTMLElement|SVGElement)} item selected item.
     * @return {(HTMLElement|SVGElement|false)} item
     */
    select(item: HTMLElement | SVGElement): HTMLElement | SVGElement | false;
    /**
     * Removes an item from the selection.
     * @param {(HTMLElement|SVGElement)} item selected item.
     * @return {(HTMLElement|SVGElement|false)} item
     */
    unselect(item: HTMLElement | SVGElement): HTMLElement | SVGElement | false;
    /**
     * Adds/Removes an item to the selection.
     * If it is already selected = remove, if not = add.
     * @param {(HTMLElement|SVGElement)} item – item to select.
     * @return {(HTMLElement|SVGElement)} item
     */
    toggle(item: HTMLElement | SVGElement): HTMLElement | SVGElement;
    /**
     * Check if the selector is near an edge of the area
     * @param {Object} [event] event object.
     * @param {(HTMLElement|SVGElement)} area the area.
     * @return {('top'|'bottom'|'left'|'right'|false)}
     */
    isCursorNearEdge(
        event: MouseEvent | TouchEvent | undefined,
        area: HTMLElement | SVGElement
    ): false | "left" | "right" | "top" | "bottom";
    /**
     * Unbind functions i.e. when mouse click is released
     * @param {Object} [event] - The event object.
     * @param {boolean} [withCallback] - whether or not the callback should be called
     */
    reset(event?: MouseEvent | TouchEvent, withCallback?: boolean): boolean;
    /**
     * Function break: used in callbacks to disable the execution of the upcoming code at the specific moment
     * In contrary to stop():
     * - Event listeners, callback calls and calculation will continue working
     * - Selector won’t display and will not select
     */
    break(): void;
    /**
     * Complete function teardown
     * Will teardown/stop the whole functionality
     * @param {boolean} [remove=true] - if elements should be removed.
     * @param {boolean} [fromSelection=true] - if elements should also be added/removed to the selection.
     * @param {boolean} [withCallback] - if elements should also be added/removed to the selection.
     */
    stop(remove?: boolean, fromSelection?: boolean, withCallback?: boolean): void;
    /**
     * Returns the current selected nodes
     * @return {Array.<(HTMLElement|SVGElement)>}
     */
    getSelection(): Array<HTMLElement | SVGElement>;
    /**
     * Returns cursor x, y position based on event object
     * Will be relative to an area including the scroll unless advised otherwise
     * @param {Object} [event]
     * @param {(HTMLElement|SVGElement|false)} [_area] containing area / this.area if === undefined / document if === false
     * @param {boolean} [ignoreScroll] if true, the scroll will be ignored
     * @return {{x:number,y:number}} cursor { x/y }
     */
    getCursorPos(event?: MouseEvent | TouchEvent, _area?: HTMLElement | SVGElement | false, ignoreScroll?: boolean): {
        x: number;
        y: number;
    };
    /**
     * Adds several items to the selection list
     * also adds the specific classes and take into account all calculations.
     * Does not clear the selection, in contrary to .setSelection
     * Can add multiple nodes at once, in contrary to .select
     * @param {Array.<(HTMLElement|SVGElement)>} _nodes one or multiple nodes
     * @param {boolean} [triggerCallback] - if callback should be called
     * @param {boolean} [dontAddToSelectables] - if element should not be added to the list of selectable nodes
     * @return {Array.<(HTMLElement|SVGElement)>} all selected nodes
     */
    addSelection(
        _nodes: ArrayLike<HTMLElement | SVGElement>,
        triggerCallback?: boolean,
        dontAddToSelectables?: boolean
    ): Array<HTMLElement | SVGElement>;
    /**
     * Removes specific nodes from the selection
     * Multiple nodes can be given at once, in contrary to unselect
     * @param {Array.<(HTMLElement|SVGElement)>} _nodes one or multiple nodes
     * @param {boolean} [triggerCallback] - if callback should be called
     * @param {boolean} [removeFromSelectables] - if element should be removed from the list of selectable nodes
     * @return {Array} all selected nodes
     */
    removeSelection(
        _nodes: ArrayLike<HTMLElement | SVGElement>,
        triggerCallback?: boolean,
        removeFromSelectables?: boolean
    ): Array<HTMLElement | SVGElement>;
    /**
     * Toggles specific nodes from the selection:
     * If element is not in selection it will be added, if it is already selected, it will be removed.
     * Multiple nodes can be given at once.
     * @param {Array.<(HTMLElement|SVGElement)>} _nodes one or multiple nodes
     * @param {boolean} [triggerCallback] - if callback should be called
     * @param {boolean} [special] - if true, it also removes selected elements from possible selectable nodes & don’t add them to selectables if they are not
     * @return {Array} all selected nodes
     */
    toggleSelection(
        _nodes: ArrayLike<HTMLElement | SVGElement>,
        triggerCallback?: boolean,
        special?: boolean
    ): Array<HTMLElement | SVGElement>;
    /**
     * Sets the current selected nodes and optionally run the callback
     * By default, adds new elements also to the list of selectables
     * @param {Array.<(HTMLElement|SVGElement)>} _nodes – dom nodes
     * @param {boolean} [triggerCallback] - if callback should be called
     * @param {boolean} [dontAddToSelectables] - if element should not be added to the list of selectable nodes
     * @return {Array.<(HTMLElement|SVGElement)>}
     */
    setSelection(
        _nodes: ArrayLike<HTMLElement | SVGElement>,
        triggerCallback?: boolean,
        dontAddToSelectables?: boolean
    ): Array<HTMLElement | SVGElement>;
    /**
     * Unselect / Deselect all current selected Nodes
     * @param {boolean} [triggerCallback] - if callback should be called
     * @return {Array.<(HTMLElement|SVGElement)>} this.selected, should be empty
     */
    clearSelection(triggerCallback?: boolean): Array<HTMLElement | SVGElement>;
    /**
     * Add nodes that can be selected.
     * The algorithm makes sure that no node is added twice
     * @param {Array.<(HTMLElement|SVGElement)>} _nodes dom nodes
     * @param {boolean} [addToSelection] if elements should also be added to current selection
     * @return {Array.<(HTMLElement|SVGElement)>} _nodes the added node(s)
     */
    addSelectables(_nodes: ArrayLike<HTMLElement | SVGElement>, addToSelection?: boolean): Array<HTMLElement | SVGElement>;
    /**
     * Gets all nodes that can be selected
     * @return {Array.<(HTMLElement|SVGElement)>} this.selectables
     */
    getSelectables(): Array<HTMLElement | SVGElement>;
    /**
     * Sets all elements that can be selected.
     * Removes all current selectables (& their respective classes).
     * Adds the new set to the selectables set, thus replacing the original set.
     * @param {Array.<(HTMLElement|SVGElement)>} nodes – dom nodes
     * @param {boolean} [removeFromSelection] if elements should also be removed from current selection
     * @param {boolean} [addToSelection] if elements should also be added to current selection
     * @return {Array.<(HTMLElement|SVGElement)>} nodes – the added node(s)
     */
    setSelectables(
        nodes: ArrayLike<HTMLElement | SVGElement>,
        removeFromSelection?: boolean,
        addToSelection?: boolean
    ): Array<HTMLElement | SVGElement>;
    /**
     * Remove nodes from the nodes that can be selected.
     * @param {Array.<(HTMLElement|SVGElement)>} _nodes – dom nodes
     * @param {boolean} [removeFromSelection] if elements should also be removed from current selection
     * @return {Array.<(HTMLElement|SVGElement)>} _nodes – the removed node(s)
     */
    removeSelectables(
        _nodes: ArrayLike<HTMLElement | SVGElement>,
        removeFromSelection?: boolean
    ): Array<HTMLElement | SVGElement>;
    /**
     * Returns the starting/initial position of the cursor/selector
     * @return {{x:number,y:number}}
     */
    getInitialCursorPosition(): {
        x: number;
        y: number;
    };
    /**
     * Returns the last seen position of the cursor/selector
     * @return {{x:number,y:number}}
     */
    getCurrentCursorPosition(): {
        x: number;
        y: number;
    };
    /**
     * Returns the previous position of the cursor/selector
     * @return {{x:number,y:number}}
     */
    getPreviousCursorPosition(): {
        x: number;
        y: number;
    };
    /**
     * Returns the cursor position difference between start and now
     * If usePreviousCursorDifference is passed,
     * it will output the cursor position difference between the previous selection and now
     * @param {boolean} [usePreviousCursorDifference]
     * @return {{x:number,y:number}}
     */
    getCursorPositionDifference(usePreviousCursorDifference?: boolean): {
        x: number;
        y: number;
    };
    /**
     * Returns the current x, y scroll value of a container
     * If container has no scroll it will return 0
     * @param {(HTMLElement|SVGElement)} [area]
     * @return {{x:number,y:number}} scroll X/Y
     */
    getScroll(area?: HTMLElement | SVGElement): {
        y: number;
        x: number;
    };
    /**
     * Returns the top/left/bottom/right/width/height
     * values of a node. If Area is document then everything
     * except the sizes will be nulled.
     * @param {(HTMLElement|SVGElement|any)} area
     * @return {{top:number,left:number,bottom:number,right:number,width:number,height:number}}
     */
    getAreaRect(area: HTMLElement | SVGElement | Document): {
        top: number;
        left: number;
        bottom: number;
        right: number;
        width: number;
        height: number;
    };
}

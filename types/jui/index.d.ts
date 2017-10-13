// Type definitions for jui 2.0
// Project: https://github.com/juijs/jui#readme
// Definitions by: Jin-Ho Park <https://github.com/easylogic>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { UIEvent } from 'jui-core';

export interface UIAccordion extends UIEvent {
    (selector: any, options?: {
        tpl?: any,
        event?: any,
        /**
         * @cfg {Integer} [index=null]
         * Sets an enabled node
         */
        index?: number,

        /**
         * @cfg {Boolean} [autoFold=false]
         * When you click on a node, the node folding
         */
        autoFold?: boolean,

        /**
         * @cfg {Boolean} [multipanel=false]
         *
         */
        multipanel?: boolean
    }): this;

    /**
     * @method activeIndex
     * Gets the index of the currently enabled node
     *
     * @return {Integer} Index
     */
    activeIndex(): number;
}

export interface UIAutoComplete {
    (selector: any, options?: {
        tpl?: any,
        event?: any,
        /**
         * @cfg {String/DOMElement} [target=null]
         * Designates a target selector when an autofill route is not a target
         */
        target?: any,

        /**
         * @cfg {Array} words
         * Designates words subject to autofill
         */
        words?: string[]
    }): this;

    /**
     * @method update
     * Updates words subject to autofill
     *
     * @param {Array} words
     *
     */
    update(newWords: string[]): void;

    /**
     * @method close
     * Close the active drop-down
     *
     */
    close(): void;

    /**
     * @method list
     * Gets filtered words subject to autofill
     *
     * @return {Array} words
     */
    list(): string[];
}

export interface UIColorPicker {
    (selector: any, options?: {
        tpl?: any,
        event?: any,
        type?: string,
        color?: string
    }): this;

    getColor(type: string): string | {};

    setColor(value: string | {}): void;
}

export interface UICombo {
    (selector: any, options?: {
        tpl?: any,
        event?: any,
        /**
         * @cfg {Integer} [index=0]
         * Determines an initial selection button with a specified index
         */
        index?: number,

        /**
         * @cfg {String} [value=0]
         * Determines an initial selection button with a specified value
         */
        value?: string,

        /**
         * @cfg {Integer} [width=0]
         * Determines the horizontal size of a combo box
         */
        width?: number,

        /**
         * @cfg {Integer} [height=100]
         * Determines an initial selection button with a specified value
         */
        height?: number,

        /**
         * @cfg {Boolean} [keydown=false]
         * It is possible to select a node using the keyboard
         */
        keydown?: boolean,

        /**
         * @cfg {"top"/"bottom"} [position="bottom"]
         * It is possible to determine an initial selection button with a specified value
         */
        position?: "top" | "bottom",

        /**
         * @cfg {Boolean} [flex=true]
         * Drop-down menu is varied by changing the width function
         */
        flex?: boolean
    }): this;

    /**
     * @method setIndex
     * Selects a button of a specified index
     *
     * @param {Number} index
     */
    setIndex(index: number): void;

    /**
     * @method setValue
     * Selects a button having a specified value
     *
     * @param {Mixed} value
     */
    setValue(value: any): void;

    /**
     * @method getData
     * Gets the data of the button currently selected
     *
     * @return {Object}
     */
    getData(): {};

    /**
     * @method getValue
     * Gets the value of the button currently selected
     *
     * @return {Mixed}
     */
    getValue(): any;

    /**
     * @method getText
     * Gets the markup text of the button currently selected
     *
     * @return {String}
     */
    getText(): string;

    /**
     * @method open
     * Shows the element list of a combo box
     */
    open(e: any): void;

    /**
     * @method fold
     * Hides the element list of a combo box
     */
    fold(): void;

    /**
     * @method reload
     * Re-defines a combo box
     */
    reload(): void;
}

export interface UIDatePicker {
    (selector: any, options?: {
        tpl?: any,
        event?: any,
        /**
         * @cfg {"daily"/"monthly"/"yearly"} [type="daily"]
         * Determines the type of a calendar
         */
        type?: "daily" | "monthly" | "yearly",

        /**
         * @cfg {String} [titleFormat="yyyy.MM"]
         * Title format of a calendar
         */
        titleFormat?: string,

        /**
         * @cfg {String} [format="yyyy-MM-dd"]
         * Format of the date handed over when selecting a specific date
         */
        format?: string,

        /**
         * @cfg {Date} [date="now"]
         * Selects a specific date as a basic
         */
        date?: "now" | Date,

        /**
         * @cfg {Date} [minDate="null"]
         * Selects a specific minimum date
         */
        minDate?: Date,

        /**
         * @cfg {Date} [maxDate="null"]
         * Selects a specific maximum date
         */
        maxDate?: Date
    }): this;

    /**
     * @method page
     * Outputs a calendar that fits the year/month entered
     *
     * @param {Integer} year
     * @param {Integer} month
     */
    page(y: number, m: number): void;

    /**
     * @method prev
     * Outputs a calendar that fits the previous year/month
     *
     */
    prev(e: any, moveYear?: boolean): void;

    /**
     * @method next
     * Outputs a calendar that fits the next year/month
     *
     */
    next(e: any, moveYear?: boolean): void;

    /**
     * @method select
     * Selects today if there is no value, or selects a date applicable to a timestamp or year/month/date
     *
     * @param {"year"/"month"/"date"/"timestamp"/"Date"}
     */
    select(...args: any[]): void;

    /**
     * @method addTime
     * Selects a date corresponding to the time added to the currently selected date
     *
     * @param {"Integer"/"Date"} time Timestamp or Date
     */
    addTime(time: number | Date): void;

    /**
     * @method getDate
     * Gets the value of the date currently selected
     *
     * @return {Date} Date object
     */
    getDate(): Date;

    /**
     * @method getTime
     * Gets the timestamp value of the date currently selected
     *
     * @return {Integer} Timestamp
     */
    getTime(): number;

    /**
     * @method getFormat
     * Gets a date string that fits the format entered
     *
     * @return {String} format Formatted date string
     */
    getFormat(format: string): string;

    /**
     * @method reload
     * Reloads the datepicker
     */
    reload(): void;
}

export interface UIDropdown {
    (selector: any, options?: {
        tpl?: any,
        event?: any,
        /**
         * @cfg {Boolean} [close=true]
         * Closes the Auto when clicking on the dropdown list
         */
        close?: boolean,

        /**
         * @cfg {Boolean} [keydown=false]
         * It is possible to choose anything on the dropdown list with the arrow keys on the keyboard
         */
        keydown?: boolean,

        /**
         * @cfg {Integer} [left=0]
         * Sets the X coordinate of the dropdown list
         */
        left?: number,

        /**
         * @cfg {Integer} [top=0]
         * Sets the Y coordinate of the dropdown list
         */
        top?: number,

        /**
         * @cfg {Integer} [width=0]
         * Determines the horizontal size of a dropdown list
         */
        width?: number,

        /**
         * @cfg {Integer} [height=0]
         * Determines the vertical size of a dropdown list
         */
        height?: number,

        /**
         * @cfg {Array} nodes
         * Sets a dropdown list to data rather than markup
         */
        nodes?: any[]
    }): this;

    /**
     * @method update
     * Changes the dropdown list
     *
     * @param {Array} nodes Dropdown list
     */
    update(nodes: any[]): void;

    /**
     * @method hide
     * Hides the dropdown
     */
    hide(): void;

    /**
     * @method show
     * Shows a dropdown at the specified coordinates
     *
     * @param {Integer} x
     * @param {Integer} y
     */
    show(x: number, y: number): void;

    /**
     * @method move
     * Moves a dropdown to the specified coordinates
     *
     * @param {Integer} x
     * @param {Integer} y
     */
    move(x: number, y: number): void;

    /**
     * @method reload
     * Reloads the dropdown list
     */
    reload(): void;
}

export interface UIModal {
    (selector: any, options?: {
        tpl?: any,
        event?: any,
        /**
         * @cfg {"black"/"gray"} [color="black"]
         * Determines the color of a modal
         */
        color?: "black" | "gray",

        /**
         * @cfg {Float} [opacity=0.4]
         * Sets the transparency of a modal
         */
        opacity?: number,

        /**
         * @cfg {String/DOMElement} [target="body"]
         * Sets a selector on which a modal is shown
         */
        target?: string | any,

        /**
         * @cfg {Integer} [index=0]
         * Determines the sequence (index) of a modal
         */
        index?: number,

        /**
         * @cfg {Boolean} [clone=false]
         * Copies an existing modal and shows it
         */
        clone?: boolean,

        /**
         * @cfg {Boolean} [autoHide=true]
         * Automatically hides a modal when clicking on it
         */
        autoHide?: boolean
    }): this;

    /**
     * @method hide
     * Hides a modal
     */
    hide(): void;

    /**
     * @method show
     * Shows a modal
     */
    show(): void;

    /**
     * @method resize
     * Re-adjust the location of a modal
     */
    resize(): void;
}

export interface UINotify {
    (selector: any, options?: {
        tpl?: any,
        event?: any,
        /**
         * @cfg {"top"/"top-lefet"/"top-right"/"bottom"/"bottom-left"/"bottom-right"} [position="top-right"]
         * Designates the location where a notice message is added
         */
        position?: "top" | "top-lefet" | "top-right" | "bottom" | "bottom-left" | "bottom-right",

        /**
         * @cfg {Integer} [padding=12]
         * Determines the margin value of a notice message (the margin value may be in object form rather than a numeric value)
         */
        padding?: number,

        /**
         * @cfg {Integer} [distance=5]
         * Determines each margin value when there are multiple notice messages
         */
        distance?: number,

        /**
         * @cfg {Integer} [timeout=3000]
         * Determines the duration for which a notice message is displayed (the message does not disappear when the value is 0)
         */
        timeout?: number,

        /**
         * @cfg {Integer} [showDuration=500]
         * Determines the duration of an effect when a notice message is shown
         */
        showDuration?: number,

        /**
         * @cfg {Integer} [hideDuration=500]
         * Determines the duration of an effect when a notice message disappears
         */
        hideDuration?: number,

        /**
         * @cfg {String} [showEasing="swing"]
         * Determines an effect when a notice message is shown (see CSS3 specifications)
         */
        showEasing?: string,

        /**
         * @cfg {String} [hideEasing="linear"]
         * Determines an effect when a notice message disappears (see CSS3 specifications)
         */
        hideEasing?: string
    }): this;

    /**
     * @method add
     * Adds a notice message. The value passed is the data object shown by the notice template
     *
     * @param {Object} data
     * @param {Integer} timeout
     */
    add(data: {}, timeout: number): void;

    /**
     * @method reset
     * Removes all notice messages that are enabled
     */
    reset(): void;
}

export interface UIPaging {
    (selector: any, options?: {
        tpl?: any,
        event?: any,
        /**
         * @cfg {Integer} [count=0]
         * Total number of data records subject to paging)
         */
        count?: number,

        /**
         * @cfg {Integer} [pageCount=10]
         * Number of data records per page
         */
        pageCount?: number,

        /**
         * @cfg {Integer} [screenCount=5]
         * Number of pages shown on the paging screen
         */
        screenCount?: number
    }): this;

    /**
     * @method reload
     * Reloads the number of specified data records, or reloads the initially configured number of data records if there is no parameter
     *
     * @param {Integer} count Data total count
     */
    reload(count: number): void;

    /**
     * @method page
     * Changes to a specified page number, and gets the currently enabled page number if there is no parameter
     *
     * @param {Integer} pNo Page number
     */
    page(pNo: number): void;

    /**
     * @method next
     * Changes to the next page
     */
    next(): void;

    /**
     * @method prev
     * Changes to the previous page
     */
    prev(): void;

    /**
     * @method first
     * Changes to the first page
     */
    first(): void;

    /**
     * @method last
     * Changes to the last page
     */
    last(): void;
}

export interface UIProgress {
    (selector: any, options?: {
        tpl?: any,
        event?: any,
        type?: "simple" | "flat",       // simple or flat
        orient?: "horizontal" | "vertical", // or vertical,
        min?: number,
        max?: number,
        value?: number,
        striped?: boolean,   // or true
        animated?: boolean     // or true
    }): this;

    setAnimated(isAnimated: boolean): void;
    setStriped(isStriped: boolean): void;
    setValue(v: number): void;
    getValue(): number;
}

export interface UIProperty {
    (selector: any, options?: {
        tpl?: any,
        event?: any,
        sort?: string, // name, group, type
        viewport?: string,
        items?: any[]
    }): this;

    loadItems(newItems: any[]): void;

    addItem(item: {} | any[]): void;

    // remove item by key or title
    removeItem(item: {}): void;

    /**
     * @method getGroupList
     *
     * get a list of  group's title.
     */
    getGroupList(): any[];

    /**
     * @method collapsed
     *
     * collapse group's children
     *
     * @param {String} id
     */
    collapsed(id: string): void;

    /**
     * @method expanded
     *
     * expand group's children
     *
     * @param {String} id
     */
    expanded(id: string): void;

    /**
     * @method getValue
     *
     * get a list of property's value
     *
     * @param {String} [key=null]  if key is null, value is all properties.
     */
    getValue(key?: string): {} | any[];

    getDefaultValue(): any[];

    initValue(obj: {}): void;

    /**
     * @method getValue
     *
     * set a list of property's value
     *
     * @param {Object} obj
     */
    setValue(obj: {}): void;

    findRender(key: string): any;
    findItem(key: string): any;
    updateValue(key: string, value: any): void;
    getAllValue(key: string): any;
    refreshValue($dom: any, newValue: any): void;
}

export interface UISelect {
    (selector: any, options?: {
        tpl?: any,
        event?: any,
        items?: any[],
        placeholder?: string,
        align?: 'left' | 'right',
        valign?: 'top' | 'bottom',
        multi?: boolean
    }): this;

    setValue(value: any | any[]): void;
    getValue(): any | any[];
    setSelectedIndex(index: number): void;
    getSelectedIndex(): number;
    update(data: any[]): void;
}

export interface UISlider {
    (selector: any, options?: {
        tpl?: any,
        event?: any,
        type?: "single" | "double", // or double
        orient?: "horizontal" | "vertical", // or vertical,
        min?: number,
        max?: number,
        step?: number,
        from?: number,
        to?: number,
        tooltip?: boolean,
        format?: string,
        progress?: boolean
    }): this;

    /**
     * @method setFromValue
     * set FromHandle's value
     *
     * @param {Number}
     */
    setFromValue(value: number): void;

    /**
     * @method setToValue
     * set ToHandle's value
     *
     * @param {Number}
     */
    setToValue(value: number): void;

    /**
     * @method getFromValue
     * get FromHandle's value
     *
     * @return {Number} value
     */
    getFromValue(): number;

    /**
     * @method getToValue
     * get ToHandle's value
     *
     * @return {Number} value
     */
    getToValue(): number;
}

export interface UISplitter {
    (selector: any, options?: {
        tpl?: any,
        event?: any,
        /**
         * @cfg {String} [splitterClass='ui-splitter']
         * set splitter's class for design
         */
        splitterClass?: string,

        /**
         * @cfg {String} [hideClass='hide']
         * set splitter's hide class for design
         */
        hideClass?: string,

        /**
         * @cfg {Number} [barSize=4]
         * set splitter's bar size
         */
        barSize?: number,

        /**
         * @cfg {Object} [barStyle={}]
         * set custom splitter bar style
         */
        barStyle?: {},

        /**
         * @cfg {"vertical"/"horizontal"} [direction='vertical']
         * set bar's direction
         */
        direction?: 'vertical' | 'horizontal',

        /**
         * @cfg {String/Number} [initSize='50%']
         * set first panel's default width or height
         */
        initSize?: string | number,

        /**
         * @cfg {Number/Array} [minSize=30]
         * set panel's minimum width or height
         *
         * if minSize is number , minSize is conver to array
         *
         * minSize[0] is first panel's minimum size
         * minSize[1] is second panel's minimum size
         *
         */
        minSize?: number | number[],

        /**
         * @cfg {String} [items=[]]
         *
         * set items  to placed in vertical or horizontal
         *
         * support max two times
         *
         */
        items?: any[],

        /**
         * @cfg {Boolean} [fixed=false]
         *
         * if fixed is true, panels can not resize.
         *
         */
        fixed?: boolean
    }): this;

    setDirection(d: 'horizontal' | 'vertical'): void;

    setInitSize(size: number): void;
    setHide(index: number): void;
    setShow(index: number): void;
    toggle(index: number): void;
}

export interface UISwitch {
    (selector: any, options?: {
        tpl?: any,
        event?: any,
        checked?: boolean,
        toggleEvent?: string
    }): this;

    getValue(): boolean;

    setValue(value: boolean): void;

    toggle(): void;
}

export interface UITab {
    (selector: any, options?: {
        tpl?: any,
        event?: any,
        /**
         * @cfg {String/DOMElement} [target=""]
         * Determines a selector in the area to become the content of a tab
         */
        target?: string | any,

        /**
         * @cfg {Integer} [index=0]
         * Sets an enabled tab
         */
        index?: number,

        /**
         * @cfg {Boolean} [drag=false]
         * Changes the tab location through dragging
         */
        drag?: boolean,

        /**
         * @cfg {Array} nodes
         * Sets a tab list to data rather than markup
         */
        nodes?: any[]
    }): this;
    /**
     * @method update
     * Changes the tab list
     *
     * @param {Array} nodes
     */
    update(nodes: any[]): void;

    /**
     * @method insert
     * Adds a tab at a specified index
     *
     * @param {Integer} index
     * @param {Object} node
     */
    insert(index: number, node: {}): void;

    /**
     * @method append
     * Adds a tab to the last node
     *
     * @param {Object} node
     */
    append(node: {}): void;

    /**
     * @method prepend
     * Adds a tab to the first node
     *
     * @param {Object} node
     */
    prepend(node: {}): void;

    /**
     * @method remove
     * Removes a tab at a specified index
     *
     * @param {Integer} index
     */
    remove(index: number): void;

    /**
     * @method move
     * Changes a specified tab to a tab at a target index
     *
     * @param {Integer} index
     * @param {Integer} targetIndex
     */
    move(index: number, targetIndex: number): void;

    /**
     * @method show
     * Enables the tab at a specified index
     *
     * @param {Integer} index
     */
    show(index: number): void;

    /**
     * @method enable
     * Enables the tab at a specified index
     *
     * @param {Integer} index
     */
    enable(index: number): void;

    /**
     * @method disable
     * Disables the tab at a specified index
     *
     * @param {Integer} index
     */
    disable(index: number): void;

    /**
     * @method activeIndex
     * Gets the index of the currently enabled tab
     *
     * @return {Integer}
     */
    activeIndex(): number;
}

export interface UITooltip {
    (selector: any, options?: {
        tpl?: any,
        event?: any,
        /**
         * @cfg {String} [color="black"]
         * Determines the color of a tooltip
         */
        color?: string,

        /**
         * @cfg {"top"/"bottom"/"left"/"right"} [position="top"]
         * Determines the location where a tooltip is shown
         */
        position?: "top" | "bottom" | "left" | "right",

        /**
         * @cfg {Integer} [width=150]
         * Determines the horizontal size of a tooltip
         */
        width?: number,

        /**
         * @cfg {"left"/"right"/"center"} [align="left"]
         * Determines the alignment state inside a tooltip
         */
        align?: "left" | "right" | "center",

        /**
         * @cfg {Integer} [delay=0]
         * Determines the event time when a tooltip is shown
         */
        delay?: number,

        /**
         * @cfg {String} [showType="mouseover"]
         * Determines the type of event that triggers a tooltip
         */
        showType?: string,

        /**
         * @cfg {String} [hideType="mouseout"]
         * Determines the type of event that hides a tooltip
         */
        hideType?: string,

        /**
         * @cfg {String} [title=""]
         * Sets the content of a tooltip (referring to the title properties in markup)
         */
        title?: string,
    }): this;

    /**
     * @method update
     * Changes the content of a tooltip
     *
     * @param {String} text
     */
    update(newTitle: string): void;
}

export interface UITreeNode {
    /** @property {Array} [data=null] Data of a specifiednode */
    data?: any[];

    /** @property {HTMLElement} [element=null] LI element of a specified node */
    element?: any;

    /** @property {Integer} [index=null] Index of a specified node */
    index?: number;

    /** @property {Integer} [nodenum=null] Unique number of a specifiede node at the current depth */
    nodenum?: number;

    /** @property {ui.tree.node} [parent=null] Variable that refers to the parent of the current node */
    parent?: UITreeNode;

    /** @property {Array} [children=null] List of child nodes of a specified node */
    children?: UITreeNode[];

    /** @property {Integer} [depth=0] Depth of a specified node */
    depth?: number;

    /** @property {String} [type='open'] State value that indicates whether a child node is shown or hidden */
    type?: string;
}

export interface UITreeBase {
    appendNode(...args: any[]): UITreeNode;
    insertNode(index: string, data: any): UITreeNode;
    updateNode(index: string, data: any): UITreeNode;
    removeNode(index: string): void;
    removeNodes(): void;
    openNode(index: string): void;
    foldNode(index: string): void;
    openNodeAll(index: string): void;
    foldNodeAll(index: string): void;

    moveNode(index: string, targetIndex: number): void;

    getNode(index: string): UITreeNode;

    getNodeAll(index: string): UITreeNode[];

    getNodeParent(index: string): UITreeNode;

    getRoot(): UITreeNode;
}

export interface UITree {
    (selector: any, options?: {
        tpl?: any,
        event?: any,
        /**
         * @cfg {NodeObject} [root=null]
         * Adds a root node (required).
         */
        root?: UITreeNode,

        /**
         * @cfg {Boolean} [rootHide=false]
         * Hides a root node.
         */
        rootHide?: boolean,

        /**
         * @cfg {Boolean} [rootFold=false]
         * Folds up a root node.
         */
        rootFold?: boolean,

        /**
         * @cfg {Boolean} [drag=false]
         * It is possible to drag the movement of a node.
         */
        drag?: boolean,

        /**
         * @cfg {Boolean} [dragChild=true]
         * It is possible to drag the node movement but the node is not changed to a child node of the target node.
         */
        dragChild?: boolean
    }): this;

    /**
     * @method update
     * Changes to the node at a specified index.
     *
     * @param {String} index
     * @param {Array} data
     */
    update(index: string, data: any[]): void;

    /**
     * @method append
     * Adds to a child node at a specified index.
     *
     * @param {Array/String} param1 index or data
     * @param {Array} param2 null or data
     */
    append(...args: any[]): void;

    /**
     * @method insert
     * Adds a node at a specified index.
     *
     * @param {String} index
     * @param {Array} data
     */
    insert(index: string, data: any[]): void;

    /**
     * @method select
     * Adds a node at a specified index.
     *
     * @param {String} index
     * @return {NodeObject} node
     */
    select(index: string): UITreeNode;

    /**
     * @method unselect
     * Removes the 'active' class from a selected node and gets an instance of the specified node.
     */
    unselect(): void;

    /**
     * @method remove
     * Deletes a node at a specified index.
     *
     * @param {String} index
     */
    remove(index: string): void;
    /**
     * @method reset
     * Deletes all child nodes except for a root.
     */
    reset(): void;

    /**
     * @method move
     * Moves a node at a specified index to the target index.
     *
     * @param {String} index
     * @param {String} targetIndex
     */
    move(index: string, targetIndex: string): void;
    /**
     * @method open
     * Shows a child node at a specified index.
     *
     * @param {String} index
     */
    open(index: string, e: any): void;

    /**
     * @method fold
     * Folds up a child node at a specified index.
     *
     * @param {String} index
     */
    fold(index: string, e: any): void;
    /**
     * @method openAll
     * Shows all child nodes at a specified index.
     *
     * @param {String} index
     */
    openAll(index: string): void;

    /**
     * @method foldAll
     * Folds up all child nodes at a specified index.
     *
     * @param {String} index
     */
    foldAll(index: string): void;

    /**
     * @method list
     * Return all nodes of the root.
     *
     * @return {Array} nodes
     */
    list(): UITreeNode[];

    /**
     * @method listAll
     * Returns all child nodes.
     *
     * @return {Array} nodes
     */
    listAll(): UITreeNode[];

    /**
     * @method listParent
     * Returns all parent nodes at a specified index.
     *
     * @param {String} index
     * @return {Array} nodes
     */
    listParents(index: string): UITreeNode[];

    /**
     * @method get
     * Gets a node at a specified index
     *
     * @param {String} index
     * @return {NodeObject} node
     */
    get(index: string): UITreeNode;

    /**
     * @method getAll
     * Gets all nodes at a specified index including child nodes.
     *
     * @param {String} index
     * @return {Array} nodes
     */
    getAll(index: string): UITreeNode[];

    /**
     * @method activeIndex
     * Gets the index of a node that is activated in an active state.
     *
     * @return {Integer} index
     */
    activeIndex(): number;
}

export interface UIWindow {
    (selector: any, options?: {
        tpl?: any,
        event?: any,
        /**
         * @cfg {Integer} [width=400]
         * Determines the horizontal size of a window
         */
        width?: number,

        /**
         * @cfg {Integer} [height=300]
         * Determines the height of a window
         */
        height?: number,

        /**
         * @cfg {String/Integer} [left="auto"]
         * Determines the X coordinate of a window
         */
        left?: string | number,

        /**
         * @cfg {String/Integer} [top="auto"]
         * Determines the Y coordinate of a window
         */
        top?: string | number,

        /**
         * @cfg {String/Integer} [right="auto"]
         * Determines the X coordinate based on the right side of a window
         */
        right?: string | number,

        /**
         * @cfg {String/Integer} [bottom="auto"]
         * Determines the Y coordinate based on the bottom side of a window
         */
        bottom?: string | number,

        /**
         * @cfg {Boolean} [modal=false]
         * Applies a modal UI to a window
         */
        modal?: boolean,

        /**
         * @cfg {Boolean} [move=true]
         * It is possible to move a window
         */
        move?: boolean,

        /**
         * @cfg {Boolean} [resize=true]
         * It is possible to resize a window
         */
        resize?: boolean,

        /**
         * @cfg {Integer} [modalIndex=0]
         * Determines the z-index property of a modal UI
         */
        modalIndex?: number
    }): this;

    /**
     * @method hide
     * Hides a window
     */
    hide(): void;

    /**
     * @method show
     * Shows a window at specified coordinates
     *
     * @param {Integer} x
     * @param {Integer} y
     */
    show(x: number, y: number): void;

    /**
     * @method move
     * Moves a window at specified coordinates
     *
     * @param {Integer} x
     * @param {Integer} y
     */
    move(x: number, y: number): void;

    /**
     * @method update
     * Changes the markup in the body area of a window
     *
     * @param {String} html
     */
    update(html: string): void;

    /**
     * @method setTitle
     * Changes the markup of the title tag in the head area of a window
     *
     * @param {String} title
     */
    setTitle(html: string): void;

    /**
     * @method setSize
     * Changes the horizontal/vertical size of a window
     *
     * @param {Integer} width
     * @param {Integer} height
     */
    setSize(w: number, h: number): void;

    /**
     * @method resize
     * Designates a scroll area if there is a lot of content in the window body area
     */
    resize(): void;

    /**
     * @method resizeModal
     * Re-adjust the location of a modal window
     */
    resizeModal(): void;
}

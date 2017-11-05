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
         */
        multipanel?: boolean
    }): this;
    /**
     * Gets the index of the currently enabled node
     *
     * @return Index
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
     * Updates words subject to autofill
     *
     *
     */
    update(newWords: string[]): void;
    close(): void;
    /**
     * Gets filtered words subject to autofill
     *
     * @return words
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
     * Selects a button of a specified index
     *
     */
    setIndex(index: number): void;
    /**
     * Selects a button having a specified value
     *
     */
    setValue(value: any): void;
    /**
     * Gets the data of the button currently selected
     *
     */
    getData(): {};
    /**
     * Gets the value of the button currently selected
     *
     */
    getValue(): any;
    /**
     * Gets the markup text of the button currently selected
     *
     */
    getText(): string;

    open(e: any): void;

    fold(): void;

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
     * Outputs a calendar that fits the year/month entered
     *
     */
    page(y: number, m: number): void;

    prev(e: any, moveYear?: boolean): void;

    next(e: any, moveYear?: boolean): void;
    /**
     * Selects today if there is no value, or selects a date applicable to a timestamp or year/month/date
     *
     * @param "year"/"month"/"date"/"timestamp"/"Date"
     */
    select(...args: any[]): void;
    /**
     * Selects a date corresponding to the time added to the currently selected date
     *
     * @param time Timestamp or Date
     */
    addTime(time: number | Date): void;
    /**
     * Gets the value of the date currently selected
     *
     * @return Date object
     */
    getDate(): Date;
    /**
     * Gets the timestamp value of the date currently selected
     *
     * @return Timestamp
     */
    getTime(): number;
    /**
     * Gets a date string that fits the format entered
     *
     * @return format Formatted date string
     */
    getFormat(format: string): string;

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
     * Changes the dropdown list
     *
     * @param nodes Dropdown list
     */
    update(nodes: any[]): void;

    hide(): void;
    /**
     * Shows a dropdown at the specified coordinates
     *
     */
    show(x: number, y: number): void;
    /**
     * Moves a dropdown to the specified coordinates
     *
     */
    move(x: number, y: number): void;

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

    hide(): void;

    show(): void;

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
     * Adds a notice message. The value passed is the data object shown by the notice template
     *
     */
    add(data: {}, timeout: number): void;

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
     * Reloads the number of specified data records, or reloads the initially configured number of data records if there is no parameter
     *
     * @param count Data total count
     */
    reload(count: number): void;
    /**
     * Changes to a specified page number, and gets the currently enabled page number if there is no parameter
     *
     * @param pNo Page number
     */
    page(pNo: number): void;

    next(): void;

    prev(): void;

    first(): void;

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

    getGroupList(): any[];
    /**
     *
     * collapse group's children
     *
     */
    collapsed(id: string): void;
    /**
     *
     * expand group's children
     *
     */
    expanded(id: string): void;
    /**
     *
     * get a list of property's value
     *
     * @param [key=null]  if key is null, value is all properties.
     */
    getValue(key?: string): {} | any[];
    getDefaultValue(): any[];
    initValue(obj: {}): void;
    /**
     *
     * set a list of property's value
     *
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
     * set FromHandle's value
     */
    setFromValue(value: number): void;
    /**
     * set ToHandle's value
     */
    setToValue(value: number): void;
    /**
     * get FromHandle's value
     *
     * @return value
     */
    getFromValue(): number;
    /**
     * get ToHandle's value
     *
     * @return value
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
     * Changes the tab list
     *
     */
    update(nodes: any[]): void;
    /**
     * Adds a tab at a specified index
     *
     */
    insert(index: number, node: {}): void;
    /**
     * Adds a tab to the last node
     *
     */
    append(node: {}): void;
    /**
     * Adds a tab to the first node
     *
     */
    prepend(node: {}): void;
    /**
     * Removes a tab at a specified index
     *
     */
    remove(index: number): void;
    /**
     * Changes a specified tab to a tab at a target index
     *
     */
    move(index: number, targetIndex: number): void;
    /**
     * Enables the tab at a specified index
     *
     */
    show(index: number): void;
    /**
     * Enables the tab at a specified index
     *
     */
    enable(index: number): void;
    /**
     * Disables the tab at a specified index
     *
     */
    disable(index: number): void;
    /**
     * Gets the index of the currently enabled tab
     *
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
     * Changes the content of a tooltip
     *
     */
    update(newTitle: string): void;
}

export interface UITreeNode {
    /** Data of a specified node */
    data?: any[];

    /** LI element of a specified node */
    element?: any;

    /** Index of a specified node  */
    index?: number;

    /** Unique number of a specifiede node at the current depth */
    nodenum?: number;

    /** Variable that refers to the parent of the current node */
    parent?: UITreeNode;

    /** List of child nodes of a specified node */
    children?: UITreeNode[];

    /** Depth of a specified node */
    depth?: number;

    /** State value that indicates whether a child node is shown or hidden */
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
     * Changes to the node at a specified index.
     *
     */
    update(index: string, data: any[]): void;
    /**
     * Adds to a child node at a specified index.
     *
     * @param param1 index or data (Array/String)
     * @param param2 null or data
     */
    append(...args: any[]): void;
    /**
     * Adds a node at a specified index.
     *
     */
    insert(index: string, data: any[]): void;
    /**
     * Adds a node at a specified index.
     *
     * @return node
     */
    select(index: string): UITreeNode;

    unselect(): void;
    /**
     * Deletes a node at a specified index.
     *
     */
    remove(index: string): void;
    reset(): void;
    /**
     * Moves a node at a specified index to the target index.
     *
     */
    move(index: string, targetIndex: string): void;
    /**
     * Shows a child node at a specified index.
     *
     */
    open(index: string, e: any): void;
    /**
     * Folds up a child node at a specified index.
     *
     */
    fold(index: string, e: any): void;
    /**
     * Shows all child nodes at a specified index.
     *
     */
    openAll(index: string): void;
    /**
     * Folds up all child nodes at a specified index.
     *
     */
    foldAll(index: string): void;
    /**
     * Return all nodes of the root.
     *
     * @return nodes
     */
    list(): UITreeNode[];
    /**
     * Returns all child nodes.
     *
     * @return nodes
     */
    listAll(): UITreeNode[];
    /**
     * Returns all parent nodes at a specified index.
     *
     * @return nodes
     */
    listParents(index: string): UITreeNode[];
    /**
     * Gets a node at a specified index
     *
     * @return node
     */
    get(index: string): UITreeNode;
    /**
     * Gets all nodes at a specified index including child nodes.
     *
     * @return nodes
     */
    getAll(index: string): UITreeNode[];
    /**
     * Gets the index of a node that is activated in an active state.
     *
     * @return index
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

    hide(): void;
    /**
     * Shows a window at specified coordinates
     *
     */
    show(x: number, y: number): void;
    /**
     * Moves a window at specified coordinates
     *
     */
    move(x: number, y: number): void;
    /**
     * Changes the markup in the body area of a window
     *
     */
    update(html: string): void;
    /**
     * Changes the markup of the title tag in the head area of a window
     *
     */
    setTitle(html: string): void;
    /**
     * Changes the horizontal/vertical size of a window
     *
     */
    setSize(w: number, h: number): void;

    resize(): void;

    resizeModal(): void;
}

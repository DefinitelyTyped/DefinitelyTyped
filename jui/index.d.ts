// Type definitions for jui 2.0
// Project: https://github.com/juijs/jui#readme
// Definitions by: Jin-Ho Park <https://github.com/easylogic>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="jui-core" />

import {UIEvent} from 'jui-core';

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
    }) : this;

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
    }) : this;

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
    }) : this;

    getColor(type: string): string|{};

    setColor(value: string|{}): void;

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
        position?: "top"|"bottom",

        /**
         * @cfg {Boolean} [flex=true]
         * Drop-down menu is varied by changing the width function
         */
        flex?: boolean
    }) : this;

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
        type?: "daily"|"monthly"|"yearly",

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
        date?: "now"|Date,

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
    }) : this;

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
    select(...args:any[]): void;

    /**
     * @method addTime
     * Selects a date corresponding to the time added to the currently selected date
     *
     * @param {"Integer"/"Date"} time Timestamp or Date
     */
     addTime(time: number|Date): void;

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
        color?: "black"|"gray",

        /**
         * @cfg {Float} [opacity=0.4]
         * Sets the transparency of a modal
         */
        opacity?: number,

        /**
         * @cfg {String/DOMElement} [target="body"]
         * Sets a selector on which a modal is shown
         */
        target?: string|any,

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
    }):  this;

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
        position?: "top"|"top-lefet"|"top-right"|"bottom"|"bottom-left"|"bottom-right",

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

export interface  UIPaging {
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
        orient?: "horizontal"|"vertical", // or vertical,
        min?: number,
        max?: number,
        value?: number,
        striped?: boolean,   // or true
        animated?: boolean     // or true
    }): this;

    setAnimated(isAnimated: boolean): void;
    setStriped(isStriped: boolean): void;
    setValue(v:number): void;
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

    addItem(item: {}|any[]): void;

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
    refreshValue($dom: any, newValue:any): void;
}

// Type definitions for pickadate.js 3.5.5
// Project: https://github.com/amsul/pickadate.js
// Definitions by: Theodore Brown <https://github.com/theodorejb/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

///<reference path="../jquery/jquery.d.ts" />

declare module Pickadate {
    /** KlassOptions shared between date and time pickers */
    interface KlassOptions {
        // The element states
        input?: string; // default 'picker__input'
        active?: string; // default 'picker__input--active'

        // The root picker and states
        picker?: string; // default 'picker' or 'picker picker--time'
        opened?: string; // default 'picker--opened'
        focused?: string; // default 'picker--focused'

        // The picker holder
        holder?: string; // default 'picker__holder'

        // The picker frame, wrapper, and box
        frame?: string; // default 'picker__frame'
        wrap?: string; // default 'picker__wrap'
        box?: string; // default 'picker__box'

        // Day/Time states
        disabled?: string; // default 'picker__day--disabled' or 'picker__list-item--disabled'
        selected?: string // default 'picker__day--selected' or 'picker__list-item--selected'
        highlighted?: string // default 'picker__day--highlighted' or 'picker__list-item--highlighted'
        now?: string; // default 'picker__day--today' or 'picker__list-item--now'

        // Clear button
        buttonClear?: string; // default 'picker__button--clear'
    }

    interface DateKlassOptions extends KlassOptions {       
        // The picker header
        header?: string; // default 'picker__header'

        // Month navigation
        navPrev?: string; // default 'picker__nav--prev'
        navNext?: string; // default 'picker__nav--next'
        navDisabled?: string; // default 'picker__nav--disabled'

        // Month & year labels
        month?: string; // default 'picker__month'
        year?: string; // default 'picker__year'

        // Month & year dropdowns
        selectMonth?: string; // default 'picker__select--month'
        selectYear?: string; // default 'picker__select--year'

        // Table of dates
        table?: string; // default 'picker__table'

        // Weekday labels
        weekdays?: string; // default 'picker__weekday'

        // Day states
        day?: string; // default 'picker__day'
        infocus?: string; // default 'picker__day--infocus'
        outfocus?: string; // default 'picker__day--outfocus'

        // The picker footer
        footer?: string; // default 'picker__footer'

        // Today & close buttons
        buttonClose?: string; // default 'picker__button--close'
        buttonToday?: string; // default 'picker__button--today'
    }

    interface TimeKlassOptions extends KlassOptions {
        // The root picker
        picker?: string; // default 'picker picker--time'        

        // List of times
        list?: string; // default 'picker__list'
        listItem?: string; // default 'picker__list-item'

        // Time states
        viewset?: string; // default 'picker__list-item--viewset'
    }

    /** Options shared between date and time pickers */
    interface Options {
        /** Set clear button text */
        clear?: string; // default 'Clear'

        /**
         * The human-friendly display format.
         * Escape any "rule" characters with an exclamation mark (!).
         */
        format?: string; // default 'd mmmm, yyyy'

        /** An alternate format to submit to the server. */
        formatSubmit?: string; // default undefined
        hiddenPrefix?: string; // default undefined
        hiddenSuffix?: string; // default '_submit'

        /**
         * A majority of the time, the value that needs to be sent to the server is just the hidden value
         * and not the visible one. To make this happen, use the hiddenName option.
         * This essentially nullifies the hiddenPrefix and hiddenSuffix, strips the name attribute from the source input, and then sets it as the name of the hidden input:
         */
        hiddenName?: boolean;  // default undefined

        /**
         * By default, typing into the input is disabled by giving it a readOnly attribute.
         * Setting the editable option to true allows the input field to be edited directly.
         */
        editable?: boolean;

        /** Specify where to insert the picker's root element by passing any valid CSS selector to this option */
        container?: string; // default undefined

        /** The hidden input container */
        containerHidden?: string; // default undefined

        // Close on a user action
        closeOnSelect?: boolean; // default true
        closeOnClear?: boolean; // default true

        // Events
        onStart?: (event: any) => void;
        onRender?: (event: any) => void;
        onOpen?: (event: any) => void;
        onClose?: (event: any) => void;
        onSet?: (event: any) => void;
        onStop?: (event: any) => void;
    }

    export interface DateOptions extends Options {
        // Strings and translations
        monthsFull?: string[]; // default 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
        monthsShort?: string[]; // default 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        weekdaysFull?: string[]; // default 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
        weekdaysShort?: string[]; // default 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
        showMonthsShort?: boolean;
        showWeekdaysFull?: boolean;

        // Buttons
        today?: string; // default 'Today'
        close?: string; // default 'Close'

        // Accessibility labels
        labelMonthNext?: string; // default 'Next month'
        labelMonthPrev?: string; // default 'Previous month'
        labelMonthSelect?: string; // default 'Select a month'
        labelYearSelect?: string; //default 'Select a year'

        /**
         * True enables the dropdown selector and false replaces it with text.
         * You can also specify the number of years to show in the dropdown using an even integer
         * - half before and half after the year in focus. If true the value will default to 10.
         */
        selectYears?: boolean|number;

        /** True enables the dropdown selector and false replaces it with text */
        selectMonths?: boolean;

        /**
         * The first day of the week can be set to either Sunday or Monday.
         * True or 1 sets it as Monday and false or 0 as Sunday.
         */
        firstDay?: boolean|number;

        // Date limits
        min?: any; // date object, array formatted as [YEAR,MONTH,DATE], or dates relative to today using integers or a boolean (`true` sets it to today. `false` removes any limits).
        max?: any;

        // Disable dates
        disable?: any[]; // Date objects, arrays formatted as [YEAR,MONTH,DATE], or integers representing days of the week (from 1 to 7). Switch to whitelist by setting first item in collection to `true`.

        // Classes
        klass?: DateKlassOptions;
    }

    export interface TimeOptions extends Options {
        /**
         * The formatLabel option is unique. It can contain HTML and it can 
         * also be a function if you want to create the label during run-time.
         */
        formatLabel?: string|((time: TimeItem) => string);

        /**
         * Choose the interval in minutes between each time in the list.
         * Default is 30.
         */
        interval?: number;

        // Time limits
        min?: any; // array formatted as [HOUR,MINUTE], or as times relative to now using integers or a boolean (`true` sets it to now, `false` removes any limits).
        max?: any;

        // Disable times
        disable?: any[]; // arrays formatted as [HOUR,MINUTE] or integers representing hours (from 0 to 23). Switch to whitelist by setting true as the first item in the collection.

        // Classes
        klass?: TimeKlassOptions;
    }

    interface Item {
        /** The "pick" value used for comparisons. */
        pick: number;
    }

    export interface DateItem extends Item {
        /** The full year. */
        year: number;

        /** The month with zero-as-index. */
        month: number;

        /** The date of the month. */
        date: number;

        /** The day of the week with zero-as-index. */
        day: number;

        /** The underlying JavaScript Date object. */
        obj: Date;
    }

    export interface TimeItem extends Item {
        /** Hour of the day from 0 to 23. */
        hour: number;

        /** The minutes of the hour from 0 to 59 (based on the interval). */
        mins: number;
    }

    export interface CallbackObject {
        open?: () => void;
        close?: () => void;
        render?: () => void;
        start?: () => void;
        stop?: () => void;
        set?: (thingset) => void;
    }

    export interface SetObject {
        clear?: any;
        select?: any;
        highlight?: any;
        view?: any;
        min?: any;
        max?: any;
        disable?: any;
        enable?: any;
    }

    export interface TimeSetObject extends SetObject {
        interval?: number;
    }

    interface SetOptions {
        /**
         * By default, any callbacks bound with the on method will be fired when its relevant thing is set.
         * To silently set a thing, pass an options object with the muted parameter set to true.
         */
        muted: boolean;
    }

    interface Picker<TPickerObject, TItemObject extends Item, TOptions extends SetObject> {
        /** The picker's relative input element wrapped as a jQuery object. */
        $node: JQuery;

        /** The picker's relative root holder element wrapped as a jQuery object. */
        $root: JQuery;

        open(withoutFocus?: boolean): TPickerObject;
        close(withFocus?: boolean): TPickerObject;

        /** Rebuild the picker. */
        start(): TPickerObject;

        /** Destroy the picker. */
        stop(): TPickerObject;

        /**
         * Refresh the picker box after adding something to the holder.
         * By default, only the "face" of the picker (i.e. the box element)
         * has it’s contents re-rendered. To render the entire picker from 
         * the root up, pass true as the first argument.
         */
        render(entirePicker?: boolean): TPickerObject;

        /** Clear the value in the picker's input element. */
        clear(): TPickerObject;

        /** Short for picker.get('value') */
        get(): string;

        /** Get the properties, objects, and states that make up the current state of the picker. */
        get(thing: string): any;

        /** Returns the string value of the picker's input element. */
        get(thing: 'value'): string;

        /** Returns the item object that is visually selected. */
        get(thing: 'select'): TItemObject;

        /** Returns the item object that is visually highlighted. */
        get(thing: 'highlight'): TItemObject;

        /** Returns the item object that sets the current view. */
        get(thing: 'view'): TItemObject;

        /** Returns the item object that limits the picker's lower range. */
        get(thing: 'min'): TItemObject;

        /** Returns the item object that limits the picker's upper range. */
        get(thing: 'max'): TItemObject;

        /** Returns a boolean value of whether the picker is open or not. */
        get(thing: 'open'): boolean;

        /** Returns a boolean value of whether the picker has started or not. */
        get(thing: 'start'): boolean;

        /** Returns a unique 9-digit integer that is the ID of the picker. */
        get(thing: 'id'): number;

        /** Returns an array of items that determine which item objects to disable on the picker. */
        get(thing: 'disable'): any[];

        /** Returns a formatted string for the item object specified by `thing` */
        get(thing: string, format: string): string;

        /** Set the properties, objects, and states to change the state of the picker. */
        set(thing: string, value?: any, options?: SetOptions): TPickerObject;
        set(things: TOptions, options?: SetOptions): TPickerObject;

        /** Bind callbacks to get fired off when the relative picker method is called. */
        on(methodName: string, callback: (data?: any) => void): TPickerObject;

        /** Bind multiple callbacks at once to get fired off when the relative picker method is called. */
        on(callbackObject: CallbackObject): TPickerObject;

        /** Unbind callbacks that are bound using the on method. */
        off(...methodName: string[]): TPickerObject;

        /** Trigger callbacks that have been queued up using the the on method. */
        trigger(event: string, data?: any): TPickerObject;
    }

    interface DatePicker extends Picker<DatePicker, DateItem, SetObject> { }
    interface TimePicker extends Picker<TimePicker, TimeItem, TimeSetObject> { }
}

interface JQuery {
    pickadate(methodName: "picker"): Pickadate.DatePicker;
    pickadate(methodName: string): any;
    pickadate(options?: Pickadate.DateOptions): JQuery;

    pickatime(methodName: "picker"): Pickadate.TimePicker;
    pickatime(methodName: string): any;
    pickatime(options?: Pickadate.TimeOptions): JQuery;
}

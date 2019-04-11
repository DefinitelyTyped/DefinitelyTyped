// Type definitions for pickadate.js 3.5.5
// Project: https://github.com/amsul/pickadate.js
// Definitions by: Theodore Brown <https://github.com/theodorejb>, Leonard Thieu <https://github.com/leonard-thieu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

///<reference types="jquery" />

declare namespace Pickadate {
    // KlassOptions shared between date and time pickers
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

    // options shared between date and time pickers
    interface Options {
        /**
         * Set the clear button text.
         * Defaults to 'Clear'
         */
        clear?: string;

        /**
         * The human-friendly display format.
         * Escape any "rule" characters with an exclamation mark (!).
         * Defaults to 'd mmmm, yyyy'
         */
        format?: string;

        /**
         * An alternate format to submit to the server.
         * Defaults to undefined.
         */
        formatSubmit?: string;

        /**
         * An optional name prefix for the new hidden input element used
         * when a custom human-friendly display format is specified.
         * Defaults to undefined.
         */
        hiddenPrefix?: string;

        /**
         * An optional name suffix for the new hidden input element used
         * when a custom human-friendly display format is specified.
         * Defaults to '_submit'
         */
        hiddenSuffix?: string;

        /**
         * A majority of the time, the value that needs to be sent to the server
         * is just the hidden value and not the visible one. To make this happen,
         * use the hiddenName option. This essentially nullifies the hiddenPrefix
         * and hiddenSuffix, strips the name attribute from the source input, and
         * then sets it as the name of the hidden input. Defaults to undefined.
         */
        hiddenName?: boolean;

        /**
         * By default, typing into the input is disabled by giving it a readOnly
         * attribute. Setting the editable option to true allows the input field
         * to be edited directly.
         */
        editable?: boolean;

        /**
         * Specify where to insert the picker's root element by passing any
         * valid CSS selector to this option. Defaults to undefined.
         */
        container?: string|JQuery;

        /**
         * The hidden input container.
         * Defaults to undefined.
         */
        containerHidden?: string;

        /**
         * Whether or not to close the picker when a date is selected.
         * Defaults to `true`.
         */
        closeOnSelect?: boolean;

        /**
         * Whether or not to close the picker when the "clear" button is pressed.
         * Defaults to `true`.
         */
        closeOnClear?: boolean;

        // Events
        onStart?: (event: any) => void;
        onRender?: (event: any) => void;
        onOpen?: (event: any) => void;
        onClose?: (event: any) => void;
        onSet?: (event: any) => void;
        onStop?: (event: any) => void;
    }

    type MinOrMaxDateOption = Date | [number, number, number] | number | boolean;
    type MinOrMaxTimeOption = Date | [number, number] | number | boolean;

    export interface DateOptions extends Options {
        // Strings and translations
        monthsFull?: string[]; // default 'January' through 'December'
        monthsShort?: string[]; // default 'Jan' through 'Dec'
        weekdaysFull?: string[]; // default 'Sunday' through 'Saturday'
        weekdaysShort?: string[]; // default 'Sun' through 'Sat'
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
         * You can also specify the number of years to show in the dropdown
         * using an even integer - half before and half after the year in focus.
         * If true the value will default to 10.
         */
        selectYears?: boolean | number;

        /**
         * True enables the dropdown selector and false replaces it with text
         */
        selectMonths?: boolean;

        /**
         * The first day of the week can be set to either Sunday or Monday.
         * True or 1 sets it as Monday and false or 0 as Sunday.
         */
        firstDay?: boolean | number;

        /**
         * Set the minimum selectable date on the picker. Accepts a Date object,
         * array formatted as [YEAR, MONTH, DATE], a positive or negative integer
         * for a date relative to today, or a boolean (`true` sets it to today,
         * `false` removes any limit).
         */
        min?: MinOrMaxDateOption;

        /**
         * Set the maximum selectable date on the picker.
         * Accepts the same values as the `min` property.
         */
        max?: MinOrMaxDateOption;

        /**
         * Disable a specific or arbitrary set of dates selectable on the
         * picker. Accepts an array of Date objects, arrays formatted as
         * [YEAR, MONTH, DATE], integers representing days of the week
         * (from 1 to 7), or objects with a range of dates. Switch to a
         * whitelist by setting `true` as the first item in the collection.
         * Enable dates that fall within a range of disabled dates by
         * adding an `inverted` parameter to the item within the collection.
         */
        disable?: any[];

        // Classes
        klass?: DateKlassOptions;
    }

    export interface TimeOptions extends Options {
        /**
         * The formatLabel option is unique. It can contain HTML and it can
         * also be a function if you want to create the label during run-time.
         */
        formatLabel?: string | ((time: TimeItem) => string);

        /**
         * Choose the interval in minutes between each time in the list.
         * Default is 30.
         */
        interval?: number;

        /**
         * Set the minimum selectable time on the picker. Accepts a Date object,
         * array formatted as [HOUR, MINUTE], a positive or negative integer
         * for a time relative to now, or a boolean (`true` sets it to now, and
         * `false` removes any limit).
         */
        min?: MinOrMaxTimeOption;

        /**
         * Set the maximum selectable time on the picker.
         * Accepts the same values as the `min` property.
         */
        max?: MinOrMaxTimeOption;

        /**
         * Disable a specific or arbitrary set of times selectable on the picker.
         * Accepts an array of Date objects, arrays formatted as [HOUR, MINUTE],
         * integers representing hours (from 0 to 23), or objects with a range of
         * times. Switch to a whitelist by setting `true` as the first item in the
         * collection. Enable times that fall within a range of disabled times by
         * adding an `inverted` parameter to the item within the collection.
         */
        disable?: any[];

        // Classes
        klass?: TimeKlassOptions;
    }

    interface Item {
        /**
         * The "pick" value used for comparisons.
         */
        pick: number;
    }

    export interface DateItem extends Item {
        /**
         * The full year.
         */
        year: number;

        /**
         * The month with zero-as-index.
         */
        month: number;

        /**
         * The date of the month.
         */
        date: number;

        /**
         * The day of the week with zero-as-index.
         */
        day: number;

        /**
         * The underlying JavaScript Date object.
         */
        obj: Date;
    }

    export interface TimeItem extends Item {
        /**
         * Hour of the day from 0 to 23.
         */
        hour: number;

        /**
         * The minutes of the hour from 0 to 59 (based on the interval).
         */
        mins: number;
    }

    export interface CallbackObject {
        open?: () => void;
        close?: () => void;
        render?: () => void;
        start?: () => void;
        stop?: () => void;
        set?: (thingSet: any) => void;
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
        /**
         * Choose the minutes interval between each time in the list.
         * Defaults to 30.
         */
        interval?: number;
    }

    export interface SetOptions {
        /**
         * By default, any callbacks bound with the on method will be fired
         * when its relevant thing is set. To silently set a thing, pass an
         * options object with the muted parameter set to true.
         */
        muted?: boolean;
        format?: string;
    }

    interface Picker<TPickerObject, TItemObject extends Item, TOptions extends SetObject> {
        /**
         * The picker's relative input element wrapped as a jQuery object.
         */
        $node: JQuery;

        /**
         * The picker's relative root holder element wrapped as a jQuery object.
         */
        $root: JQuery;

        /**
         * This is the picker’s relative hidden element, which is undefined if
         * there’s no formatSubmit option. There should be no reason to use this
         * – it's mostly for internal use. If you have a valid reason for using
         * this, please mention it in the issues.
         */
        _hidden: HTMLInputElement;

        open(withoutFocus?: boolean): TPickerObject;
        close(withFocus?: boolean): TPickerObject;

        /**
         * Rebuild the picker.
         */
        start(): TPickerObject;

        /**
         * Destroy the picker.
         */
        stop(): TPickerObject;

        /**
         * Refresh the picker box after adding something to the holder.
         * By default, only the "face" of the picker (i.e. the box element)
         * has it’s contents re-rendered. To render the entire picker from
         * the root up, pass true as the first argument.
         */
        render(entirePicker?: boolean): TPickerObject;

        /**
         * Clear the value in the picker's input element.
         */
        clear(): TPickerObject;

        /**
         * Short for picker.get('value')
         */
        get(): string;

        /**
         * Get the properties, objects, and states that make up the current
         * state of the picker.
         */
        get(thing: string): any;

        /**
         * Returns the string value of the picker's input element.
         */
        get(thing: 'value'): string;

        /**
         * Returns the item object that is visually selected.
         */
        get(thing: 'select'): TItemObject;

        /**
         * Returns the item object that is visually highlighted.
         */
        get(thing: 'highlight'): TItemObject;

        /**
         * Returns the item object that sets the current view.
         */
        get(thing: 'view'): TItemObject;

        /**
         * Returns the item object that limits the picker's lower range.
         */
        get(thing: 'min'): TItemObject;

        /**
         * Returns the item object that limits the picker's upper range.
         */
        get(thing: 'max'): TItemObject;

        /**
         * Returns a boolean value of whether the picker is open or not.
         */
        get(thing: 'open'): boolean;

        /**
         * Returns a boolean value of whether the picker has started or not.
         */
        get(thing: 'start'): boolean;

        /**
         * Returns a unique 9-digit integer that is the ID of the picker.
         */
        get(thing: 'id'): number;

        /**
         * Returns an array of items that determine which item objects to
         * disable on the picker.
         */
        get(thing: 'disable'): any[];

        /**
         * Returns a formatted string for the item object specified by `thing`
         */
        get(thing: string, format: string): string;

        /**
         * Set the properties, objects, and states to change the state of the picker.
         */
        set(thing: string, value?: any, options?: SetOptions): TPickerObject;
        set(things: TOptions, options?: SetOptions): TPickerObject;

        /**
         * Bind callbacks to get fired off when the relative picker method is called.
         */
        on(methodName: string, callback: (data?: any) => void): TPickerObject;

        /**
         * Bind multiple callbacks at once to get fired off when the relative
         * picker method is called.
         */
        on(callbackObject: CallbackObject): TPickerObject;

        /**
         * Unbind callbacks that are bound using the on method.
         */
        off(...methodName: string[]): TPickerObject;

        /**
         * Trigger callbacks that have been queued up using the the on method.
         */
        trigger(event: string, data?: any): TPickerObject;
    }

    export interface DatePicker extends Picker<DatePicker, DateItem, SetObject> { }
    export interface TimePicker extends Picker<TimePicker, TimeItem, TimeSetObject> { }

    interface Pickadate {
        defaults: DateOptions;

        /**
         * Access the API object on an initialized date picker element.
         */
        (keyword: "picker"): Pickadate.DatePicker;
        (objectName: "$node"): JQuery;
        (objectName: "$root"): JQuery;
        (objectName: "_hidden"): HTMLInputElement;

        /**
         * Invoke API methods after date picker initialization.
         */
        (methodName: string, ...arguments: any[]): any;

        /**
         * Initialize a date picker.
         */
        (options?: Pickadate.DateOptions): JQuery;
    }

    interface Pickatime {
        defaults: TimeOptions;

        /**
         * Access the API object on an initialized time picker element.
         */
        (keyword: "picker"): Pickadate.TimePicker;
        (objectName: "$node"): JQuery;
        (objectName: "$root"): JQuery;
        (objectName: "_hidden"): HTMLInputElement;

        /**
         * Invoke API methods after time picker initialization.
         */
        (methodName: string, ...arguments: any[]): any;

        /**
         * Initialize a time picker.
         */
        (options?: Pickadate.TimeOptions): JQuery;
    }
}

interface JQuery {
    pickadate: Pickadate.Pickadate;
    pickatime: Pickadate.Pickatime;
}

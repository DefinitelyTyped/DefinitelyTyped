// Type definitions for pickadate.js 3.3.0
// Project: https://github.com/amsul/pickadate.js
// Definitions by: Theodore Brown <https://github.com/theodorejb/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

///<reference path="../jquery/jquery.d.ts" />

/** Options shared between date and time pickers */
interface pickerOptions {
    /** Set clear button text */
    clear?: string; // default 'Clear'

    /** Specify where to insert the picker's root element by passing any valid CSS selector to this option */
    container?: any;

    // Events
    onStart?: (event: any) => void;
    onRender?: (event: any) => void;
    onOpen?: (event: any) => void;
    onClose?: (event: any) => void;
    onSet?: (event: any) => void;
    onStop?: (event: any) => void;
}

interface pickadateOptions extends pickerOptions {
    // Strings and translations
    monthsFull?: string[]; // default 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    monthsShort?: string[]; // default 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    weekdaysFull?: string[]; // default 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
    weekdaysShort?: string[]; // default 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
    showMonthsShort?: boolean;
    showWeekdaysFull?: boolean;

    // Buttons
    today?: string; // default 'Today'

    // Formats
    format?: string; // default 'd mmmm, yyyy'
    formatSubmit?: string; // e.g. 'yyyy/mm/dd'
    hiddenPrefix?: string; // default undefined
    hiddenSuffix?: string; // default '_submit'

    // Dropdown selectors
    selectYears?: any; // Specify the number of years selectable using an even integer - half before and half after the year in focus:
    selectMonths?: boolean;

    // First day of the week
    firstDay?: any; // The first day of the week can be set to either Sunday or Monday. Anything truth-y sets it as Monday and anything false-y as Sunday

    // Date limits
    min?: any; // date object, array formatted as [YEAR,MONTH,DATE], or dates relative to today using integers or a boolean (`true` sets it to today. `false` removes any limits).
    max?: any;

    // Disable dates
    disable?: any[]; // Date objects, arrays formatted as [YEAR,MONTH,DATE], or integers representing days of the week (from 1 to 7). Switch to whitelist by setting first item in collection to `true`.

    // Classes
    klass?: {

        // The element states
        input?: string; // default 'picker__input'
        active?: string; // default 'picker__input--active'

        // The root picker and states
        picker?: string; // default 'picker'
        opened?: string; // default 'picker--opened'
        focused?: string; // default 'picker--focused'

        // The picker holder
        holder?: string; // default 'picker__holder'

        // The picker frame, wrapper, and box
        frame?: string; // default 'picker__frame'
        wrap?: string; // default 'picker__wrap'
        box?: string; // default 'picker__box'

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
        disabled?: string; // default 'picker__day--disabled'
        selected?: string // default 'picker__day--selected'
        highlighted?: string // default 'picker__day--highlighted'
        now?: string; // default 'picker__day--today'
        infocus?: string; // default 'picker__day--infocus'
        outfocus?: string; // default 'picker__day--outfocus'

        // The picker footer
        footer?: string; // default 'picker__footer'

        // Today & clear buttons
        buttonClear?: string; // default 'picker__button--clear'
        buttonToday?: string; // default 'picker__button--today'
    }
}

interface pickatimeOptions extends pickerOptions {

    // Formats
    format?: string; // default 'h:i A'
    formatLabel?: any;
    formatSubmit?: string;
    hiddenPrefix?: string; // default undefined
    hiddenSuffix?: string; // default '_submit'

    // Time intervals
    interval?: number; // interval in minutes. default 30.

    // Time limits
    min?: any; // array formatted as [HOUR,MINUTE], or as times relative to now using integers or a boolean (`true` sets it to now, `false` removes any limits).
    max?: any;

    // Disable times
    disable?: any[]; // arrays formatted as [HOUR,MINUTE] or integers representing hours (from 0 to 23). Switch to whitelist by setting true as the first item in the collection.

    // Classes
    klass?: {

        // The element states
        input?: string; // default 'picker__input'
        active?: string; // default 'picker__input--active'

        // The root picker and states
        picker?: string; // default 'picker picker--time'
        opened?: string; // default 'picker--opened'
        focused?: string; // default 'picker--focused'

        // The picker holder
        holder?: string; // default 'picker__holder'

        // The picker frame, wrapper, and box
        frame?: string; // default 'picker__frame'
        wrap?: string; // default 'picker__wrap'
        box?: string; // default 'picker__box'

        // List of times
        list?: string; // default 'picker__list'
        listItem?: string; // default 'picker__list-item'

        // Time states
        disabled?: string; // default 'picker__list-item--disabled'
        selected?: string; // default 'picker__list-item--selected'
        highlighted?: string; // default 'picker__list-item--highlighted'
        viewset?: string; // default 'picker__list-item--viewset'
        now?: string; // default 'picker__list-item--now'

        // Clear button
        buttonClear?: string; // default 'picker__button--clear'
    }
}

interface PickerItemObject {
    /** The "pick" value used for comparisons. */
    pick: number;
}

interface DatePickerItemObject extends PickerItemObject {
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

interface TimePickerItemObject extends PickerItemObject {
    /** Hour of the day from 0 to 23. */
    hour: number;

    /** The minutes of the hour from 0 to 59 (based on the interval). */
    mins: number;
}

interface CallbackObject {
    open?: () => void;
    close?: () => void;
    render?: () => void;
    start?: () => void;
    stop?: () => void;
    set?: () => void;
}

interface SetThings {
    clear?;
    select?: any;
    highlight?: any;
    view?: any;
    min?: any;
    max?: any;
    disable?: any;
    enable?: any;
}

interface TimePickerSetThings extends SetThings {
    interval?: any;
}

interface PickerObject {
    /** The picker's relative input element wrapped as a jQuery object. */
    $node: JQuery;

    /** The picker's relative root holder element wrapped as a jQuery object. */
    $root: JQuery;
}

interface DatePickerObject extends PickerObject {
    open(withoutFocus?: boolean): DatePickerObject;
    close(withFocus?: boolean): DatePickerObject;

    /** Rebuild the picker. */
    start(): DatePickerObject;

    /** Destroy the picker. */
    stop(): DatePickerObject;

    /**
    * Refresh the picker box after adding something to the holder.
    * By default, only the "face" of the picker (i.e. the box element)
    * has it’s contents re-rendered. To render the entire picker from 
    * the root up, pass true as the first argument.
    */
    render(entirePicker?: boolean): DatePickerObject;

    /** Clear the value in the picker's input element. */
    clear(): DatePickerObject;

    /** Short for picker.get('value') */
    get(): string;

    /** Get the properties, objects, and states that make up the current state of the picker. */
    get(thing: string): any;

    /** Returns the string value of the picker's input element. */
    get(thing: 'value'): string;

    /** Returns the item object that is visually selected. */
    get(thing: 'select'): DatePickerItemObject;

    /** Returns the item object that is visually highlighted. */
    get(thing: 'highlight'): DatePickerItemObject;

    /** Returns the item object that sets the current view. */
    get(thing: 'view'): DatePickerItemObject;

    /** Returns the item object that limits the picker's lower range. */
    get(thing: 'min'): DatePickerItemObject;

    /** Returns the item object that limits the picker's upper range. */
    get(thing: 'max'): DatePickerItemObject;

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
    set(thing: string, value?: any): DatePickerObject;
    set(things: SetThings): DatePickerObject;

    /** Bind callbacks to get fired off when the relative picker method is called. */
    on(methodName, callback: () => void ): DatePickerObject;

    /** Bind multiple callbacks at once to get fired off when the relative picker method is called. */
    on(callbackObject: CallbackObject): DatePickerObject;

    /** Trigger callbacks that have been queued up using the the on method. */
    trigger(event: string): DatePickerObject;
}

interface TimePickerObject extends PickerObject {
    open(withoutFocus?: boolean): TimePickerObject;
    close(withFocus?: boolean): TimePickerObject;

    /** Rebuild the picker. */
    start(): TimePickerObject;

    /** Destroy the picker. */
    stop(): TimePickerObject;

    /**
    * Refresh the picker box after adding something to the holder.
    * By default, only the "face" of the picker (i.e. the box element)
    * has it’s contents re-rendered. To render the entire picker from 
    * the root up, pass true as the first argument.
    */
    render(entirePicker?: boolean): TimePickerObject;

    /** Clear the value in the picker's input element. */
    clear(): TimePickerObject;

    /** Short for picker.get('value') */
    get(): string;

    /** Get the properties, objects, and states that make up the current state of the picker. */
    get(thing: string): any;

    /** Returns the string value of the picker's input element. */
    get(thing: 'value'): string;

    /** Returns the item object that is visually selected. */
    get(thing: 'select'): TimePickerItemObject;

    /** Returns the item object that is visually highlighted. */
    get(thing: 'highlight'): TimePickerItemObject;

    /** Returns the item object that sets the current view. */
    get(thing: 'view'): TimePickerItemObject;

    /** Returns the item object that limits the picker's lower range. */
    get(thing: 'min'): TimePickerItemObject;

    /** Returns the item object that limits the picker's upper range. */
    get(thing: 'max'): TimePickerItemObject;

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
    set(thing: string, value?: any): TimePickerObject;
    set(things: TimePickerSetThings): TimePickerObject;

    /** Bind callbacks to get fired off when the relative picker method is called. */
    on(methodName, callback: () => void ): TimePickerObject;

    /** Bind multiple callbacks at once to get fired off when the relative picker method is called. */
    on(callbackObject: CallbackObject): TimePickerObject;

    /** Trigger callbacks that have been queued up using the the on method. */
    trigger(event: string): TimePickerObject;
}

interface JQuery {
    pickadate(options?: pickadateOptions): HTMLInputElement;
    pickatime(options?: pickatimeOptions): HTMLInputElement;
}

interface HTMLInputElement {
    pickadate(picker: string): DatePickerObject;
    pickatime(picker: string): TimePickerObject;
}

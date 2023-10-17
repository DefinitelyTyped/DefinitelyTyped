/// <reference types="jquery"/>

export interface DatepickerPlugin<TElement = HTMLElement> {
    (): JQuery<TElement>;
}

export interface DatePickerEvent extends Event {
    namespace: "datepicker";
    view: string;
    date: Date;
}
export interface DatepickerOptions {
    /**
     * Show the datepicker automatically when initialized.
     *
     * Default: `false`
     */
    autoShow?: boolean | undefined;

    /**
     * Hide the datepicker automatically when picked.
     *
     * Default: `false`
     */
    autoHide?: boolean | undefined;

    /**
     * Pick the initial date automatically when initialized.
     *
     * Default: `false`
     */
    autoPick?: boolean | undefined;

    /**
     * Enable inline mode.
     *
     * If the element is not an input element, will append the datepicker to the element.
     * If the `container` option is set, will append the datepicker to the container.
     */
    inline?: boolean | undefined;

    /**
     * A element for putting the datepicker. If not set, the datepicker will be appended to
     * `document.body` by default.
     *
     * > Only works when the `inline` option set to `true`.
     */
    container?: Element | JQuery | string | null | undefined;

    /**
     * A element for triggering the datepicker.
     */
    trigger?: Element | JQuery | string | null | undefined;

    /**
     * The ISO language code. If not set, will use the built-in language (`en-US`) by default.
     */
    language?: string | undefined;

    /**
     * The date string format.
     *
     * Default: `mm/dd/yyyy`
     *
     * Available date placeholders:
     * * Year: `yyyy`, `yy`
     * * Month: `mm`, `m`
     * * Day: `dd`, `d`
     */
    format?: string | undefined;

    /**
     * The initial date. If not set, will use the current date by default.
     */
    date?: Date | string | undefined;

    /**
     * The start view date. All the dates before this date will be disabled.
     */
    startDate?: Date | string | undefined;

    /**
     * The end view date. All the dates after this date will be disabled.
     */
    endDate?: Date | string | undefined;

    /**
     * The start view when initialized.
     *
     * Default: `0`
     *
     * Options:
     * * `0`: days
     * * `1`: months
     * * `2`: years
     */
    startView?: 0 | 1 | 2 | undefined;

    /**
     * The start day of the week.
     *
     * Default: `0`
     * Options:
     * * `0`: Sunday
     * * `1`: Monday
     * * `2`: Tuesday
     * * `3`: Wednesday
     * * `4`: Thursday
     * * `5`: Friday
     * * `6`: Saturday
     */
    weekStart?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined;

    /**
     * Show year before month on the datepicker header.
     *
     * Default: `false`
     */
    yearFirst?: boolean | undefined;

    /**
     * A string suffix to the year number.
     */
    yearSuffix?: string | undefined;

    /**
     * Days' name of the week.
     *
     * Default: `['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']`
     */
    days?: string[] | undefined;

    /**
     * Shorter days' name.
     *
     * Default: `['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']`
     */
    daysShort?: string[] | undefined;

    /**
     * Shortest days' name.
     *
     * Default: `['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']`
     */
    daysMin?: string[] | undefined;

    /**
     * Months' name.
     *
     * Default: `['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']`
     */
    months?: string[] | undefined;

    /**
     * Shorter months' name.
     *
     * Default: `['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']`
     */
    monthsShort?: string[] | undefined;

    /**
     * A element tag for each item of years, months and days.
     *
     * Default: `li`
     */
    itemTag?: string | undefined;

    /**
     * CSS class for a muted item.
     *
     * Default: `picked`
     */
    pickedClass?: string | undefined;

    /**
     * CSS class for a disabled item.
     *
     * Default: `disabled`
     */
    disabledClass?: string | undefined;

    /**
     * CSS class for highlight date item.
     *
     * Default: `highlighted`
     */
    highlightedClass?: string | undefined;

    /**
     * The template of the datepicker.
     *
     * Default:
     * ```
     * <div class="datepicker-container">
     *   <div class="datepicker-panel" data-view="years picker">
     *     <ul>
     *     <li data-view="years prev">&lsaquo;</li>
     *     <li data-view="years current"></li>
     *     <li data-view="years next">&rsaquo;</li>
     *     </ul>
     *     <ul data-view="years"></ul>
     *   </div>
     *   <div class="datepicker-panel" data-view="months picker">
     *     <ul>
     *     <li data-view="year prev">&lsaquo;</li>
     *     <li data-view="year current"></li>
     *     <li data-view="year next">&rsaquo;</li>
     *     </ul>
     *     <ul data-view="months"></ul>
     *   </div>
     *   <div class="datepicker-panel" data-view="days picker">
     *     <ul>
     *     <li data-view="month prev">&lsaquo;</li>
     *     <li data-view="month current"></li>
     *     <li data-view="month next">&rsaquo;</li>
     *     </ul>
     *     <ul data-view="week"></ul>
     *     <ul data-view="days"></ul>
     *   </div>
     *  </div>
     * ```
     *
     * **Note**: All the data-view attributes must be set when you customize it.
     */
    template?: string | undefined;

    /**
     * The offset top or bottom of the datepicker from the element.
     *
     * Default: `10`
     */
    offset?: number | undefined;

    /**
     * The CSS `z-index` style for the datepicker.
     *
     * Default: `1`
     */
    zIndex?: number | undefined;

    /**
     * Filter each date item. If it returns `false`, the related date will be disabled.
     */
    filter?: ((date: Date, view: "day" | "month" | "year") => boolean | undefined) | undefined;

    /**
     * A shortcut of the "show.datepicker" event.
     */
    show?: ((event: DatePickerEvent) => void) | undefined;

    /**
     * A shortcut of the "hide.datepicker" event.
     */
    hide?: ((event: DatePickerEvent) => void) | undefined;

    /**
     * A shortcut of the "pick.datepicker" event.
     */
    pick?: ((event: DatePickerEvent) => void) | undefined;
}

export type DatePickerMethod =
    | "show"
    | "hide"
    | "update"
    | "pick"
    | "reset"
    | "getMonthName"
    | "getDayName"
    | "getDate"
    | "setDate"
    | "setStartDate"
    | "setEndDate"
    | "parseDate"
    | "formatDate"
    | "destroy";

declare global {
    interface JQuery<TElement = HTMLElement> {
        datepicker(options?: DatepickerOptions): DatepickerPlugin<TElement>;
        datepicker(
            method: DatePickerMethod,
            ...args: ReadonlyArray<number | boolean | Date | string>
        ): void | string | Date;
    }
}

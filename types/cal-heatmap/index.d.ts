// Type definitions for cal-heatmap v3.5.4
// Project: https://github.com/wa0x6e/cal-heatmap
// Definitions by: Chris Baker <https://github.com/RetroChrisB>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as d3 from "d3";

declare global {
    namespace CalHeatMap
    {
        interface CalHeatMapStatic
        {
            new (): CalHeatMap;
        }

        interface CalHeatMap
        {
            /**
             * Initialise the CalHeatMap with the specified options
             * @param {InitOptions} options The CalHeatMap options
             */
            init(options?: InitOptions): void;

            options: RuntimeOptions;

            // Various update mode when using the update() API
            /** Reset the whole calendar data before inserting the new data. */
            RESET_ALL_ON_UPDATE: number;
            /**
             * Update only the dates (subDomain) you pass in the data argument, replace their value by the new ones.
             * All other dates are leaved untouched.
             */
            RESET_SINGLE_ON_UPDATE: number;
            /**
             * Instead of replacing a date's value by a new one, increment it by the new value. All other dates are leaved untouched.
             * That's the one you want to use of you're populating the calendar in realtime!
             */
            APPEND_ON_UPDATE: number;

            /**
             * Shift the calendar n domains back
             * @param {number} n The number of domains to shift back. The default is 1.
             */
            previous(n?: number): void;
            /**
             * Shift the calendar n domains forward
             * @param {number} n The number of domains to shift forward. The default is 1.
             */
            next(n?: number): void;
            /**
             * Jump the calendar to the specified date
             * This method will shift the calendar backward or forward, until the domain containing the specified date is visible.
             * @param {Date} date The date to jump to.
             * @param {boolean} reset Whether to set the domain with the specified as the calendar's first domain.
             */
            jumpTo(date: Date, reset?: boolean): void;
            /** Reset the calendar back to the start date */
            rewind(): void;
            /**
             * Update the calendar with new data
             * Use update() when you want to refresh the calendar with a new set of data.
             * Particularly useful if you're filling the calendar in realtime, or if you want to display a subset of the current data.
             * @param {string|Object} data Accept the same format as the data option.
             * @param {} afterLoad Whether to execute the afterLoad() callback to convert your data into the json object, expected by cal-heatmap.
             *                     It can also directly takes a function, in case your data can not be converted with the afterLoad() function you defined.
             * @param {} updateMode Define how to insert the new data into the calendar.
             *                      Accepted values are:
             *                        Instance.RESET_ALL_ON_UPDATE  (default) Reset the whole calendar data before inserting the new data.
             *                        Instance.RESET_SINGLE_ON_UPDATE  Update only the dates (subDomain) you pass in the data argument,
             *                                                         replace their value by the new ones. All other dates are leaved untouched.
             *                        Instance.APPEND_ON_UPDATE  Instead of replacing a date's value by a new one, increment it by the new value.
             *                                                   All other dates are leaved untouched. That's the one you want to use of you're
             *                                                   populating the calendar in realtime!
             */
            update(data: string | Object, afterLoad?: boolean | Function, updateMode?: number): void;
            /**
             * Change the highlighted dates.
             * Takes an array of Date object. Can also accepts the now string, equivalent to Date.now().
             * @param {string|Date|Date[]} dates The date or dates to highlight.
             */
            highlight(dates: string | Date | Date[]): void;
            /**
             * Return the SVG source code with the appropriate CSS
             * The returned string code is valid and ready to be placed in a .svg file.
             * @returns SVG source code with the appropriate CSS.
             */
            getSVG(): string;
            /**
             * Change the legend settings and/or threshold
             * When called without arguments, setLegend() will just redraw the legend.
             * @param {} legend Same as legend : an array of thresholds
             * @param {} legendColor Same as legendColors : an object with the heatmap's colors, or an array of 2 colors
             */
            setLegend(legend?: number[], legendColors?: LegendColor | string[]): void;
            /**
             * Remove the legend from the calendar
             * Settings are kept and you can re-add the legend with the same settings using showLegend().
             */
            removeLegend(): void;
            /** Display the legend, if not already shown. */
            showLegend(): void;
            /**
             * Remove the calendar from the DOM
             * Remember to self-assign the result of destroy() to your calendar instance, or it'll lead to a memory leak.
             * @param {Function} callback function that will be executed when the calendar is removed from the DOM, at the end of the animation.
             * @returns always returns null.
             */
            destroy(callback?: Function): CalHeatMap;
        }

        interface LegendColor
        {
            /** Color of the smallest value on the legend */
            min: string;
            /** Color of the highest value on the legend */
            max: string;
            /** Color for the dates with value == 0 */
            empty?: string;
            /** Base color of the date cells */
            base?: string;
            /** Color for the special value */
            overflow?: string;
        }

        interface InitOptions
        {
            // ================================================
            // Presentation
            // ================================================

            /** DOM node to insert the calendar in. Default: "#cal-heatmap" */
            itemSelector?: string | HTMLElement | Element | EventTarget;

            /**
             * Type of domain. Default: "hour"
             * Valid domains: {"hour", "day", "week", "month", "year"}
             */
            domain?: string;

            /**
             * Type of subDomain. Default: "min"
             * Valid subDomains: {"min", "x_min", "hour", "x_hour", "day", "x_day", "week", "x_week", "month", "x_month"}
             */
            subDomain?: string;

            /** Number of domain to display. Default: 12 */
            range?: number;

            /** Size of each subDomain cell, in pixels. Default: 10 */
            cellSize?: number;

            /** Space between each subDomain cell, in pixel. Default: 2 */
            cellPadding?: number;

            /** subDomain cell's border radius, for rounder corner, in pixel. Default: 0 */
            cellRadius?: number;

            /** Space between each domain, in pixel. Default: 2 */
            domainGutter?: number;

            /**
             * Margin around each domain, in pixel. Default: [0,0,0,0]
             * Ordered like in CSS (top, right, bottom, left), it also accepts CSS like values
             */
            domainMargin?: number | number[];

            /**
             * Whether to enable domain dynamic width and height. Default: true
             * Some domain>subdomain couple, like month>days, doesn't always have the same number of
             * subDomain cells. Some months have 6 weeks, some only 4.
             * With dynamic dimension enabled, the domain width and height will be adjusted to fit the
             * domain content, whereas when it's disabled, all domains will have the same dimension : the biggest.
             */
            domainDynamicDimension?: boolean;

            /** To display the calendar vertically, with each domain one under the other. Default: false */
            verticalOrientation?: boolean;

            /** Position and alignment of the domain label. */
            label?: Label;

            /**
             * Control the number of columns to split the domain dates into. Default: null
             * Each domain is split into an arbitrary number of columns (or rows depending on the
             * reading direction). You can overwrite that number with colLimit, and force all dates on the
             * same line, or split them into more columns.
             * That setting limit the maximum number of columns, and doesn't necessary means that each rows will
             * contains that number of columns.
             */
            colLimit?: number;

            /** Control the number of rows to split the domain dates into. Default: null
             * If rowLimit and colLimit are both used, rowLimit will be ignored. */
            rowLimit?: number;

            /** Whether to display a tooltip when hovering over a date. Default: false */
            tooltip?: boolean;

            // ================================================
            // Data
            // ================================================

            /**
             * Starting date of the calendar. Default: new Date()
             * It doesn't have to be precise, the calendar will not start at that date, but at the first domain containing that date.
             */
            start?: Date;
            /**
             * Data used to fill the calendar. Default: ""
             * String is interpreted as a URL to an API, which should be returning the data used to fill the calendar.
             */

            data?: string | Object;

            /**
             * Engine used to parse the data. Default: json
             * Valid values:
             *  "json" - Interpret the data as json.
             *  "csv"  - Interpret the data as csv.
             *  "tsv"  - Interpret the data exactly like csv, but are delimited with a tab character, instead of comma.
             *  "txt"  - Just return the data as a string.
             */
            dataType?: string;

            /**
             * Highlight selected subDomain cells. Default: false
             * Takes an array of Date object. Can also accepts the now string, equivalent to Date.now().
             */
            highlight?: string | string[] | Date[] | any[];

            /** Whether to start the week on Monday, instead of Sunday. Default: true */
            weekStartOnMonday?: boolean;

            /**
             * Lower limit of the domain navigation, preventing navigating beyond a certain date. Default: null
             * When set, calling previous() will only work only until the leftmost domain containing minDate.
             * Like with start, minDate does not have to be precise, and just have to be a date inside the domain.
             * previous() will always return true, unless the domain containing minDate is reached, in which case, it'll return false.
             */
            minDate?: Date;

            /** Upper limit of the domain navigation, preventing navigating beyond a certain date. Default: null */
            maxDate?: Date;

            /**
             * Whether to consider missing date:value couple in the data source as equal to 0.  Default: false
             * By default, when the a date is not associated to a value, it's considered as null, and rendered as a no value cell.
             * You should ask yourself, if the API is not returning result for a date, is it because there is really no value
             * associated to this date, or because it's supposed to be equal to 0, and it's skipped in order to save bandwidth ?
             */
            considerMissingDataAsZero?: boolean;

            // ================================================
            // Legend
            // ================================================

            /** Assign each range of values to a color. Default: [10, 20, 30, 40] */
            legend?: number[];

            /** Whether to display the legend. Default: true */
            displayLegend?: boolean;

            /** Size of the legend cells, in pixels. Default: 10 */
            legendCellSize?: number;

            /** Padding between each legend cell, in pixels. Default: 2 */
            legendCellPadding?: number;

            /** Margin around the legend, in pixels. Default: [10, 0, 0, 0] */
            legendMargin?: number | number[];

            /**
             * Vertical position of the legend. Default: "bottom"
             * Valid values:
             *  "top"    - Place the legend above the calendar
             *  "center" - Place the legend on the calendar's side
             *             Use with legendHorizontalPosition, to position the legend on the left (default) or on the right.
             *  "bottom" - Place the legend on below the calendar
             */
            legendVerticalPosition?: string;

            /**
             * Horizontal position of the legend. Default: "left"
             * Valid values:
             *  "left"   - Align the legend to the left
             *  "center" - Center the legend
             *  "right"  - Align the legend to the right
             */
            legendHorizontalPosition?: string;

            /**
             * Orientation of the legend. Default: "horizontal"
             * legendOrientation is best used together with legendHorizontalPosition when the legend is positioned on the side.
             * Valid values:
             *  "horizontal" - Legend is displayed horizontally, from left to right
             *  "vertical"   - Legend is displayed vertically, from top to bottom
             */
            legendOrientation?: string;

            /**
             * Set of colors to automagically compute the heatmap colors.
             * Instead of relying on the CSS for your heatmap's colors, you can also set the heatmap's colors directly with
             * cal-heatmap on initialization, or even dynamically change them after.
             * All legend settings can be changed dynamically after calendar initialisation, with setLegend().
             */
            legendColors?: LegendColor | string[];

            // ================================================
            // i18n
            // ================================================

            /**
             * Name of the entity you're representing on the calendar.
             * Takes an array of string, with the first index as the singular form, and the second index the plural form.
             * For the lazy, you can also pass a simple string, ar a single element array, and it'll automatically guess
             * the plural form, as long as it's the singular form plus the "s" suffix.
             */
            itemName?: string | string[];
            /**
             * Format of the title displayed when hovering a subDomain.
             * Some template strings are available, and enclosed in braces.
             *  {name}       Name of the entity represented in the calendar (see itemName)
             *  {count}      The value associated to the date.
             *  {date}       The date of the cell. It's automatically formatted according to the type of subDomain.
             *               See subDomainDateFormat to further customize that date formatting.
             *  {connector}  An English preposition placed before a datetime (on Monday, at 15:00, etc.). Each subDomain
             *               have their own default connector, corresponding to the default date format.
             */
            subDomainTitleFormat?: SubDomainFormatTemplates;
            /**
             * Format of the {date} template string inside subDomainTitleFormat.
             * {date} is by default formatted according to the subDomain type.
             * subDomainFormat can accept any string with directive accepted by d3.time.format(), like "%Y-%m-%d".
             * As d3.time.format() will only output English dates, subDomainDateFormat can also accept a function,
             * with the subDomain date as the argument.
             */
            subDomainDateFormat?: string | Function;
            /**
             * Format of the text inside a subDomain cell.
             * Disabled by default, you can display a text inside each subDomain cell.
             * Works exactly like subDomainDateFormat, except that the function takes the cell value as second argument.
             */
            subDomainTextFormat?: string | Function;
            /**
             * Format of the domain label.
             * Works exactly like subDomainDateFormat, and will format the domain label with any string accepted by d3.time.format(), or a function.
             * To not display the domain label, set domainLabelFormat to "" (empty string).
             */
            domainLabelFormat?: string | Function;
            /**
             * Formatting of the legend title, displayed when hovering a legend cell.
             * Some template strings are available, and enclosed in braces.
             *  {name}  Name of the entity represented in the calendar (see itemName)
             *  {min}   The first value of the legend array.
             *  {max}   The last value of the legend array.
             *  {down}  The lower bound of a color
             *  {up}    The upper bound of a color
             */
            legendTitleFormat?: LegendTitleTemplates;

            // ================================================
            // Other
            // ================================================

            /** Animation duration, in milliseconds. Default value: 500 */
            animationDuration?: number;
            /**
             * Will attach the previous() event to the specified element, on a mouse click, shifting the calendar one domain back. Default value: false
             * If you want to shift by more than one domain, see the previous() method.
             */
            previousSelector?: string | HTMLElement;
            /**
             * Will attach the next() event to the specified element, on a mouse click, shifting the calendar one domain forward. Default value: false
             * If you want to shift by more than one domain, see the next() method.
             */
            nextSelector?: string | HTMLElement;
            /**
             * The calendar instance namespace.
             * If you have more than one instance of Cal-Heatmap, you should assign each instance its own namespace, in order to isolate each instance event handler.
             */
            itemNamespace?: string;

            // ================================================
            // Events
            // ================================================

            /** Called after a mouse click event on a subDomain cell. */
            onClick?: (date: Date, value: number) => void;
            /** Called after drawing the empty calendar, and before filling it with data. */
            afterLoad?: () => void;
            /**
             * Called after shifting the calendar one domain back.
             * The date argument is the start date of the domain that was added.
             */
            afterLoadPreviousDomain?: (date: Date) => void;
            /**
             * Called after shifting the calendar one domain forward.
             * The date argument is the start date of the domain that was added.
             */
            afterLoadNextDomain?: (date: Date) => void;
            /**
             * Called after drawing and filling the calendar.
             * Useful in case you're loading data via ajax, as it's loading data asynchronously. This event will wait for the ajax
             * request to complete before triggering.
             * This event will only trigger once, on the initial setup. See afterLoadPreviousDomain and afterLoadNextDomain for
             * callback events after a domain navigation.
             */
            onComplete?: () => void;
            /**
             * Called after getting the data from source, but before filling the calendar.
             * This callback must return a json object formatted in the expected data format.
             * afterLoadData() is used to do some works on the data, especially when the data source is not returning data in the expected format.
             */
            afterLoadData?: (data: any) => DataFormat;
            /**
             * Triggered after previous(), when the incoming domain is containing minDate.
             * When the leftmost domain set by minDate is loaded into the calendar, onMinDomainReached() will be triggered with true as argument.
             * This event is useful if you want to disable your previous button, since there is no more previous domains to load.
             * In order to reverse the action, onMinDomainReached() will be called with false as argument afer next(), only once, and only if the
             * leftmost domain is not the lower limit domain anymore.
             */
            onMinDomainReached?: (reached: boolean) => void;
            /**
             * Triggered after next(), when the incoming domain is containing maxDate.
             * See onMinDomainReached().
             */
            onMaxDomainReached?: (reached: boolean) => void;
        }

        interface RuntimeOptions extends InitOptions
        {
            /** Margin around each domain, in pixels. Ordered like in CSS (top, right, bottom, left) */
            domainMargin: number[];
            /** Margin around the legend, in pixels. Ordered like in CSS (top, right, bottom, left) */
            legendMargin: number[];
            /** List of dates to highlight */
            highlight: Date[];
            /**
             * Name of the items to represent in the calendar.
             * First index is singular form, and the second index, the plural form.
             */
            itemName: string[];
        }

        interface LegendTitleTemplates
        {
            /** Formatting of the smallest (leftmost) value of the legend. Default value: "less than {min} {name}" */
            lower?: string;
            /** Formatting of all the value but the first and the last. Default value: "between {down} and {up} {name}" */
            inner?: string;
            /** Formatting of the biggest (rightmost) value of the legend. Default value: "more than {max} {name}" */
            upper?: string;
        }

        interface SubDomainFormatTemplates
        {
            /** Format of the title when there is no value associated to the date. Default value: "{date}" */
            empty?: string;
            /** Format of the title when it's associated to a value. Default value: "{count} {name} {connector} {date}" */
            filled?: string;
        }

        interface DataFormat
        {
            /** timestamp are in seconds, value can be any number (integer or float) */
            [timestamp: string]: number;
        }

        interface LabelOffset
        {
            x: number;
            y: number;
        }

        /** Position and alignment of the domain label. */
        interface Label
        {
            /**
             * Position of the label, relative to the domain. Default: "bottom"
             * Valid values: {"top", "right", "bottom", "left"}
             */
            position?: string;

            /**
             * Horizontal align of the domain. Default: "center"
             * Valid values: {"left", "center", "right"}
             */
            align?: string;
            /**
             * Rotation for a vertical label. Default: null
             * Valid values: {null, "left", "right"}
             */
            rotate?: string;
            /**
             * Only used when label is rotated, defines the width of the label. Default: 100
             * Valid values: any intger
             */
            width?: number;
            /**
             * More control about label positioning, if the default value does not fit your need,
             * especially when label is rotated, or when using a big font-size. Default: {x:0, y:0}
             */
            offset?: LabelOffset;
            /**
             * Height of the domain label in pixels.
             * By leaving it to null, the label will be set to 2 times the height of the subDomain cell.
             * If you want to remove the label, set domainLabelFormat to "" (empty string), instead
             * of setting the label height to 0. Default: null
             * Valid values: any integer
             */
            height?: number;
        }
    }

    var CalHeatMap: CalHeatMap.CalHeatMapStatic;
}

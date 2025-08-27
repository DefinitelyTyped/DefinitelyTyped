import AmChart from "./AmChart";

export default class PeriodSelector {
    /**
     * Date format of date input fields.
     * Check [[http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/mx/formatters/DateFormatter.html
     * @default "DD-MM-YYYY"
     */
    dateFormat: string;
    /**
     * Text displayed next to "from" date input field. From:
     */
    fromText: string;
    /**
     * Specifies if period buttons with date range bigger than available data should be hidden.
     * @default true
     */
    hideOutOfScopePeriods: boolean;
    /**
     * Specifies whether period selector displays "from" and "to" date input fields.
     * @default true
     */
    inputFieldsEnabled: boolean;
    /**
     * Width of date input fields, in pixels. Works only if period selector is horizontal.
     * @default 100
     */
    inputFieldWidth: number;
    /**
     * Array of predefined period objects. Period object has 4 properties - period, count, label and selected.
     * Possible period values are:
     * "ss" - seconds,
     * "mm" - minutes,
     * "hh" - hours,
     * "DD" - days,
     * "MM" - months,
     * "YYYY" - years.
     * Property "count" specifies how many periods this button will select.
     * "label" will be displayed on a button.
     * "selected" is a boolean which specifies if this button is selected when chart is initialized or not.
     * Example: {period:"DD", count:10, label:"10 days", selected:false}.
     */
    periods: any[];
    /**
     * Text displayed next to predefined period buttons. Zoom:
     */
    periodsText: string;
    /**
     * Possible values: "right", "left", "top", "bottom". bottom
     */
    position: string;
    /**
     * Specifies whether predefined period buttons should select a period from the beginning or the end of the data.
     */
    selectFromStart: boolean;
    /**
     * Text displayed next to "to" date input field. To:
     */
    toText: string;
    /**
     * Width of a period selector, when position is "left" or "right".
     * @default 180
     */
    width: number;

    /**
     * Adds event listener to the object.
     * @param handler - Dispatched when dates in period selector input fields are changed or
     * user clicks on one of the predefined period buttons.
     */
    addListener(
        type: string,
        handler: (
            e: {
                type: string;
                startDate: Date;
                endDate: Date;
                predefinedPeriod: string;
                count: number;
            },
        ) => void,
    ): void;

    /**
     * Removes event listener from chart object.
     */
    removeListener(chart: AmChart, type: string, handler: any): void;
}

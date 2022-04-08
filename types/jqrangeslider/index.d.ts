// Type definitions for jQRangeSlider 5.7.2
// Project: http://ghusse.github.com/jQRangeSlider
// Definitions by: Dániel Tar <https://github.com/qcz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery"/>
/// <reference types="jqueryui"/>

interface JQRangeSliderNumericRange {
    min?: number;
    max?: number;
}

interface JQRangeSliderDateRange {
    min?: Date;
    max?: Date;
}

interface JQRangeSliderRangeLength {
    min?: any;
    max?: any;
}

interface JQRangeSliderDateSteps {
    years?: number;
    months?: number;
    weeks?: number;
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
}

interface jQRangeSliderScale {
    first?: (min:number, max:number) => number; // compute the ruler first value.
    next: (value:any) => any; // compute the next value.
    label?: (value:any, nextValue:any) => string; // compute displayed text for a given internal
    stop?: (value:any) => boolean; // 'true' to stop scale generating ticks from a given value
    format?: (tickContainer:any, tickStartValue:any, tickEndValue:any) => void; // customise the tick container DOM element (passed as jQuery object)
    // doco example mentions 'end' function in example but it's not supported: https://github.com/ghusse/jQRangeSlider/blob/master/jQRuler.js#L12
}

interface JQRangeSliderOptions {
    wheelMode?: string; // function of the wheel, "zoom", "scroll" or null
    wheelSpeed?: number; // speed of the wheel scrolling
    arrows?: boolean; // hide the arrows or not
    valueLabels?: string; // when to show value labels: "show" (always), "hide" (never) and "change" (only if slider changed)
    durationIn?: number; // fade in length when displaying value labels (only when valueLabels = "change")
    durationOut?: number; // fade out length when displaying value labels (only when valueLabels = "change")
    delayOut?: number; // duration labels are shown after the user changed its values (only when valueLabels = "change")
    range?: boolean | JQRangeSliderRangeLength; // lets you specify minimum and/or maximum range length
    symmetricPositionning?: boolean; // show handles and make them clearly select the range. Warning: must be used with 'minimum' and must not be used with 'scale'
    enabled?: boolean; // configure a read-only slider
    scales?: jQRangeSliderScale[]; // TODO support scales
}

interface JQNumericRangeSliderOptions extends JQRangeSliderOptions {
    bounds?: JQRangeSliderNumericRange; // min and max values of the slider
    defaultValues?: JQRangeSliderNumericRange; // values selected by default on construction
    formatter?: (int: number) => string; // customize displayed label text
    step?: number; // allows to customize values rounding, and graphically render this rounding
}

interface JQEditRangeSliderOptions extends JQNumericRangeSliderOptions {
    type?: string; // specify input types in edit slider. Possible values are text (default) and number
}

interface JQDateRangeSliderOptions extends JQRangeSliderOptions {
    bounds?: JQRangeSliderDateRange; // min and max values of the slider
    defaultValues?: JQRangeSliderDateRange; // values selected by default on construction
    formatter?: (date: Date) => string; // customize displayed label text
    step?: JQRangeSliderDateSteps; // allows to customize values rounding, and graphically render this rounding
}

interface JQuery {
    rangeSlider(method: string): any;
    rangeSlider(method: string, value: number): JQuery;
    rangeSlider(method: string, min: number, max: number): JQuery;
    rangeSlider(options?: JQNumericRangeSliderOptions): JQuery;

    editRangeSlider(method: string): any;
    editRangeSlider(method: string, value: number): JQuery;
    editRangeSlider(method: string, min: number, max: number): JQuery
    editRangeSlider(options?: JQEditRangeSliderOptions): JQuery;

    dateRangeSlider(method: string): any;
    dateRangeSlider(method: string, value: Date): JQuery;
    dateRangeSlider(method: string, min: Date, max: Date): JQuery
    dateRangeSlider(options?: JQDateRangeSliderOptions): JQuery;
}

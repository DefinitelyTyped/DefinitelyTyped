// Type definitions for jQRangeSlider 4.2.8
// Project: http://ghusse.github.com/jQRangeSlider
// Definitions by: Dániel Tar https://github.com/qcz
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts"/>
/// <reference path="../jqueryui/jqueryui.d.ts"/>

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

interface JQRangeSliderOptions {
    wheelMode?: string; // function of the wheel, "zoom", "scroll" or null
    wheelSpeed?: number; // speed of the wheel scrolling
    arrows?: bool; // hide the arrows or not
    valueLabels?: string; // when to show value labels: "show" (always), "hide" (never) and "change" (only if slider changed)
    durationIn?: number; // fade in length when displaying value labels (only when valueLabels = "change")
    durationOut?: number; // fade out length when displaying value labels (only when valueLabels = "change")
    delayOut?: number; // duration labels are shown after the user changed its values (only when valueLabels = "change")
    range?: JQRangeSliderRangeLength; // lets you specify minimum and/or maximum range length
}

interface JQNumericRangeSliderOptions extends JQRangeSliderOptions {
    bounds?: JQRangeSliderNumericRange; // min and max values of the slider
    defaultValues?: JQRangeSliderNumericRange; // values selected by default on construction
    formatter?: (integer) => string; // customize displayed label text
    step?: number; // allows to customize values rounding, and graphically render this rounding
}

interface JQDateRangeSliderOptions extends JQRangeSliderOptions {
    bounds?: JQRangeSliderDateRange; // min and max values of the slider
    defaultValues?: JQRangeSliderDateRange; // values selected by default on construction
    formatter?: (Date) => string; // customize displayed label text
    step?: JQRangeSliderDateSteps; // allows to customize values rounding, and graphically render this rounding
}

interface JQuery {
    rangeSlider(options?: JQNumericRangeSliderOptions): JQuery;
    rangeSlider(method: string): any;
    rangeSlider(method: string, value: number): JQuery;
    rangeSlider(method: string, min: number, max: number): JQuery;

    editRangeSlider(options?: JQNumericRangeSliderOptions): JQuery;
    editRangeSlider(method: string): any;
    editRangeSlider(method: string, value: number): JQuery;
    editRangeSlider(method: string, min: number, max: number): JQuery;

    dateRangeSlider(options?: JQRangeSliderOptions): JQuery;
    dateRangeSlider(method: string): any;
    dateRangeSlider(method: string, value: Date): JQuery;
    dateRangeSlider(method: string, min: Date, max: Date): JQuery;
}

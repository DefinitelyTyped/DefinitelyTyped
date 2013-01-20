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
    wheelMode?: string;
    wheelSpeed?: number;
    arrows?: bool;
    valueLabels?: string;
    durationIn?: number;
    durationOut?: number;
    delayOut?: number;
    range?: JQRangeSliderRangeLength;
}

interface JQNumericRangeSliderOptions extends JQRangeSliderOptions {
    bounds?: JQRangeSliderNumericRange;
    defaultValues?: JQRangeSliderNumericRange;
    formatter?: (integer) => string;
    step?: number;
}

interface JQDateRangeSliderOptions extends JQRangeSliderOptions {
    bounds?: JQRangeSliderDateRange;
    defaultValues?: JQRangeSliderDateRange;
    formatter?: (Date) => string;
    step?: JQRangeSliderDateSteps;
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

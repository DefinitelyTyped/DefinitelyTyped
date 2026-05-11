/// <reference types="jquery"/>
/// <reference types="jqueryui"/>

interface JQRangeSliderNumericRange {
    min?: number | undefined;
    max?: number | undefined;
}

interface JQRangeSliderDateRange {
    min?: Date | undefined;
    max?: Date | undefined;
}

interface JQRangeSliderRangeLength {
    min?: any;
    max?: any;
}

interface JQRangeSliderDateSteps {
    years?: number | undefined;
    months?: number | undefined;
    weeks?: number | undefined;
    days?: number | undefined;
    hours?: number | undefined;
    minutes?: number | undefined;
    seconds?: number | undefined;
}

interface jQRangeSliderScale {
    first?: ((min: number, max: number) => number) | undefined; // compute the ruler first value.
    next: (value: any) => any; // compute the next value.
    label?: ((value: any, nextValue: any) => string) | undefined; // compute displayed text for a given internal
    stop?: ((value: any) => boolean) | undefined; // 'true' to stop scale generating ticks from a given value
    format?: ((tickContainer: any, tickStartValue: any, tickEndValue: any) => void) | undefined; // customise the tick container DOM element (passed as jQuery object)
    // doco example mentions 'end' function in example but it's not supported: https://github.com/ghusse/jQRangeSlider/blob/master/jQRuler.js#L12
}

interface JQRangeSliderOptions {
    wheelMode?: string | undefined; // function of the wheel, "zoom", "scroll" or null
    wheelSpeed?: number | undefined; // speed of the wheel scrolling
    arrows?: boolean | undefined; // hide the arrows or not
    valueLabels?: string | undefined; // when to show value labels: "show" (always), "hide" (never) and "change" (only if slider changed)
    durationIn?: number | undefined; // fade in length when displaying value labels (only when valueLabels = "change")
    durationOut?: number | undefined; // fade out length when displaying value labels (only when valueLabels = "change")
    delayOut?: number | undefined; // duration labels are shown after the user changed its values (only when valueLabels = "change")
    range?: boolean | JQRangeSliderRangeLength | undefined; // lets you specify minimum and/or maximum range length
    symmetricPositionning?: boolean | undefined; // show handles and make them clearly select the range. Warning: must be used with 'minimum' and must not be used with 'scale'
    enabled?: boolean | undefined; // configure a read-only slider
    scales?: jQRangeSliderScale[] | undefined; // TODO support scales
}

interface JQNumericRangeSliderOptions extends JQRangeSliderOptions {
    bounds?: JQRangeSliderNumericRange | undefined; // min and max values of the slider
    defaultValues?: JQRangeSliderNumericRange | undefined; // values selected by default on construction
    formatter?: ((int: number) => string) | undefined; // customize displayed label text
    step?: number | undefined; // allows to customize values rounding, and graphically render this rounding
}

interface JQEditRangeSliderOptions extends JQNumericRangeSliderOptions {
    type?: string | undefined; // specify input types in edit slider. Possible values are text (default) and number
}

interface JQDateRangeSliderOptions extends JQRangeSliderOptions {
    bounds?: JQRangeSliderDateRange | undefined; // min and max values of the slider
    defaultValues?: JQRangeSliderDateRange | undefined; // values selected by default on construction
    formatter?: ((date: Date) => string) | undefined; // customize displayed label text
    step?: JQRangeSliderDateSteps | undefined; // allows to customize values rounding, and graphically render this rounding
}

interface JQuery {
    rangeSlider(method: string): any;
    rangeSlider(method: string, value: number): JQuery;
    rangeSlider(method: string, min: number, max: number): JQuery;
    rangeSlider(options?: JQNumericRangeSliderOptions): JQuery;

    editRangeSlider(method: string): any;
    editRangeSlider(method: string, value: number): JQuery;
    editRangeSlider(method: string, min: number, max: number): JQuery;
    editRangeSlider(options?: JQEditRangeSliderOptions): JQuery;

    dateRangeSlider(method: string): any;
    dateRangeSlider(method: string, value: Date): JQuery;
    dateRangeSlider(method: string, min: Date, max: Date): JQuery;
    dateRangeSlider(options?: JQDateRangeSliderOptions): JQuery;
}

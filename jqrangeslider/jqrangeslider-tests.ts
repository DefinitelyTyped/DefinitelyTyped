/// <reference path="../jquery/jquery.d.ts"/>
/// <reference path="jqrangeslider.d.ts"/>

// Arrows
$("#arrowsExample").rangeSlider({ arrows: false });
$("#arrowsExample").editRangeSlider({ arrows: false });
$("#arrowsExample").dateRangeSlider({ arrows: false });
// Bounds
$("#boundsExample").rangeSlider({ bounds: { min: 10, max: 90 } });
$("#boundsExample").editRangeSlider({ bounds: { min: 10, max: 90 } });
$("#boundsExample").dateRangeSlider({
    bounds: {
        min: new Date(2012, 0, 1),
        max: new Date(2012, 11, 31)
    }
});
// Default values
$("#defaultValuesExample").rangeSlider({ defaultValues: { min: 10, max: 90 } });
$("#defaultValuesExample").editRangeSlider({ defaultValues: { min: 10, max: 90 } });
$("#defaultValuesExample").dateRangeSlider({
    defaultValues: {
        min: new Date(2012, 0, 1),
        max: new Date(2012, 11, 31)
    }
});
// Delay out
$("#delayExample").rangeSlider({
    valueLabels: "change",
    delayOut: 4000
});
$("#delayExample").editRangeSlider({
    valueLabels: "change",
    delayOut: 4000
});
$("#delayExample").dateRangeSlider({
    valueLabels: "change",
    delayOut: 4000
});
// Duration in/out
$("#durationExample").rangeSlider({
    valueLabels: "change",
    durationIn: 1000,
    durationOut: 1000
});
$("#defaultValuesExample").editRangeSlider({
    valueLabels: "change",
    durationIn: 1000,
    durationOut: 1000
});
$("#defaultValuesExample").dateRangeSlider({
    valueLabels: "change",
    durationIn: 1000,
    durationOut: 1000
});
// Formatter - JS-way
$("#formatterExample").rangeSlider({
    formatter: function (val) {
        var value = Math.round(val * 5) / 5,
        decimal = value - Math.round(val);
        return decimal == 0 ? value.toString() + ".0" : value.toString();
    }
});
$("#formatterExample").editRangeSlider({
    formatter: function (val) {
        var value = Math.round(val * 5) / 5,
        decimal = value - Math.round(val);
        return decimal == 0 ? value.toString() + ".0" : value.toString();
    }
});
$("#formatterExample").dateRangeSlider({
    formatter: function (val) {
        var days = val.getDay(),
        month = val.getMonth() + 1,
        year = val.getYear();
        return days + "/" + month + "/" + year;
    }
});
// Formatter - TS-way
$("#formatterExample").rangeSlider({
    formatter: (val: number) => {
        var value = Math.round(val * 5) / 5,
        decimal = value - Math.round(val);
        return decimal == 0 ? value.toString() + ".0" : value.toString();
    }
});
$("#formatterExample").editRangeSlider({
    formatter: (val: number) => {
        var value = Math.round(val * 5) / 5,
        decimal = value - Math.round(val);
        return decimal == 0 ? value.toString() + ".0" : value.toString();
    }
});
$("#formatterExample").dateRangeSlider({
    formatter: (val: Date) => {
        var days = val.getDay(),
        month = val.getMonth() + 1,
        // https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/getYear#Description
        // getYear is no longer used and has been replaced by the getFullYear method.
        // year = val.getYear();
        year = val.getFullYear();
        return days + "/" + month + "/" + year;
    }
});
// Range
$("#rangeExample").rangeSlider({range: {min: 10, max: 40}});
$("#rangeExample").editRangeSlider({range: {min: 10, max: 40}});
$("#rangeExample").dateRangeSlider({
    range: {
        min: { days: 2 },
        max: { days: 7 }
    }
});
$("#rangeExample").rangeSlider({range: {min: 10}});
$("#rangeExample").rangeSlider({range: {min: 10, max: false}});
$("#rangeExample").rangeSlider({range: false});
$("#rangeExample").rangeSlider({range: {min: false, max: false}});
$("#rangeExample").rangeSlider({range: {min: false}});
// Step
$("#stepExample").rangeSlider({step: 10});
$("#rangeExample").dateRangeSlider({
    step: {
        days: 2
    }
});
// Value labels
$("#valueLabelsExample").rangeSlider({valueLabels: "change"});
$("#valueLabelsExample").dateRangeSlider({valueLabels: "change"});
// Wheel mode
$("#wheelModeExample").rangeSlider({wheelMode: "zoom"});
$("#wheelModeExample").rangeSlider({wheelMode: null});
// Wheel speed
$("#wheelSpeedExample").rangeSlider({wheelMode: "scroll", wheelSpeed: 30});
$("#wheelSpeedExample").dateRangeSlider({wheelMode: "scroll", wheelSpeed: 30});

// Get bounds
var basicSliderBounds: JQRangeSliderNumericRange = $("#slider").rangeSlider("bounds");
console.log(basicSliderBounds.min + " " + basicSliderBounds.max);
var editSliderBounds: JQRangeSliderNumericRange = $("#editSlider").editRangeSlider("bounds");
console.log(editSliderBounds.min + " " + editSliderBounds.max);
var dateSliderBounds: JQRangeSliderDateRange = $("#dateSlider").dateRangeSlider("bounds");
console.log(dateSliderBounds.min.toString() + " " + dateSliderBounds.max.toString());

// Set bounds
$("#slider").rangeSlider("bounds", 10, 20);
$("#editSlider").editRangeSlider("bounds", 20, 100);
$("#dateSlider").dateRangeSlider("bounds", new Date(2012, 0, 1), new Date(2012, 0, 31));

// Get min/max
var basicSliderMin: number = $("#slider").rangeSlider("min");
console.log(basicSliderMin);
var editSliderMin: number = $("#editSlider").editRangeSlider("min");
console.log(editSliderMin);
var dateSliderMax: Date = $("#dateSlider").dateRangeSlider("max");
console.log(dateSliderMax.toString());

// Set min/max
$("#slider").rangeSlider("min", 10);
$("#editSlider").editRangeSlider("min", 20);
$("#dateSlider").dateRangeSlider("max", new Date(2012, 1, 1));


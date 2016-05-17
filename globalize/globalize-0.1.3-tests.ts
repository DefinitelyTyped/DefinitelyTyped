/// <reference path="globalize-0.1.3.d.ts" />
module Tests {
    Globalize.culture('en-US');
    Globalize.addCultureInfo('nb-NO', 'no', { messages: {Test: "Test"} });
    var cult = Globalize.findClosestCulture('nb-NO');
    var numberString = Globalize.format(1.245, 'n2');
    var testString = Globalize.localize('Test');
    var dateParsed = Globalize.parseDate('2016-02-03');
    var intParsed = Globalize.parseInt('123');
    var floatParsed = Globalize.parseFloat('12.3');
}
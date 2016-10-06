/// <reference path="angular-sanitize.d.ts" />

///////////////////////////////////////////////////////////////////////////////
// Variables
///////////////////////////////////////////////////////////////////////////////
let shouldBeString: string;
let testInputText: string = 'TEST';

///////////////////////////////////////////////////////////////////////////////
// Test sanitize service
///////////////////////////////////////////////////////////////////////////////
declare let $sanitizeService: ng.sanitize.ISanitizeService;
shouldBeString = $sanitizeService(testInputText);

///////////////////////////////////////////////////////////////////////////////
// Test `linky` filter
///////////////////////////////////////////////////////////////////////////////
declare let $linky: ng.sanitize.filter.ILinky;

// Should be string for simple text and target parameters
shouldBeString = $linky(testInputText, testInputText);

// Should be string for simple text, target and attributes parameters
let attributesAsFunction = () => {
};
shouldBeString = $linky(shouldBeString, testInputText, {
    "attributeKey1": "attributeValue1",
    "attributeKey2": "attributeValue2"
});
shouldBeString = $linky(shouldBeString, testInputText, (url: string) => {
    return {"attributeKey1": "attributeValue1"}
});
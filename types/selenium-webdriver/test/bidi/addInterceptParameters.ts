import { AddInterceptParameters } from "selenium-webdriver/bidi/addInterceptParameters";

function testAddInterceptParametersMethodChaining() {
    const addInterceptParams = new AddInterceptParameters("request")
        .urlStringPattern("https://example.com/*")
        .urlStringPatterns(["https://example.com/*", "https://test.com/*"]);

    if (!(addInterceptParams instanceof AddInterceptParameters)) {
        console.error("Failed: Method chaining does not return AddInterceptParameters");
    } else {
        console.log("Passed: Method chaining works as expected for AddInterceptParameters");
    }
}

testAddInterceptParametersMethodChaining();

function testAddInterceptParametersAsMap() {
    const addInterceptParams = new AddInterceptParameters("request")
        .urlStringPattern("https://example.com/*")
        .urlStringPatterns(["https://example.com/*", "https://test.com/*"]);

    const map = addInterceptParams.asMap();
    if (!(map instanceof Map)) {
        console.error("Failed: asMap() does not return a Map");
    } else {
        console.log("Passed: asMap() returns a Map as expected");
    }
}

testAddInterceptParametersAsMap();

function testAddInterceptParametersParameterTypes() {
    try {
        const addInterceptParams = new AddInterceptParameters("request");
        addInterceptParams.urlStringPattern("https://example.com/*"); // Valid type
        addInterceptParams.urlStringPatterns(["https://example.com/*", "https://test.com/*"]); // Valid type

        console.log("Passed: AddInterceptParameters method parameters are correctly typed");
    } catch (e) {
        console.error("Failed: AddInterceptParameters method parameters typing issue", e);
    }
}

testAddInterceptParametersParameterTypes();

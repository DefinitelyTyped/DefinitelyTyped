import { UrlPattern } from "selenium-webdriver/bidi/urlPattern";

function testMethodChaining() {
    const urlPattern = new UrlPattern()
        .protocol("https")
        .hostname("example.com")
        .port(8080)
        .pathname("/home")
        .search("?query=123");

    if (!(urlPattern instanceof UrlPattern)) {
        console.error("Failed: Method chaining does not return UrlPattern");
    } else {
        console.log("Passed: Method chaining works as expected");
    }
}

function testAsMap() {
    const urlPattern = new UrlPattern()
        .protocol("https")
        .hostname("example.com")
        .port(8080)
        .pathname("/home")
        .search("?query=123");

    const map = urlPattern.asMap();
    if (!(map instanceof Map)) {
        console.error("Failed: asMap() does not return a Map");
    } else if (map.get("protocol") !== "https" || map.get("hostname") !== "example.com") {
        console.error("Failed: Map does not contain expected values");
    } else {
        console.log("Passed: asMap() returns the correct Map with expected values");
    }
}

function testParameterTypes() {
    const urlPattern = new UrlPattern();

    try {
        urlPattern.protocol("http"); // Valid type
        urlPattern.hostname("localhost"); // Valid type
        urlPattern.port(8080); // Valid type
        urlPattern.pathname("/test"); // Valid type
        urlPattern.search("?id=123"); // Valid type

        console.log("Passed: Method parameters are correctly typed");
    } catch (e) {
        console.error("Failed: Method parameters typing issue", e);
    }
}

function testMapTypes() {
    const urlPattern = new UrlPattern()
        .protocol("https")
        .hostname("example.com")
        .port(8080)
        .pathname("/home")
        .search("?query=123");

    const result = urlPattern.asMap();
    const protocol = result.get("protocol");
    const port = result.get("port");

    if (typeof protocol !== "string" || typeof port !== "string") {
        console.error("Failed: Map return types are not correct");
    } else {
        console.log("Passed: Map return types are correct");
    }
}

// Run tests
testMethodChaining();
testAsMap();
testParameterTypes();
testMapTypes();

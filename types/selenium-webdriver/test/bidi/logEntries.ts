import { BaseLogEntry, ConsoleLogEntry, GenericLogEntry, JavascriptLogEntry } from "selenium-webdriver/bidi/logEntries";

{
    // $ExpectType BaseLogEntry
    const baseLogEntry = new BaseLogEntry("info", { realm: "" }, "hello", 1234, "");

    // $ExpectType string
    baseLogEntry.level;

    // $ExpectType Source
    baseLogEntry.source;

    // $ExpectType string
    baseLogEntry.text;

    // $ExpectType number
    baseLogEntry.timeStamp;

    // $ExpectType string
    baseLogEntry.stackTrace;
}

{
    // $ExpectType GenericLogEntry
    const genericLogEntry = new GenericLogEntry("info", { realm: "" }, "hello", 1234, "type", "");

    // $ExpectType string
    genericLogEntry.type;

    // $ExpectType string
    genericLogEntry.level;

    // $ExpectType Source
    genericLogEntry.source;

    // $ExpectType string
    genericLogEntry.text;

    // $ExpectType number
    genericLogEntry.timeStamp;

    // $ExpectType string
    genericLogEntry.stackTrace;
}

{
    // $ExpectType ConsoleLogEntry
    const consoleLogEntry = new ConsoleLogEntry("info", { realm: "" }, "hello", 1234, "type", "method", [], "");

    // $ExpectType string
    consoleLogEntry.method;

    // $ExpectType any[]
    consoleLogEntry.args;

    // $ExpectType string
    consoleLogEntry.type;

    // $ExpectType string
    consoleLogEntry.level;

    // $ExpectType Source
    consoleLogEntry.source;

    // $ExpectType string
    consoleLogEntry.text;

    // $ExpectType number
    consoleLogEntry.timeStamp;

    // $ExpectType string
    consoleLogEntry.stackTrace;
}

{
    // $ExpectType JavascriptLogEntry
    const javascriptLogEntry = new JavascriptLogEntry("info", { realm: "" }, "hello", 1234, "type", "");

    // $ExpectType string
    javascriptLogEntry.type;

    // $ExpectType string
    javascriptLogEntry.level;

    // $ExpectType Source
    javascriptLogEntry.source;

    // $ExpectType string
    javascriptLogEntry.text;

    // $ExpectType number
    javascriptLogEntry.timeStamp;

    // $ExpectType string
    javascriptLogEntry.stackTrace;
}

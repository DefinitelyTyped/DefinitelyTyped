import { BaseLogEntry } from "selenium-webdriver/bidi/logEntries";

function TestBaseLogEntry() {
    return new BaseLogEntry("info", "hello", new Date(), "");
}

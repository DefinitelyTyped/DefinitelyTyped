import { browser } from 'protractor/built';
import browserLogs = require('protractor-browser-logs');
import * as webdriver from 'selenium-webdriver';
import Entry = webdriver.logging.Entry;

function colored(entries: Entry[]) {
    const colors: any = { INFO: 35 /* magenta */, WARNING: 33 /* yellow */, SEVERE: 31 /* red */};
    entries.forEach((entry: Entry) => {
        console.log(`\u001b[${colors[entry.level.name] || 37}m${[entry.level.name, entry.message].join(': ')}\u001b[39m`);
    });
}

function testCreateFunction() {
    let logs = browserLogs(browser);
    logs = browserLogs(browser, { reporters: [] });
    logs = browserLogs(browser, { reporters: [ colored ] });
}

function testLogLevels() {
    const logs = browserLogs(browser);

    logs.ignore(logs.ERROR);
    logs.expect(logs.WARNING);
    logs.ignore(logs.DEBUG);
    logs.expect(logs.INFO);
    logs.ignore(logs.LOG);
}

function testPredicateFunctions() {
    const logs = browserLogs(browser);

    logs.ignore(logs.or(logs.ERROR, logs.WARNING));
    logs.expect(logs.and(logs.DEBUG, logs.INFO));
}

function testRegExp() {
    const logs = browserLogs(browser);

    logs.ignore(/foo/i);
    logs.expect(new RegExp('/foo/i'));
}

function testString() {
    const logs = browserLogs(browser);

    logs.ignore('foo');
    logs.expect('foo');
}

function testMatchFunction() {
    const logs = browserLogs(browser);
    const filter = (entry: Entry) => entry.message === "foo";

    logs.ignore(filter);
    logs.expect(filter);
}

function testReset() {
    const logs = browserLogs(browser);

    logs.reset();
}

function testLogs() {
    const logs = browserLogs(browser);

    const entries: Entry[] = logs.logs();
}

function testVerify() {
    const logs = browserLogs(browser);

    logs.verify();
}

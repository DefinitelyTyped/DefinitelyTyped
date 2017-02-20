import { browser } from 'protractor/built';
import browserLogs from 'protractor-browser-logs';
import * as webdriver from 'selenium-webdriver';
import Entry = webdriver.logging.Entry;

function colored(entries: Entry[]) {
    let colors: any = { INFO: 35 /* magenta */, WARNING: 33 /* yellow */, SEVERE: 31 /* red */};
    entries.forEach(function (entry: Entry) {
        console.log('\u001b[' + (colors[entry.level.name] || 37) + 'm' + [entry.level.name, entry.message].join(': ') + '\u001b[39m');
    });
}

function testCreateFunction() {
    let logs = browserLogs(browser);
    logs = browserLogs(browser, { reporters: [] });
    logs = browserLogs(browser, { reporters: [ colored ] });
}

function testLogLevels() {
    let logs = browserLogs(browser);

    logs.ignore(logs.ERROR);
    logs.expect(logs.WARNING);
    logs.ignore(logs.DEBUG);
    logs.expect(logs.INFO);
    logs.ignore(logs.LOG);
}

function testPredicateFunctions() {
    let logs = browserLogs(browser);

    logs.ignore(logs.or(logs.ERROR, logs.WARNING));
    logs.expect(logs.and(logs.DEBUG, logs.INFO));
}

function testRegExp() {
    let logs = browserLogs(browser);

    logs.ignore(/foo/i);
    logs.expect(new RegExp('/foo/i'));
}

function testString() {
    let logs = browserLogs(browser);

    logs.ignore('foo');
    logs.expect('foo');
}

function testMatchFunction() {
    let logs = browserLogs(browser);
    let filter = (entry: Entry) => entry.message === "foo";

    logs.ignore(filter);
    logs.expect(filter);
}

function testReset() {
    let logs = browserLogs(browser);

    logs.reset();
}

function testLogs() {
    let logs = browserLogs(browser);

    let entries: Entry[] = logs.logs();
}

function testVerify() {
    let logs = browserLogs(browser);

    logs.verify();
}

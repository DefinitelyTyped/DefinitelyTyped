import * as webdriver from 'selenium-webdriver';
import Entry = webdriver.logging.Entry;
import Level = webdriver.logging.Level;
import { PluginConfig } from 'protractor/built';

import consolePlugin = require('protractor-console-plugin');

declare function assertEquals<T>(actual: T, expected: T): void;

const minimalConfiguration: PluginConfig & consolePlugin.Config = {
    package: 'protractor-console-plugin',
};

const fullConfiguration: PluginConfig & consolePlugin.Config = {
    package: 'protractor-console-plugin',
    failOnWarning: true,
    failOnError: false,
    logWarnings: false,
    exclude: [
        'Failed to load resource: net::ERR_',
        /\bTransition Rejection[(].*'(?:restrictedAccess|technicalProblem|notFound)'/,
    ],
};

const entry = new Entry(Level.WARNING, 'warning');
const context: consolePlugin.Context = {
    config: fullConfiguration,
};

consolePlugin.getBrowserLog().then(browserLog => {
    browserLog.forEach(logEntry => {
        assertEquals(logEntry, entry);
    });
});

assertEquals(consolePlugin.includeLog('found'), true);

consolePlugin.logMessages([entry], [entry], false, false, context);

consolePlugin.parseLog(context).then(outcome => {
    assertEquals(outcome, undefined);
});

consolePlugin.teardown().then(outcome => {
    assertEquals(outcome, undefined);
});

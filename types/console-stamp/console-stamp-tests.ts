import consoleStamp = require('console-stamp');

// Test 1: No options
consoleStamp(console);

// Test 2: With empty option
const options = {};
consoleStamp(console, options);

// Test 3: With all options
import stream = require('stream');
const allOptions = {
    pattern: 'ddd mmm dd yyyy HH:MM:ss',
    formatter: function (): string {
        return new Date().toString();
    },
    label: true,
    labelPrefix: '[',
    labelSuffix: ']',
    include: ['log', 'info', 'warn', 'error', 'dir', 'assert'],
    exclude: ['exclude'],
    disable: ['disable'],
    level: 'log',
    extend: {
        log: 4,
        info: 3,
        warn: 2,
        error: 1,
        assert: 2,
        dir: 4,
    },
    metadata: () => ':)',
    stdout: new stream.Writable(),
    stderr: new stream.Writable(),
    colors: {
        stamp: ['black', 'bgYellow', 'underline'],
        label: (x: string) => x,
        metadata: 'blue',
    },
    datePrefix: '[',
    dateSuffix: ']',
};
consoleStamp(console, allOptions);

// Test 4: With options example from original repository: https://github.com/starak/node-console-stamp
consoleStamp(console, { pattern: 'dd/mm/yyyy HH:MM:ss.l' });

consoleStamp(console, {
    metadata: function () {
        return `[${process.memoryUsage().rss}]`;
    },
    colors: {
        stamp: 'yellow',
        label: 'white',
        metadata: 'green',
    },
});

import fs = require('fs');
const output = fs.createWriteStream('./stdout.log');
const errorOutput = fs.createWriteStream('./stderr.log');
const logger = new console.Console(output, errorOutput);
consoleStamp(logger, {
    stdout: output,
    stderr: errorOutput,
});

consoleStamp(console, {
    formatter: function () {
        return new Date().toString();
    },
});

consoleStamp(console, {
    pattern: 'HH:MM:ss',
    extend: {
        debug: 5,
        fatal: 0,
    },
    include: ['debug', 'info', 'warn', 'error', 'fatal'],
    level: 'debug',
});

consoleStamp(console, {
    pattern: 'HH:MM:ss.l',
    metadata: `[${process.pid}]`,
});

consoleStamp(console, {
    pattern: 'HH:MM:ss.l',
    metadata: function () {
        return `[${process.memoryUsage().rss}]`;
    },
});

consoleStamp(console, {
    datePrefix: '####',
    dateSuffix: '####',
    labelPrefix: '{',
    labelSuffix: '}',
});

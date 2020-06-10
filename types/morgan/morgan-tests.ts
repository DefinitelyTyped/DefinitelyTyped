/**
 * Created by staticfunction on 8/3/14.
 */

import morgan = require('morgan');
import express = require('express');

// a pre-defined name
morgan('combined');
morgan('common');
morgan('short');
morgan('tiny');

// a format string
morgan(':remote-addr :method :url');

morgan('combined', {
    buffer: true,
    immediate: true,
    skip: (req, res) => res.statusCode < 400,
    stream: {
        write: (str: string) => {
            console.log(str);
        },
    },
});

// a custom format function
morgan((tokens, req, res) => {
    return [
        tokens.method(req, res),
        tokens.url(req, res),
        tokens.status(req, res),
        tokens.res(req, res, 'content-length'),
        '-',
        tokens['response-time'](req, res),
        'ms',
    ].join(' ');
});
// a custom format function with options
morgan((_tokens, _req, _res) => '', {
    buffer: true,
    immediate: true,
    skip: (req, res) => res.statusCode < 400,
    stream: {
        write: (str: string) => {
            console.log(str);
        },
    },
});

// test interface definition for morgan

// a named custom format defined as string (example: extend 'tiny' format with user-agent token)
morgan.format('tiny-extended', ':method :url :status :res[content-length] - :response-time ms :user-agent');

// a named custom format defined using the Function signature (example: extend 'dev' format with user-agent token)

// extend morgan.FormatFn interface with memoizer property to avoid unnecessary re-compiling
// of status-code range driven colorized format functions
interface FormatFnIndexer {
    [memoizerName: string]: morgan.FormatFn;
}

interface ExtendedFormatFn extends morgan.FormatFn {
    memoizer: FormatFnIndexer;
}

const developmentExtendedFormatLine = ((tokens, req, res): string | undefined | null => {
    // get the status code if response written
    const status = res.statusCode;

    // get status color
    const color =
        status >= 500
            ? 31 // red
            : status >= 400
            ? 33 // yellow
            : status >= 300
            ? 36 // cyan
            : status >= 200
            ? 32 // green
            : 0; // no color

    // get colored format function, if previously memoized, otherwise undefined
    let fn: morgan.FormatFn | undefined = developmentExtendedFormatLine.memoizer[color];

    if (!fn) {
        // compile
        fn = developmentExtendedFormatLine.memoizer[color] = morgan.compile(
            `\x1b[0m:method :url \x1b[${color}m:status \x1b[0m:response-time ms - :res[content-length]\x1b[0m :user-agent`,
        );
    }

    return fn(tokens, req, res);
}) as ExtendedFormatFn;

developmentExtendedFormatLine.memoizer = {};

morgan.format('dev-extended', developmentExtendedFormatLine);

morgan.token('status', (req, res) => {
    return res.headersSent ? String(res.statusCode) : undefined;
});

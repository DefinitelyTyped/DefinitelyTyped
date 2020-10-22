/// <reference types="node" />

import ejs = require('ejs');
import { readFileSync as read } from 'fs';
import LRU = require('lru-cache');

const fileName = 'test.ejs';
const people = ['geddy', 'neil', 'alex'];
const data = { people };
const template = '<%= people.join(", "); %>';
const options = { filename: fileName };
let result: string;
let ejsFunction: ejs.TemplateFunction;
let asyncResult: Promise<string>;
let ejsAsyncFunction: ejs.AsyncTemplateFunction;

const SimpleCallback = (err: any, html: string) => {
    if (err) {
        return null!;
    }
    return html;
};

ejs.VERSION; // $ExpectType string
ejs.name; // $ExpectType "ejs"

result = ejs.render(template);
result = ejs.render(template, data);
result = ejs.render(template, data, options);
ejs.render('<% echo(\'foo\'); %>', {}, { outputFunctionName: 'echo' });

result = ejs.renderFile(fileName, SimpleCallback);
result = ejs.renderFile(fileName, data, SimpleCallback);
result = ejs.renderFile(fileName, data, options, SimpleCallback);
asyncResult = ejs.renderFile(fileName);
asyncResult = ejs.renderFile(fileName, data);
asyncResult = ejs.renderFile(fileName, data, options);

ejsFunction = ejs.compile('');
ejsFunction = ejs.compile(read(fileName, 'utf8'));
ejsFunction = ejs.compile(template);
ejsFunction = ejs.compile(template, options);
ejsFunction = ejs.compile(template, { cache: true, filename: fileName });
ejsFunction = ejs.compile(template, { cache: true, filename: fileName, root: './' });
ejsFunction = ejs.compile(template, { context: { foo: 'FOO' } });
ejsFunction = ejs.compile(template, { compileDebug: false });
ejsFunction = ejs.compile(template, { client: true });
ejsFunction = ejs.compile('<$= people.join(", "); $>', { delimiter: '$' });
ejsFunction = ejs.compile('<%= locals.people.join(", "); %>', { _with: false });
ejsFunction = ejs.compile('<%= locals.people.join(", "); %>', { strict: true });
ejsFunction = ejs.compile('<%= it.people.join(", "); %>', { _with: false, localsName: 'it' });
ejsFunction = ejs.compile(template, { rmWhitespace: true });
const customEscape = (str: string) => (!str ? '' : str.toUpperCase());
ejsFunction = ejs.compile(template, { escape: customEscape });
ejsFunction = ejs.compile(template, { async: false });

ejsAsyncFunction = ejs.compile(template, { async: true });
ejsAsyncFunction = ejs.compile(template, { client: true, async: true });

result = ejsFunction();
result = ejsFunction({});
result = ejsFunction(data);

asyncResult = ejsAsyncFunction();
asyncResult = ejsAsyncFunction({});
asyncResult = ejsAsyncFunction(data);

/** @see https://github.com/mde/ejs/tree/v2.5.7#custom-fileloader */
ejs.fileLoader = (path: string) => '';

/** @see https://github.com/mde/ejs/tree/v2.5.7#caching */
ejs.clearCache();
ejs.cache = LRU(100);

/** @see https://github.com/mde/ejs/tree/v2.5.7#custom-delimiters */
ejs.delimiter; // $ExpectType string | undefined
ejs.delimiter = '%';

// https://github.com/mde/ejs#options
const renderOptions: ejs.Options = {
    beautify: true,
    filename: fileName,
};

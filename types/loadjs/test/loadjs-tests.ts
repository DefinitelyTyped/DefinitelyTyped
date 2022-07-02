import importedLoadJs = require('loadjs');

const loadOptions: importedLoadJs.LoadOptions = {
    before: (path, scriptEl) => {
        path; // $ExpectType string
        scriptEl; // $ExpectType HTMLElement
    },
    success: () => {},
    error: (pathsNotFound) => {
        pathsNotFound; // $ExpectType string[]
    },
    async: true,
    numRetries: 3
};

const readyOptions: importedLoadJs.ReadyOptions = {
    success: () => {},
    error: (depsNotFound) => {
        depsNotFound; // $ExpectType string[]
    },
};

importedLoadJs('/path/to/foo.js', () => {}); // $ExpectType void
importedLoadJs(['/path/to/foo.js', '/path/to/bar.js'], () => {}); // $ExpectType void
importedLoadJs(['/path/to/foo.js', '/path/to/bar.js'], 'foobar'); // $ExpectType void
importedLoadJs.ready('foobar', () => {}).ready('foobar', () => {}); // $ExpectType typeof loadjs
importedLoadJs.ready(['foo', 'bar'], () => {}).ready(['foo', 'bar'], () => {}); // $ExpectType typeof loadjs
importedLoadJs.isDefined('foobar'); // $ExpectType boolean
importedLoadJs(['/path/to/foo.js', '/path/to/bar.js'], 'foobar', loadOptions); // $ExpectType void
importedLoadJs.ready('foobar', readyOptions); // $ExpectType typeof loadjs

importedLoadJs('/path/to/foo.js', { ...loadOptions, returnPromise: true }); // $ExpectType Promise<void>
importedLoadJs(['/path/to/foo.js', '/path/to/bar.js'], { ...loadOptions, returnPromise: true }); // $ExpectType Promise<void>
importedLoadJs(['/path/to/foo.js', '/path/to/bar.js'], 'foobar', { ...loadOptions, returnPromise: true }); // $ExpectType Promise<void>
importedLoadJs('/path/to/foo.js', 'foo', { ...loadOptions, returnPromise: true }); // $ExpectType Promise<void>

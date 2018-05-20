import * as importedLoadJs from 'loadjs';

const loadOptions: importedLoadJs.LoadOptions = {
    before: (path, scriptEl) => {},
    success: () => {},
    error: (pathsNotFound) => {},
    async: true,
    numRetries: 3
};

const readyOptions: importedLoadJs.ReadyOptions = {
    success: () => {},
    error: (depsNotFound) => {},
};

importedLoadJs('/path/to/foo.js', () => {});
importedLoadJs(['/path/to/foo.js', '/path/to/bar.js'], () => {});
importedLoadJs(['/path/to/foo.js', '/path/to/bar.js'], 'foobar');
importedLoadJs.ready('foobar', () => {});
importedLoadJs.ready(['foo', 'bar'], () => {});
importedLoadJs.isDefined('foobar');
importedLoadJs(['/path/to/foo.js', '/path/to/bar.js'], 'foobar', loadOptions);
importedLoadJs.ready('foobar', readyOptions);

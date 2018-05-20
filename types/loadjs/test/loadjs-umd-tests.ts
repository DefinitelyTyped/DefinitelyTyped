loadjs('/path/to/foo.js', () => {});
loadjs(['/path/to/foo.js', '/path/to/bar.js'], () => {});
loadjs(['/path/to/foo.js', '/path/to/bar.js'], 'foobar');
loadjs.ready('foobar', () => {});
loadjs.ready(['foo', 'bar'], () => {});
loadjs.isDefined('foobar');
loadjs(['/path/to/foo.js', '/path/to/bar.js'], 'foobar', {
    before: (path, scriptEl) => {},
    success: () => {},
    error: (pathsNotFound) => {},
    async: true,
    numRetries: 3
});
loadjs.ready('foobar', {
    success: () => {},
    error: (depsNotFound) => {},
});

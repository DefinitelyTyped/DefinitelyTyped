/// <reference types="../next"/>

function preloadTest() {
    function Component() {
        ReactDOM.preload('foo', { as: 'style', integrity: 'sad' });
        ReactDOM.preload('bar', { as: 'font' });
        ReactDOM.preload('baz', { as: 'script', crossOrigin: 'use-credentials' });
        ReactDOM.preload('baz', {
            // @ts-expect-error
            as: 'title',
        });

        ReactDOM.preinit('foo', {
            as: 'style',
            crossOrigin: 'anonymous',
            precedence: 'high',
            integrity: 'sad',
        });
        ReactDOM.preinit('bar', {
            // @ts-expect-error Only available in preload
            as: 'font',
        });
        ReactDOM.preinit('baz', {
            as: 'script',
        });
        ReactDOM.preinit('baz', {
            // @ts-expect-error
            as: 'title',
        });
    }
}

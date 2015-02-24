// Type definitions for minilog v2
// Project: https://github.com/mixu/minilog
// Definitions by: Guido <http://guido.io>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="minilog.d.ts"/>


//Following are example snippets from mixu.net/minilog

var log = Minilog('app');
Minilog.enable();

log
    .debug('debug message')
    .info('info message')
    .warn('warning')
    .error('this is an error message');

Minilog.pipe(Minilog.backends.console.formatWithStack)
    .pipe(Minilog.backends.console);


Minilog
// formatter
    .pipe(Minilog.backends.console.formatClean)
// backend
    .pipe(Minilog.backends.console);


Minilog.pipe(Minilog.suggest) // filter
    .pipe(Minilog.defaultFormatter) // formatter
    .pipe(Minilog.defaultBackend); // backend - e.g. the console

Minilog.suggest.deny(/mymodule\/.*/, 'warn');

Minilog
    .suggest
    .clear()
    .deny('foo', 'warn');
Minilog.enable();

Minilog.suggest.defaultResult = false;
Minilog
    .suggest
    .clear()
    .allow('bar', 'info');
Minilog.enable();


var myFilter = new Minilog.Filter();
// allow any logs from the namespace/module "foo", level >= 'info
myFilter.allow('foo', 'debug');
// deny any logs where the module name matches "bar.*", level < 'warn'
// e.g. only let through "warn" and "error"
myFilter.deny(new RegExp('bar.*', 'warn'));

// now, create a custom pipe
Minilog.pipe(myFilter)
    .pipe(Minilog.defaultFormatter)
    .pipe(Minilog.defaultBackend);



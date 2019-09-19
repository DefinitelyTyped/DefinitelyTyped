// Type definitions for minilog v2
// Project: https://github.com/mixu/minilog
// Definitions by: Guido <http://guido.io>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


//Following are example snippets from mixu.net/minilog
import Minilog = require("minilog");
var log = Minilog('app');
Minilog.enable();

log
    .debug('debug message 1', 'debug message 2')
    .info('info message', [1, 2, 3])
    .warn('warning')
    .error('this is an error message', new Error());

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



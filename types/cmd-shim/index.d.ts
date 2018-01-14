// Type definitions for cmd-shim 2.0
// Project: https://github.com/ForbesLindesay/cmd-shim
// Definitions by: Andrew Bradley <https://github.com/cspotcode>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 *
 * Create a cmd shim at `to` for the command line program at `from`. e.g.
 *
 *     var cmdShim = require('cmd-shim');
 *     cmdShim(__dirname + '/cli.js', '/usr/bin/command-name', function (err) {
 *         if (err) throw err;
 *     });
 */
// tslint:disable-next-line strict-export-declare-modifiers
declare function cmdShim(from: string, to: string, cb: (err: any) => void): undefined;

// tslint:disable-next-line strict-export-declare-modifiers
declare namespace cmdShim {
    /**
     * Create a cmd shim at `to` for the command line program at `from`, but will just
     * continue if the file does not exist.
     *
     *     var cmdShim = require('cmd-shim');
     *     cmdShim.ifExists(__dirname + '/cli.js', '/usr/bin/command-name', function (err) {
     *         if (err) throw err;
     *     });
     */
    function ifExists(from: string, to: string, cb: (err: any) => void): undefined;
}

// tslint:disable-next-line strict-export-declare-modifiers
export = cmdShim;

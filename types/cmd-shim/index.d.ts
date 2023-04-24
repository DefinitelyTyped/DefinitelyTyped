// Type definitions for cmd-shim 5.0
// Project: https://github.com/npm/cmd-shim
// Definitions by: Andrew Bradley <https://github.com/cspotcode>
//                 Hiroki Osame <https://github.com/privatenumber>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Create a cmd shim at `to` for the command line program at `from`. e.g.
 *
 * cmdShim(__dirname + '/cli.js', '/usr/bin/command-name');
 */
declare function cmdShim(from: string, to: string): Promise<void>;

declare namespace cmdShim {
    /**
     * Create a cmd shim at `to` for the command line program at `from`, but will just
     * continue if the file does not exist.
     *
     * cmdShim.ifExists(__dirname + '/cli.js', '/usr/bin/command-name');
     */
    function ifExists(from: string, to: string): Promise<void>;
}

export = cmdShim;

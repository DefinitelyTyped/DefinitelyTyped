// Type definitions for rc 1.1
// Project: https://github.com/dominictarr/rc
// Definitions by: Daniel Rosenwasser <https://github.com/DanielRosenwasser>
//                 BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

declare function rc(
    name: string,
    defaults?: { [key: string]: any },
    /**
     * Parsed argv object. For example, if args is `--foo bar`, then this value should be `{foo: 'bar'}`
     * If `argv` is `null` or `undefined`, then `rc`'s default parser will parse `process.argv`.
     */
    argv?: { [key: string]: any } | null,
    /**
     * Custom config file parser.
     * This function will be passed the string contents of each
     * discovered configuration file should return a parsed object dictionary.
     */
    parse?: ((content: string) => { [key: string]: any }) | null
): { [key: string]: any };

export = rc;

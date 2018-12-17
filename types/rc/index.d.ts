// Type definitions for rc
// Project: https://github.com/dominictarr/rc
// Definitions by: Daniel Rosenwasser <https://github.com/DanielRosenwasser>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function rc(
	name: string,
	defaults?: any,
    /**
     * Parsed argv object. For example, if args is `--foo bar`, then this value should be `{foo: 'bar'}`
     * If `argv` is `null` or `undefined`, then `rc`'s default parser will parse `process.argv`.
     */
	argv?: {} | null,
    /**
     * Custom config file parser.
     * This function will be passed the string contents of each
     * discovered configuration file should return a parsed object dictionary.
     */
	parse?: ((content: string) => any) | null
): any;

export = rc;

// Type definitions for rc
// Project: https://github.com/dominictarr/rc
// Definitions by: Daniel Rosenwasser <https://github.com/DanielRosenwasser>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function rc(
	name: string,
	defaults?: any,
    /**
     * Parsed argv object.  For example, if args were '--foo bar' then this value might be {foo: 'bar'}
     * If null then rc's default argv parser will parse process.argv
     */
	argv?: {} | null,
    /**
     * Custom config file parser.
      * Will be passed the string contents of each discovered config file and should return a parsed object dictionary.
     */
	parse?: ((content: string) => any) | null
): any;

export = rc;

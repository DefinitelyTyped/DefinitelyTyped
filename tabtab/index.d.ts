// Type definitions for tabtab 0.0.4
// Project: https://github.com/mklabs/node-tabtab
// Definitions by: Vojtěch Habarta <https://github.com/vojtechhabarta>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped



/**
 * Main completion method, has support for installation and actual completion.
 * @param name Name of the command to complete.
 * @param cb Get called when a tab-completion command happens.
 */
export declare function complete(name: string, cb: CallBack): void;

/**
 * Main completion method, has support for installation and actual completion.
 * @param name Name of the command to complete.
 * @param completer Name of the command to call on completion.
 * @param cb Get called when a tab-completion command happens.
 */
export declare function complete(name: string, completer: string, cb: CallBack): void;

/**
 * Simple helper function to know if the script is run in the context of a completion command.
 */
export declare function isComplete(): boolean;

/**
 * Helper to return the list of short and long options, parsed from the usual --help output of a command (cake/rake -H, vagrant, commander -h, optimist.help(), ...).
 */
export declare function parseOut(str: string): { shorts: string[]; longs: string[] };

/**
 * Same purpose as parseOut, but for parsing tasks from an help command (cake/rake -T, vagrant, etc.).
 */
export declare function parseTasks(str: string, prefix: string, reg?: RegExp | string): string[];

/**
 * Helper to return completion output and log to standard output.
 * @param values Array of values to complete against.
 * @param data The data object returned by the complete callback, used mainly to filter results accordingly upon the text that is supplied by the user.
 * @param prefix A prefix to add to the completion results, useful for options to add dashes (eg. - or --).
 */
export declare function log(values: string[], data: Data, prefix?: string): void;

interface CallBack {
    (error?: Error, data?: Data, text?: string): any;
}

/**
 * Holds interesting values to drive the output of the completion.
 */
interface Data {

    /**
     * full command being completed
     */
    line: string;

    /**
     * number of words
     */
    words: number;

    /**
     * cursor position
     */
    point: number;

    /**
     * tabing in the middle of a word: foo bar baz bar foobarrrrrrr
     */
    partial: string;

    /**
     * last word of the line
     */
    last: string;

    /**
     * last partial of the line
     */
    lastPartial: string;

    /**
     * the previous word
     */
    prev: string;
}

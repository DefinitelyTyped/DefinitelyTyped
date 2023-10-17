/// <reference types="node" />

declare namespace deprecate {
    /**
     * Set to false to not output a color. Defaults to '\x1b[31;1m' which is red.
     */
    let color: string;

    /**
     * Set to false to do nothing at all when the deprecate method is called. Useful in tests of the library you're deprecating things within.
     */
    let silence: boolean;

    /**
     * The stream to which output is written. Defaults to process.stderr
     */
    let stream: NodeJS.WriteStream;
}

/**
 * Call deprecate within a function you are deprecating.
 *
 * It will spit out all the messages to the console the first time and only the first time the method is called.
 */
declare function deprecate(methodName: string, ...message: string[]): void;

export = deprecate;

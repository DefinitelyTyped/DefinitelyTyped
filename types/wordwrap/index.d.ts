// Type definitions for wordwrap 1.0
// Project: https://github.com/substack/node-wordwrap#readme
// Definitions by: ark120202 <https://github.com/ark120202>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type Wrap = (text: string) => string;

/**
 * Wrap lines until column `stop`. If a word is longer than `stop` characters
 * it will overflow.
 */
declare function wordwrap(stop: number, params?: { mode?: wordwrap.Mode | undefined }): Wrap;

/**
 * Pad out lines with spaces out to column `start` and then wrap until column
 * `stop`. If a word is longer than `stop - start` characters it will overflow.
 */
declare function wordwrap(start: number, stop: number, params?: { mode?: wordwrap.Mode | undefined }): Wrap;

/**
 * Pad out lines with spaces out to column `start` and then wrap until column
 * `stop`. If a word is longer than `stop - start` characters it will overflow.
 */
declare function wordwrap(params: wordwrap.Options): Wrap;

declare namespace wordwrap {
    interface Options {
        stop: number;
        start: number;
        mode?: Mode | undefined;
    }

    /**
     * Wrap lines until column `stop`. Break up chunks longer than `stop`.
     */
    function hard(stop: number): Wrap;

    /**
     * Wrap lines until column `stop`. Break up chunks longer than `stop - start`.
     */
    function hard(start: number, stop: number): Wrap; // tslint:disable-line:unified-signatures

    /**
     * In "soft" mode, split chunks by `/(\S+\s+/` and don't break up chunks
     * which are longer than `stop - start`, in "hard" mode, split chunks with
     * `/\b/` and break up chunks longer than `stop - start`.
     */
    type Mode = "soft" | "hard";
}

export = wordwrap;

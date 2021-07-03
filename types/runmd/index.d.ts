// Type definitions for runmd 1.3
// Project: https://github.com/broofa/runmd
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Render RunMD-compatible markdown file
 * @param inputText - text to transform
 */
export function render(inputText: string, options?: Options): string;

export interface Options {
    /**
     * name of input file
     */
    inputName?: string;
    /**
     * name of output file
     */
    outputName?: string;
    /**
     * if true, disables RunMD footer
     */
    lame?: boolean;
}

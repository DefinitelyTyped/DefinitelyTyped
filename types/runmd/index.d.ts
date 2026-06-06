/**
 * Render RunMD-compatible markdown file
 * @param inputText - text to transform
 */
export function render(inputText: string, options?: Options): string;

export interface Options {
    /**
     * name of input file
     */
    inputName?: string | undefined;
    /**
     * name of output file
     */
    outputName?: string | undefined;
    /**
     * if true, disables RunMD footer
     */
    lame?: boolean | undefined;
}

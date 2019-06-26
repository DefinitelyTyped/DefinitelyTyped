import { Interface as ReadLineInterface } from "readline";

/**
 * Provides the functionality to manage the content of a console-screen.
 */
export declare class ScreenManager {
    /**
     * Gets or sets the height of the screen.
     */
    public height: number;

    /**
     * Gets or sets the number of extra-lines below the prompt.
     */
    public extraLinesUnderPrompt: number;

    /**
     * Gets or sets an object for performing read from and write to the console.
     */
    public rl: ReadLineInterface;

    /**
     * Initializes a new instance of the `ScreenManager` class.
     *
     * @param readLine
     * An object for performing read from and write to the console.
     */
    public constructor(readLine: ReadLineInterface);

    /**
     * Renders content to the screen.
     *
     * @param content
     * The content to render.
     *
     * @param bottomContent
     * The content to render to the bottom of the screen.
     */
    public render(content: string, bottomContent: string): void;

    /**
     * Cleans all lines expect the first `extraLines`.
     *
     * @param extraLines
     * The number of lines at the begin to skip.
     */
    public clean(extraLines: number): void;

    /**
     * Releases all unmanaged resources.
     */
    public done(): void;

    /**
     * Releases the cursor.
     */
    public releaseCursor(): void;

    /**
     * Identifies the width of the screen.
     *
     * @returns
     * The width of the screen.
     */
    public normalizedCliWidth(): number;

    /**
     * Splits the `text` into multiple lines with the specified max `width`.
     *
     * @param text
     * The text to process.
     *
     * @param width
     * The max width of each line.
     */
    breakLines(text: string, width: number): string[];

    /**
     * Adds line-breaks to the specified `text` with the specified max `width`.
     *
     * @param text
     * The text to process.
     *
     * @param width
     * The max width of each line.
     */
    forceLineReturn(text: string, width: number): string;
}
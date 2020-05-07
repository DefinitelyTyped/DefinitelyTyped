// Type definitions for @fnando/sparkline 0.3
// Project: https://github.com/fnando/sparkline
// Definitions by: Gábor Balogh <https://github.com/grabofus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

type SparklineNativeEntry = number | { value: number };

interface SparklineOptionsFetch<TEntry> {
    /**
     * Use this function to return the value if you have a different data structure that's not natively supported by sparkline.
     */
    fetch: (entry: TEntry) => number;
}

interface SparklineOptions {
    /**
     * By setting this callback function, you'll enable the interactive mode (unless you set options.interactive to false).
     */
    onmousemove?: (event: MouseEvent) => void;

    /**
     * This callback function is called every time the mouse leaves the SVG area. You can use it to hide things like tooltips.
     */
    onmouseout?: (event: MouseEvent) => void;

    /**
     * Set the spot radius. The default is 2.
     */
    spotRadius?: number;

    /**
     * Set the cursor width. The default is 2.
     */
    cursorwidth?: number;

    /**
     * When true, this enables the interactive mode. You don't have to set this option if you're providing a onmousemove callback.
     */
    interactive?: boolean;
}

type SparklineNativeOptions<TEntry> = SparklineOptions | Partial<SparklineOptionsFetch<TEntry>>;
type SparklineNonNativeOptions<TEntry> = SparklineOptions | SparklineOptionsFetch<TEntry>;

/**
 * Generate SVG sparklines with JavaScript without any external dependency.
 * @param svg This is a <svg> reference that must contain three required attributes (width, height, and stroke-width). These attributes are used to calculate the drawing area.
 * @param entries You can either provide an array of numbers or an array of objects that respond to .value. If you have a different data structure, see options.fetch.
 * @param options This optional argument allows you to further customize the sparkline.
 */
export function sparkline<TEntry extends SparklineNativeEntry>(svg: SVGSVGElement, entries: TEntry[], options?: SparklineNativeOptions<TEntry>): string;
export function sparkline<TEntry>(svg: SVGSVGElement, entries: TEntry[], options: SparklineNonNativeOptions<TEntry>): string;

export default sparkline;

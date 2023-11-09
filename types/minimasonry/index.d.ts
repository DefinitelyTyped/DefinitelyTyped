export interface MiniMasonryOptions {
    /**
     * Target width of elements.
     * @default 255
     */
    baseWidth?: number;
    /**
     * Container's selector or element.
     */
    container: string | HTMLElement;
    /**
     * Width / height of gutter between elements. Use gutterX / gutterY to set different values.
     * @default 10
     */
    gutter?: number;
    /**
     * Width of gutter between elements. Need gutterY to work, fallback to `gutter`.
     */
    gutterX?: number;
    /**
     * Height of gutter between elements. Need gutterX to work, fallback to `gutter`.
     */
    gutterY?: number;
    /**
     * Whether or not MiniMasonry places elements on the shortest column or keeps exact order of the list.
     * @default true
     */
    minify?: boolean;
    /**
     * Set left gutter on first columns and right gutter on last.
     * @default true
     */
    surroundingGutter?: boolean;
    /**
     * Gutter applied when only 1 column can be displayed.
     * @default 5
     */
    ultimateGutter?: number;
    /**
     * Sorting direction, "ltr" or "rtl".
     * @default "ltr"
     */
    direction?: "ltr" | "rtl";
    /**
     * False will start to sort from center, true will start from left or right according to direction parameter.
     * @default false
     */
    wedge?: boolean;
}

/**
 * You should have a container **relatively positioned** with your elements as children. Those children elements must be **absolutely positioned**.
 *
 * MiniMasonry will add a "resize" event listener on the window to redraw the masonry on window resize. This listener is throttled to *66ms (15fps)*.
 *
 *  @example
 * import MiniMasonry from "minimasonry";
 * const masonry = new MiniMasonry({
 *     container: '.masonry_transition'
 * });
 */
// tslint:disable-next-line:npm-naming
export default class MiniMasonry {
    constructor(options: MiniMasonryOptions);
    /**
     * If list has changed, trigger a re-layout of the masonry.
     */
    layout(): void;
    /**
     * Remove the resize listener and set back container as it was before initialization.
     */
    destroy(): void;
}

// browser global variable `MiniMasonry`
declare global {
    interface Window {
        MiniMasonry: MiniMasonry;
    }
}

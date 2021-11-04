// Type definitions for justified-layout 4.1
// Project: https://github.com/flickr/justified-layout
// Definitions by: Alex Walter <https://github.com/ArgonAlex/>
//                 Liau Jian Jie <https://github.com/liaujianjie/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * An item to be layout.
 */
type JustifiedLayoutItem = number | { width: number; height: number };

/**
 * Options for configuring the justified layout.
 */
interface JustifiedLayoutOptions {
    /**
     * The width that boxes will be contained within irrelevant of padding.
     * @default 1060
     */
    containerWidth?: number | undefined;
    /**
     * Provide a single integer to apply padding to all sides or provide an object to apply
     * individual values to each side.
     * @default 10
     */
    containerPadding?: number | { top: number; right: number; left: number; bottom: number } | undefined;
    /**
     * Provide a single integer to apply spacing both horizontally and vertically or provide an
     * object to apply individual values to each axis.
     * @default 10
     */
    boxSpacing?: number | { horizontal: number; vertical: number } | undefined;
    /**
     * It's called a target because row height is the lever we use in order to fit everything in
     * nicely. The algorithm will get as close to the target row height as it can.
     * @default 320
     */
    targetRowHeight?: number | undefined;
    /**
     * How far row heights can stray from targetRowHeight. `0` would force rows to be the
     * `targetRowHeight` exactly and would likely make it impossible to justify. The value must
     * be between `0` and `1`.
     * @default 0.25
     */
    targetRowHeightTolerance?: number | undefined;
    /**
     * Will stop adding rows at this number regardless of how many items still need to be laid
     * out.
     * @default Number.POSITIVE_INFINITY
     */
    maxNumRows?: number | undefined;
    /**
     * Provide an aspect ratio here to return everything in that aspect ratio. Makes the values
     * in your input array irrelevant. The length of the array remains relevant.
     * @default false
     */
    forceAspectRatio?: boolean | number | undefined;
    /**
     * If you'd like to insert a full width box every n rows you can specify it with this
     * parameter. The box on that row will ignore the targetRowHeight, make itself as wide as
     * `containerWidth - containerPadding` and be as tall as its aspect ratio defines. It'll
     * only happen if that item has an aspect ratio >= 1. Best to have a look at the examples to
     * see what this does.
     * @default false
     */
    fullWidthBreakoutRowCadence?: boolean | number | undefined;
    /**
     * By default we'll return items at the end of a justified layout even if they don't make a
     * full row. If false they'll be omitted from the output.
     * @default true
     */
    showWidows?: boolean | undefined;
    /**
     * If widows are visible, how should they be laid out?
     * @default "left"
     */
    widowLayoutStyle?: 'left' | 'justify' | 'center' | undefined;
}

/**
 * Computed positional and sizing properties of a box in the layout.
 */
interface LayoutBox {
    /**
     * Aspect ratio of the box.
     */
    aspectRatio: number;
    /**
     * Distance between the top side of the box and the top boundary of the justified layout.
     */
    top: number;
    /**
     * Width of the box in a justified layout.
     */
    width: number;
    /**
     * Height of the box in a justified layout.
     */
    height: number;
    /**
     * Distance between the left side of the box and the left boundary of the justified layout.
     */
    left: number;
    /**
     * Whether or not the aspect ratio was forced.
     */
    forcedAspectRatio?: boolean;
}

/**
 * Results from calculating the justified layout.
 */
interface JustifiedLayoutResult {
    /**
     * Height of the container containing the justified layout.
     */
    containerHeight: number;
    /**
     * Number of items that are in rows that aren't fully-packed.
     */
    widowCount: number;
    /**
     * Computed positional and sizing properties of a box in the justified layout.
     */
    boxes: LayoutBox[];
}

declare function createJustifiedLayout(
    items: ReadonlyArray<JustifiedLayoutItem>,
    options?: JustifiedLayoutOptions,
): JustifiedLayoutResult;

export = createJustifiedLayout;

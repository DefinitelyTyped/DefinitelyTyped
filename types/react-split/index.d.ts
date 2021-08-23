// Type definitions for react-split 2.0
// Project: https://split.js.org/
// Definitions by: Steven Hankin <https://github.com/stevenhankin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.6

import * as React from 'react';

declare namespace SplitWrapper {
  interface DefaultProps {
    /** An array of initial sizes of the elements, specified as percentage values. Example: Setting the initial sizes to 25% and 75%. */
    sizes?: number[];
    /**
     * Default: 100
     *
     * An array of minimum sizes of the elements, specified as pixel values. Example: Setting the minimum sizes to 100px and 300px, respectively.
     */
    minSize?: number | number[];
    /**
     * Default: Infinity
     *
     * An array of maximum sizes of the elements, specified as pixel values.
     * Example: Setting the maximum sizes of the first element to 500px, and not setting a maximum size on the second element.
     */
    maxSize?: number | number[];
    /**
     * Default: false
     *
     * When the split is created, if expandToMin is true, the minSize for each element overrides the percentage value from the sizes option.
     * Example: The first element (#one) is set to 25% width of the parent container.
     * However, it's minSize is 300px. Using expandToMin: true means that the first element will always load at at least 300px, even if 25% were smaller.
     */
    expandToMin?: boolean;
    /**
     * Default: 10
     *
     * Gutter size in pixels. Example: Setting the gutter size to 20px.
     */
    gutterSize?: number;
    /**
     * Default: 'center'
     *
     * Possible options are 'start', 'end' and 'center'. Determines how the gutter aligns between the two elements.
     * 'start' shrinks the first element to fit the gutter
     * 'end' shrinks the second element to fit the gutter
     * 'center' shrinks both elements by the same amount so the gutter sits between.
     *
     * Added in v1.5.3.
     */
    gutterAlign?: 'center' | 'start' | 'end';
    /**
     * Default: 30
     *
     * Snap to minimum size at this offset in pixels.
     *
     * Example: Set to 0 to disable to snap effect.
     */
    snapOffset?: number;
    /**
     * Default: 1
     *
     * Drag this number of pixels at a time.
     * Defaults to 1 for smooth dragging, but can be set to a pixel value to give more control over the resulting sizes.
     * Works particularly well when the gutterSize is set to the same size.
     *
     * Added in v1.5.3.
     */
    dragInterval?: number;
    /**
     * Default: 'horizontal'
     *
     * Direction to split in. Can be 'vertical' or 'horizontal'.
     * Determines which CSS properties are applied (ie. width/height) to each element and gutter
     */
    direction?: 'horizontal' | 'vertical';
    /**
     * Default: 'col-resize'
     *
     * Cursor to show on the gutter (also applied to the body on dragging to prevent flickering).
     * Defaults to 'col-resize'for direction: 'horizontal' and 'row-resize' for direction: 'vertical'
     */
    cursor?: string;
    /** Optional function called to create each gutter element.  */
    gutter?: (index: number, direction: DefaultProps['direction'], pairElement: unknown) => HTMLElement;
    /** Optional function called setting the CSS style of the elements.  */
    elementStyle?: (dimension: number, elementSize: number, gutterSize: number, index: number) => {};
    /** Optional function called when setting the CSS style of the gutters. */
    gutterStyle?: (dimension: number, gutterSize: number, index: number) => {};
    /** Callback that can be added on drag (fired continously) */
    onDrag?: (sizes: number[]) => void;
    /** Callback that can be added on drag (fired continously) */
    onDragStart?: (sizes: number[]) => void;
    /** Callback that can be added on drag (fired continously) */
    onDragEnd?: (sizes: number[]) => void;
  }
}

declare class Split extends React.Component<SplitWrapper.DefaultProps, any> { }

export = Split;

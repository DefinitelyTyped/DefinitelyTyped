// Type definitions for splitjs v1.3.4
// Project: https://github.com/nathancahill/Split.js
// Definitions by: Ilia Choly <https://github.com/icholy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Split {

  interface Options {

    // Initial sizes of each element in percents or CSS values.
    sizes?:   number[];

    // Minimum size of each element.
    minSize?: number|number[];

    // Gutter size in pixels.
    gutterSize?: number;

    // Snap to minimum size offset in pixels.
    snapOffset?: number;

    // Direction to split: horizontal or vertical.
    direction?: "horizontal"|"vertical";

    // Cursor to display while dragging.
    cursor?: string;

    // Called to create each gutter element
    gutter?: (
      index:     number,
      direction: "horizontal"|"vertical"
    ) => HTMLElement;

    // 	Called to set the style of each element.
    elementStyle?: (
      dimension:   "width"|"height",
      elementSize: number,
      gutterSize:  number
    ) => any;

    // Called to set the style of the gutter.
    gutterStyle?: (
      dimension:  "width"|"height",
      gutterSize: number
    ) => any;

    // Callback on drag.
    onDrag?: Function;

    // Callback on drag start.
    onDragStart?: Function;

    // Callback on drag end.
    onDragEnd?: Function;
  }

  interface Instance {
    // setSizes behaves the same as the sizes configuration option, passing an array of percents or CSS values.
    // It updates the sizes of the elements in the split. 
    setSizes(sizes: number[]): void;

    // getSizes returns an array of percents, suitable for using with setSizes or creation.
    // Not supported in IE8.
    getSizes(): number[];

    // collapse changes the size of element at index to 0.
    // Every element except the last is collapsed towards the front (left or top).
    // The last is collapsed towards the back.
    // Not supported in IE8.
    collapse(index: number): void;

    // Destroy the instance. It removes the gutter elements, and the size CSS styles Split.js set.
    destroy(): void;
  }

}

declare function Split(
  elements:  (string | HTMLElement)[],
  options?: Split.Options
): Split.Instance;


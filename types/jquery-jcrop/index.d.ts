// Type definitions for jcrop 2.0
// Project: https://github.com/tapmodo/Jcrop/
// Definitions by: Joe Skeen <https://github.com/joeskeen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3
/// <reference types="jquery" />

declare namespace JQuery.Jcrop {
  interface Options {
    /** Aspect ratio of w/h (e.g. 1 for square)  */
    aspectRatio?: number;
    /** Minimum width/height, use 0 for unbounded dimension; [width, height] */
    minSize?: [number, number];
    /** Maximum width/height, use 0 for unbounded dimension; [width, height] */
    maxSize?: [number, number];
    minSelect?: [number, number];
    /** Set an initial selection area; [x, y, x2, y2] */
    setSelect?: [number, number, number, number];

    /** Set color of background container @default 'black' */
    bgColor?: string;
    /** Opacity of outer image when cropping; between 0 and 1 @default .6 */
    bgOpacity?: number;
    baseClass?: string;
    addClass?: string;
    bgFade?: boolean;
    borderOpacity?: number;
    handleOpacity?: number;
    handleSize?: number | null;

    /** Called when selection is completed */
    onSelect?: JCropEventHandler;
    /** Called when the selection is moving */
    onChange?: JCropEventHandler;
    /** Called when double-clicked */
    onDblClick?: JCropEventHandler;
    /** Called when the selection is released */
    onRelease?: JCropEventHandler;

    /** Maximum width of cropping area @default 0 (no limit) */
    boxWidth?: number;
    /** Maximum height of cropping area @default 0 (no limit) */
    boxHeight?: number;
    boundary?: number;
    fadeTime?: number;
    animationDelay?: number;
    swingSpeed?: number;

    /** Specify the true size of the image */
    trueSize?: [number, number];

    // Basic Settings
    allowSelect?: boolean;
    allowMove?: boolean;
    allowResize?: boolean;

    trackDocument?: boolean;

    keySupport?: boolean;
    createHandles?: Array<CardinalDirection | IntermediateDirection>;
    createDragbars?: CardinalDirection[];
    createBorders?: CardinalDirection[];
    drawBorders?: boolean;
    dragEdges?: boolean;
    fixedSupport?: boolean;
    touchSupport?: boolean | null;
    shade?: boolean | null;
  }

  type CardinalDirection = 'n' | 's' | 'e' | 'w';
  type IntermediateDirection = 'nw' | 'ne' | 'se' | 'sw';
  type JCropEventHandler = (c: SelectionInfo) => void;
  interface SelectionInfo {
    x: number;
    y: number;
    x2: number;
    y2: number;
    w: number;
    h: number;
  }

  interface Api {
    /** Set selection, format: [ x,y,x2,y2 ] */
    setSelect: (selection: [number, number, number, number]) => void;
    /** Animate selection to new selection, format: [ x,y,x2,y2 ] */
    animateTo: (selection: [number, number, number, number]) => void;
    /** Release current selection */
    release: () => void;

    /** Query current selection values (true size) */
    tellSelect: () => SelectionInfo;
    /** Query current selection values (interface)  */
    tellScaled: () => SelectionInfo;

    /** Disables Jcrop interactivity */
    disable: () => void;
    /** Enables Jcrop interactivity */
    enable: () => void;
    /** Remove Jcrop entirely */
    remove: () => void;
  }
}

interface JQuery {
  Jcrop(options?: JQuery.Jcrop.Options, callback?: (this: JQuery.Jcrop.Api) => void): JQuery;
}

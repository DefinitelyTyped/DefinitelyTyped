import { Decoration, DecorationOptions, DisplayMarker, Disposable } from '../index';

/** Represents a gutter within a TextEditor. */
export interface Gutter {
    // Gutter Destruction
    /** Destroys the gutter. */
    destroy(): void;

    // Event Subscription
    /** Calls your callback when the gutter's visibility changes. */
    onDidChangeVisible(callback: (gutter: Gutter) => void): Disposable;

    /** Calls your callback when the gutter is destroyed. */
    onDidDestroy(callback: () => void): Disposable;

    // Visibility
    /** Hide the gutter. */
    hide(): void;

    /** Show the gutter. */
    show(): void;

    /** Determine whether the gutter is visible. */
    isVisible(): boolean;

    /**
     *  Add a decoration that tracks a DisplayMarker. When the marker moves, is
     *  invalidated, or is destroyed, the decoration will be updated to reflect
     *  the marker's state.
     */
    decorateMarker(marker: DisplayMarker, decorationParams: DecorationOptions): Decoration;
}

export interface GutterOptions {
    /** (required) A unique String to identify this gutter. */
    name: string;

    /**
     * A Number that determines stacking order between gutters.
     * Lower priority items are forced closer to the edges of the window. (default: -100)
     */
    priority?: number;

    /**
     * Boolean specifying whether the gutter is visible initially after being created.
     * (default: true)
     */
    visible?: boolean;

    /**
     * String specifying the type of gutter to create.
     * 'decorated' gutters are useful as a destination for decorations created with
     * Gutter::decorateMarker.
     * 'line-number' gutters.
     */
    type?: 'decorated' | 'line-number';

    /** String added to the CSS classnames of the gutter's root DOM element. */
    class?: string;

    /**
     * Function called by a 'line-number' gutter to generate the label for each
     * line number element. Should return a String that will be used to label the
     * corresponding line.
     */
    labelFn?: (lineData: LineDataExtended) => string;

    /**
     * Function to be called when a mousedown event is received by a line-number
     * element within this type: 'line-number' Gutter. If unspecified, the default
     * behavior is to select the clicked buffer row.
     */
    onMouseDown?: (lineData: LineData) => void;

    /**
     * Function to be called when a mousemove event occurs on a line-number
     * element within within this type: 'line-number' Gutter.
     */
    onMouseMove?: (lineData: LineData) => void;
}

export interface LineData {
    /** Number indicating the zero-indexed buffer index of a line. */
    bufferRow: number;

    /** Number indicating the zero-indexed screen index. */
    screenRow: number;
}

/** Object containing information about each line to label. */
export interface LineDataExtended extends LineData {
    /** Boolean that is true if a fold may be created here. */
    foldable: boolean;

    /** Boolean if this screen row is the soft-wrapped continuation of the same buffer row. */
    softWrapped: boolean;

    /** Number the maximum number of digits necessary to represent any known screen row. */
    maxDigits: number;
}

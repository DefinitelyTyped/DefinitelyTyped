import { DecorationPropsChangedEvent, DisplayMarker, Disposable } from '../index';

/**
 *  Represents a decoration that follows a DisplayMarker. A decoration is basically
 *  a visual representation of a marker. It allows you to add CSS classes to line
 *  numbers in the gutter, lines, and add selection-line regions around marked ranges
 *  of text.
 */
export interface Decoration {
    /** The identifier for this Decoration. */
    readonly id: number;

    // Construction and Destruction
    /**
     *  Destroy this marker decoration.
     *  You can also destroy the marker if you own it, which will destroy this decoration.
     */
    destroy(): void;

    // Event Subscription
    /** When the Decoration is updated via Decoration::setProperties. */
    onDidChangeProperties(callback: (event: DecorationPropsChangedEvent) => void): Disposable;

    /** Invoke the given callback when the Decoration is destroyed. */
    onDidDestroy(callback: () => void): Disposable;

    // Decoration Details
    /** An id unique across all Decoration objects. */
    getId(): number;

    /** Returns the marker associated with this Decoration. */
    getMarker(): DisplayMarker;

    /**
     *  Check if this decoration is of the given type.
     *  @param type A decoration type, such as `line-number` or `line`. This may also
     *  be an array of decoration types, with isType returning true if the decoration's
     *  type matches any in the array.
     */
    isType(type: string | string[]): boolean;

    // Properties
    /** Returns the Decoration's properties. */
    getProperties(): DecorationOptions;

    /**
     *  Update the marker with new Properties. Allows you to change the decoration's
     *  class.
     */
    setProperties(newProperties: DecorationOptions): void;
}

export interface SharedDecorationOptions {
    /**
     *  This CSS class will be applied to the decorated line number, line, highlight,
     *  or overlay.
     */
    class?: string;

    /**
     *  An Object containing CSS style properties to apply to the relevant DOM
     *  node. Currently this only works with a type of cursor or text.
     */
    style?: object;

    /**
     *  An HTMLElement or a model Object with a corresponding view registered. Only
     *  applicable to the gutter, overlay and block types.
     */
    item?: object;

    /**
     *  If true, the decoration will only be applied to the head of the DisplayMarker.
     *  Only applicable to the line and line-number types.
     */
    onlyHead?: boolean;

    /**
     *  If true, the decoration will only be applied if the associated DisplayMarker
     *  is empty. Only applicable to the gutter, line, and line-number types.
     */
    onlyEmpty?: boolean;

    /**
     *  If true, the decoration will only be applied if the associated DisplayMarker
     *  is non-empty. Only applicable to the gutter, line, and line-number types.
     */
    onlyNonEmpty?: boolean;

    /**
     *  If false, the decoration will be applied to the last row of a non-empty
     *  range, even if it ends at column 0. Defaults to true. Only applicable
     *  to the gutter, line, and line-number decoration types.
     */
    omitEmptyLastRow?: boolean;

    /**
     *  Only applicable to decorations of type overlay and block. Controls where the
     *  view is positioned relative to the TextEditorMarker. Values can be
     *  'head' (the default) or 'tail' for overlay decorations, and 'before' (the default)
     *  or 'after' for block decorations.
     */
    position?: 'head' | 'tail' | 'before' | 'after';

    /**
     *  Only applicable to decorations of type block. Controls where the view is
     *  positioned relative to other block decorations at the same screen row.
     *  If unspecified, block decorations render oldest to newest.
     */
    order?: number;

    /**
     *  Only applicable to decorations of type overlay. Determines whether the decoration
     *  adjusts its horizontal or vertical position to remain fully visible when it would
     *  otherwise overflow the editor. Defaults to true.
     */
    avoidOverflow?: boolean;
}

export interface DecorationLayerOptions extends SharedDecorationOptions {
    /** One of several supported decoration types. */
    type?: 'line' | 'line-number' | 'text' | 'highlight' | 'block' | 'cursor';
}

export interface DecorationOptions extends SharedDecorationOptions {
    /** One of several supported decoration types. */
    type?: 'line' | 'line-number' | 'text' | 'highlight' | 'overlay' | 'gutter' | 'block' | 'cursor';

    /** The name of the gutter we're decorating, if type is "gutter". */
    gutterName?: string;
}

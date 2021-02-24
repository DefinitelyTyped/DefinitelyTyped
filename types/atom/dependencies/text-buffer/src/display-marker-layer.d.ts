import {
    Disposable,
    DisplayMarker,
    Marker,
    RangeCompatible,
    PointCompatible,
    FindDisplayMarkerOptions,
} from "../../../index";

/**
 *  Experimental: A container for a related set of markers at the DisplayLayer level.
 *  Wraps an underlying MarkerLayer on the TextBuffer.
 *
 *  This API is experimental and subject to change on any release.
 */
export interface DisplayMarkerLayer {
    /** The identifier for the underlying MarkerLayer. */
    readonly id: string;

    // Lifecycle
    /** Destroy this layer. */
    destroy(): void;

    /** Destroy all markers in this layer. */
    clear(): void;

    /** Determine whether this layer has been destroyed. */
    isDestroyed(): boolean;

    // Event Subscription
    /** Subscribe to be notified synchronously when this layer is destroyed. */
    onDidDestroy(callback: () => void): Disposable;

    /**
     *  Subscribe to be notified asynchronously whenever markers are created, updated,
     *  or destroyed on this layer. Prefer this method for optimal performance when
     *  interacting with layers that could contain large numbers of markers.
     */
    onDidUpdate(callback: () => void): Disposable;

    /**
     *  Subscribe to be notified synchronously whenever markers are created on this
     *  layer. Avoid this method for optimal performance when interacting with layers
     *  that could contain large numbers of markers.
     */
    onDidCreateMarker(callback: (marker: DisplayMarker | Marker) => void): Disposable;

    // Marker creation
    /** Create a marker with the given screen range. */
    markScreenRange(
        range: RangeCompatible,
        options?: {
            reversed?: boolean;
            invalidate?: "never" | "surround" | "overlap" | "inside" | "touch";
            exclusive?: boolean;
            clipDirection?: "backward" | "forward" | "closest";
        },
    ): DisplayMarker;

    /**
     *  Create a marker on this layer with its head at the given screen position
     *  and no tail.
     */
    markScreenPosition(
        screenPosition: PointCompatible,
        options?: {
            invalidate?: "never" | "surround" | "overlap" | "inside" | "touch";
            exclusive?: boolean;
            clipDirection?: "backward" | "forward" | "closest";
        },
    ): DisplayMarker;

    /** Create a marker with the given buffer range. */
    markBufferRange(
        range: RangeCompatible,
        options?: {
            reversed?: boolean;
            invalidate?: "never" | "surround" | "overlap" | "inside" | "touch";
            exclusive?: boolean;
        },
    ): DisplayMarker;

    /**
     *  Create a marker on this layer with its head at the given buffer position
     *  and no tail.
     */
    markBufferPosition(
        bufferPosition: PointCompatible,
        options?: {
            invalidate?: "never" | "surround" | "overlap" | "inside" | "touch";
            exclusive?: boolean;
        },
    ): DisplayMarker;

    // Querying
    /** Get an existing marker by its id. */
    getMarker(id: number): DisplayMarker;

    /** Get all markers in the layer. */
    getMarkers(): DisplayMarker[];

    /** Get the number of markers in the marker layer. */
    getMarkerCount(): number;

    /**
     *  Find markers in the layer conforming to the given parameters.
     *
     *  This method finds markers based on the given properties. Markers can be associated
     *  with custom properties that will be compared with basic equality. In addition,
     *  there are several special properties that will be compared with the range of the
     *  markers rather than their properties.
     */
    findMarkers(properties: FindDisplayMarkerOptions): DisplayMarker[];
}

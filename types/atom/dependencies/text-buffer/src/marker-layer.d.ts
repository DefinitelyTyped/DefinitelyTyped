import { Disposable } from '../../../index';
import { Marker, PointCompatible, RangeCompatible } from './text-buffer';

/** Experimental: A container for a related set of markers. */
export interface MarkerLayer {
    /** The identifier for this MarkerLayer. */
    readonly id: string;

    // Lifecycle
    /** Create a copy of this layer with markers in the same state and locations. */
    copy(): MarkerLayer;

    /** Destroy this layer. */
    destroy(): boolean;

    /** Remove all markers from this layer. */
    clear(): void;

    /** Determine whether this layer has been destroyed. */
    isDestroyed(): boolean;

    // Querying
    /** Get an existing marker by its id. */
    getMarker(id: number): Marker | undefined;

    /** Get all existing markers on the marker layer. */
    getMarkers(): Marker[];

    /** Get the number of markers in the marker layer. */
    getMarkerCount(): number;

    /** Find markers in the layer conforming to the given parameters. */
    findMarkers(params: FindMarkerOptions): Marker[];

    /** Get the role of the marker layer e.g. "atom.selection". */
    getRole(): string | undefined;

    // Marker Creation
    /** Create a marker with the given range. */
    markRange(
        range: RangeCompatible,
        options?: {
            reversed?: boolean;
            invalidate?: 'never' | 'surround' | 'overlap' | 'inside' | 'touch';
            exclusive?: boolean;
        },
    ): Marker;

    /** Create a marker at with its head at the given position with no tail. */
    markPosition(
        position: PointCompatible,
        options?: {
            invalidate?: 'never' | 'surround' | 'overlap' | 'inside' | 'touch';
            exclusive?: boolean;
        },
    ): Marker;

    // Event Subscription
    /**
     *  Subscribe to be notified asynchronously whenever markers are created,
     *  updated, or destroyed on this layer.
     */
    onDidUpdate(callback: () => void): Disposable;

    /**
     *  Subscribe to be notified synchronously whenever markers are created on
     *  this layer.
     */
    onDidCreateMarker(callback: (marker: Marker) => void): Disposable;

    /** Subscribe to be notified synchronously when this layer is destroyed. */
    onDidDestroy(callback: () => void): Disposable;
}

export interface FindMarkerOptions {
    /** Only include markers that start at the given Point. */
    startPosition?: PointCompatible;

    /** Only include markers that end at the given Point. */
    endPosition?: PointCompatible;

    /** Only include markers that start inside the given Range. */
    startsInRange?: RangeCompatible;

    /** Only include markers that end inside the given Range. */
    endsInRange?: RangeCompatible;

    /** Only include markers that contain the given Point, inclusive. */
    containsPoint?: PointCompatible;

    /** Only include markers that contain the given Range, inclusive. */
    containsRange?: RangeCompatible;

    /** Only include markers that start at the given row number. */
    startRow?: number;

    /** Only include markers that end at the given row number. */
    endRow?: number;

    /** Only include markers that intersect the given row number. */
    intersectsRow?: number;
}

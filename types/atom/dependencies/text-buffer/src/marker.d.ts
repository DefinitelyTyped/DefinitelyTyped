import { Disposable } from '../../../index';
import { Point, PointCompatible, Range, RangeCompatible } from './text-buffer';

/**
 *  Represents a buffer annotation that remains logically stationary even as
 *  the buffer changes.
 */
export interface Marker {
    /** The identifier for this Marker. */
    readonly id: number;

    // Lifecycle
    /**
     *  Creates and returns a new Marker with the same properties as this
     *  marker.
     */
    copy(options?: CopyMarkerOptions): Marker;

    /** Destroys the marker, causing it to emit the "destroyed" event. */
    destroy(): void;

    // Event Subscription
    /** Invoke the given callback when the marker is destroyed. */
    onDidDestroy(callback: () => void): Disposable;

    /** Invoke the given callback when the state of the marker changes. */
    onDidChange(callback: (event: MarkerChangedEvent) => void): Disposable;

    // Marker Details
    /** Returns the current range of the marker. The range is immutable. */
    getRange(): Range;

    /** Returns a point representing the marker's current head position. */
    getHeadPosition(): Point;

    /** Returns a point representing the marker's current tail position. */
    getTailPosition(): Point;

    /**
     *  Returns a point representing the start position of the marker, which
     *  could be the head or tail position, depending on its orientation.
     */
    getStartPosition(): Point;

    /**
     *  Returns a point representing the end position of the marker, which
     *  could be the head or tail position, depending on its orientation.
     */
    getEndPosition(): Point;

    /** Returns a boolean indicating whether the head precedes the tail. */
    isReversed(): boolean;

    /** Returns a boolean indicating whether the marker has a tail. */
    hasTail(): boolean;

    /** Is the marker valid? */
    isValid(): boolean;

    /** Is the marker destroyed? */
    isDestroyed(): boolean;

    /**
     *  Returns a boolean indicating whether changes that occur exactly at
     *  the marker's head or tail cause it to move.
     */
    isExclusive(): boolean;

    /** Get the invalidation strategy for this marker. */
    getInvalidationStrategy(): string;

    // Mutating Markers
    /**
     *  Sets the range of the marker.
     *  Returns a boolean indicating whether or not the marker was updated.
     */
    setRange(range: RangeCompatible, params?: { reversed?: boolean; exclusive?: boolean }): boolean;

    /**
     *  Sets the head position of the marker.
     *  Returns a boolean indicating whether or not the marker was updated.
     */
    setHeadPosition(position: PointCompatible): boolean;

    /**
     *  Sets the tail position of the marker.
     *  Returns a boolean indicating whether or not the marker was updated.
     */
    setTailPosition(position: PointCompatible): boolean;

    /**
     *  Removes the marker's tail.
     *  Returns a boolean indicating whether or not the marker was updated.
     */
    clearTail(): boolean;

    /**
     *  Plants the marker's tail at the current head position.
     *  Returns a boolean indicating whether or not the marker was updated.
     */
    plantTail(): boolean;

    // Comparison
    /**
     *  Returns a boolean indicating whether this marker is equivalent to
     *  another marker, meaning they have the same range and options.
     */
    isEqual(other: Marker): boolean;

    /**
     *  Compares this marker to another based on their ranges.
     *  Returns "-1" if this marker precedes the argument.
     *  Returns "0" if this marker is equivalent to the argument.
     *  Returns "1" if this marker follows the argument.
     */
    compare(other: Marker): number;
}

export interface CopyMarkerOptions {
    /** Whether or not the marker should be tailed. */
    tailed?: boolean;

    /** Creates the marker in a reversed orientation. */
    reversed?: boolean;

    /** Determines the rules by which changes to the buffer invalidate the marker. */
    invalidate?: 'never' | 'surround' | 'overlap' | 'inside' | 'touch';

    /**
     *  Indicates whether insertions at the start or end of the marked range should
     *  be interpreted as happening outside the marker.
     */
    exclusive?: boolean;

    /** Custom properties to be associated with the marker. */
    properties?: object;
}

export interface MarkerChangedEvent {
    /** Point representing the former head position. */
    oldHeadPosition: Point;

    /** Point representing the new head position. */
    newHeadPosition: Point;

    /** Point representing the former tail position. */
    oldTailPosition: Point;

    /** Point representing the new tail position. */
    newTailPosition: Point;

    /** Boolean indicating whether the marker was valid before the change. */
    wasValid: boolean;

    /** Boolean indicating whether the marker is now valid. */
    isValid: boolean;

    /** Boolean indicating whether the marker had a tail before the change. */
    hadTail: boolean;

    /** Boolean indicating whether the marker now has a tail. */
    hasTail: boolean;

    /**
     *  -DEPRECATED- Object containing the marker's custom properties before the change.
     *  @deprecated
     */
    oldProperties: object;

    /**
     *  -DEPRECATED- Object containing the marker's custom properties after the change.
     *  @deprecated
     */
    newProperties: object;

    /**
     *  Boolean indicating whether this change was caused by a textual
     *  change to the buffer or whether the marker was manipulated directly
     *  via its public API.
     */
    textChanged: boolean;
}

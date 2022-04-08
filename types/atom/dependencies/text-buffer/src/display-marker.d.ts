import { Disposable } from '../../../index';
import {
    CopyMarkerOptions,
    FindDisplayMarkerOptions,
    Point,
    PointCompatible,
    Range,
    RangeCompatible,
} from './text-buffer';

/**
 *  Represents a buffer annotation that remains logically stationary even as the
 *  buffer changes. This is used to represent cursors, folds, snippet targets,
 *  misspelled words, and anything else that needs to track a logical location
 *  in the buffer over time.
 */
export interface DisplayMarker {
    // Construction and Destruction
    /**
     *  Destroys the marker, causing it to emit the 'destroyed' event. Once destroyed,
     *  a marker cannot be restored by undo/redo operations.
     */
    destroy(): void;

    /** Creates and returns a new DisplayMarker with the same properties as this marker. */
    copy(options?: CopyMarkerOptions): DisplayMarker;

    // Event Subscription
    /** Invoke the given callback when the state of the marker changes. */
    onDidChange(callback: (event: DisplayMarkerChangedEvent) => void): Disposable;

    /** Invoke the given callback when the marker is destroyed. */
    onDidDestroy(callback: () => void): Disposable;

    // TextEditorMarker Details
    /**
     *  Returns a boolean indicating whether the marker is valid. Markers can be
     *  invalidated when a region surrounding them in the buffer is changed.
     */
    isValid(): boolean;

    /**
     *  Returns a boolean indicating whether the marker has been destroyed. A marker
     *  can be invalid without being destroyed, in which case undoing the invalidating
     *  operation would restore the marker.
     */
    isDestroyed(): boolean;

    /** Returns a boolean indicating whether the head precedes the tail. */
    isReversed(): boolean;

    /**
     *  Returns a boolean indicating whether changes that occur exactly at the marker's
     *  head or tail cause it to move.
     */
    isExclusive(): boolean;

    /**
     *  Get the invalidation strategy for this marker.
     *  Valid values include: never, surround, overlap, inside, and touch.
     */
    getInvalidationStrategy(): string;

    /** Returns an Object containing any custom properties associated with the marker. */
    getProperties(): object;

    /** Merges an Object containing new properties into the marker's existing properties. */
    setProperties(properties: object): void;

    /** Returns whether this marker matches the given parameters. */
    matchesProperties(attributes: FindDisplayMarkerOptions): boolean;

    // Comparing to other markers
    /** Compares this marker to another based on their ranges. */
    compare(other: DisplayMarker): number;

    /**
     *  Returns a boolean indicating whether this marker is equivalent to another
     *  marker, meaning they have the same range and options.
     */
    isEqual(other: DisplayMarker): boolean;

    // Managing the marker's range
    /** Gets the buffer range of this marker. */
    getBufferRange(): Range;

    /** Gets the screen range of this marker. */
    getScreenRange(): Range;

    /** Modifies the buffer range of this marker. */
    setBufferRange(bufferRange: RangeCompatible, properties?: { reversed: boolean }): void;

    /** Modifies the screen range of this marker. */
    setScreenRange(
        screenRange: RangeCompatible,
        options?: { reversed?: boolean; clipDirection?: 'backward' | 'forward' | 'closest' },
    ): void;

    /**
     *  Retrieves the screen position of the marker's start. This will always be
     *  less than or equal to the result of DisplayMarker::getEndScreenPosition.
     */
    getStartScreenPosition(options?: { clipDirection: 'backward' | 'forward' | 'closest' }): Point;

    /**
     *  Retrieves the screen position of the marker's end. This will always be
     *  greater than or equal to the result of DisplayMarker::getStartScreenPosition.
     */
    getEndScreenPosition(options?: { clipDirection: 'backward' | 'forward' | 'closest' }): Point;

    /** Retrieves the buffer position of the marker's head. */
    getHeadBufferPosition(): Point;

    /** Sets the buffer position of the marker's head. */
    setHeadBufferPosition(bufferPosition: PointCompatible): void;

    /** Retrieves the screen position of the marker's head. */
    getHeadScreenPosition(options?: { clipDirection: 'backward' | 'forward' | 'closest' }): Point;

    /** Sets the screen position of the marker's head. */
    setHeadScreenPosition(
        screenPosition: PointCompatible,
        options?: { clipDirection: 'backward' | 'forward' | 'closest' },
    ): void;

    /** Retrieves the buffer position of the marker's tail. */
    getTailBufferPosition(): Point;

    /** Sets the buffer position of the marker's tail. */
    setTailBufferPosition(bufferPosition: PointCompatible): void;

    /** Retrieves the screen position of the marker's tail. */
    getTailScreenPosition(options?: { clipDirection: 'backward' | 'forward' | 'closest' }): Point;

    /** Sets the screen position of the marker's tail. */
    setTailScreenPosition(
        screenPosition: PointCompatible,
        options?: { clipDirection: 'backward' | 'forward' | 'closest' },
    ): void;

    /**
     *  Retrieves the buffer position of the marker's start. This will always be less
     *  than or equal to the result of DisplayMarker::getEndBufferPosition.
     */
    getStartBufferPosition(): Point;

    /**
     *  Retrieves the buffer position of the marker's end. This will always be greater
     *  than or equal to the result of DisplayMarker::getStartBufferPosition.
     */
    getEndBufferPosition(): Point;

    /** Returns a boolean indicating whether the marker has a tail. */
    hasTail(): boolean;

    /**
     *  Plants the marker's tail at the current head position. After calling the
     *  marker's tail position will be its head position at the time of the call,
     *  regardless of where the marker's head is moved.
     */
    plantTail(): void;

    /**
     *  Removes the marker's tail. After calling the marker's head position will be
     *  reported as its current tail position until the tail is planted again.
     */
    clearTail(): void;
}

export interface DisplayMarkerChangedEvent {
    /** Point representing the former head buffer position. */
    oldHeadBufferPosition: Point;

    /** Point representing the new head buffer position. */
    newHeadBufferPosition: Point;

    // Point representing the former tail buffer position. */
    oldTailBufferPosition: Point;

    /** Point representing the new tail buffer position. */
    newTailBufferPosition: Point;

    /** Point representing the former head screen position. */
    oldHeadScreenPosition: Point;

    /** Point representing the new head screen position. */
    newHeadScreenPosition: Point;

    /** Point representing the former tail screen position. */
    oldTailScreenPosition: Point;

    /** Point representing the new tail screen position. */
    newTailScreenPosition: Point;

    /** Boolean indicating whether the marker was valid before the change. */
    wasValid: boolean;

    /** Boolean indicating whether the marker is now valid. */
    isValid: boolean;

    /** Boolean indicating whether the marker had a tail before the change. */
    hadTail: boolean;

    /** Boolean indicating whether the marker now has a tail */
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
     *  Boolean indicating whether this change was caused by a textual change to the
     *  buffer or whether the marker was manipulated directly via its public API.
     */
    textChanged: boolean;
}

import Position from "./position";
import Range from "./range";
import MarkerCollection from "./markercollection";
import { Item } from "./item";
import Operation from "./operation/operation";

/**
 * Calculates the difference between two model states.
 *
 * Receives operations that are to be applied on the model document. Marks parts of the model document tree which
 * are changed and saves the state of these elements before the change. Then, it compares saved elements with the
 * changed elements, after all changes are applied on the model document. Calculates the diff between saved
 * elements and new ones and returns a change set.
 */
export default class Differ {
    /**
     * Creates a `Differ` instance.
     */
    constructor(markerCollection: MarkerCollection);

    /**
     * Informs whether there are any changes buffered in `Differ`.
     */
    get isEmpty(): boolean;

    /**
     * Marks given `item` in differ to be "refreshed". It means that the item will be marked as removed and inserted in the differ changes
     * set, so it will be effectively re-converted when differ changes will be handled by a dispatcher.
     */
    refreshItem(item: Item): void;

    /**
     * Buffers the given operation. An operation has to be buffered before it is executed.
     *
     * Operation type is checked and it is checked which nodes it will affect. These nodes are then stored in `Differ`
     * in the state before the operation is executed.
     */
    bufferOperation(operation: Operation): void;

    /**
     * Buffers a marker change.
     */
    bufferMarkerChange(markerName: string, oldRange: Range | null, newRange: Range | null, affectsData: boolean): void;

    /**
     * Returns all markers that should be removed as a result of buffered changes.
     */
    getMarkersToRemove(): Array<{ name: string; range: Range }>;

    /**
     * Returns all markers which should be added as a result of buffered changes.
     */
    getMarkersToAdd(): Array<{ name: string; range: Range }>;

    /**
     * Returns all markers which changed.
     */
    getChangedMarkers(): Array<{ name: string; range: Range }>;

    /**
     * Checks whether some of the buffered changes affect the editor data.
     *
     * Types of changes which affect the editor data:
     *
     * * model structure changes,
     * * attribute changes,
     * * changes of markers which were defined as `affectingData`.
     */
    hasDataChanges(): boolean;

    /**
     * Calculates the diff between the old model tree state (the state before the first buffered operations since the last {@link #reset}
     * call) and the new model tree state (actual one). It should be called after all buffered operations are executed.
     *
     * The diff set is returned as an array of diff items, each describing a change done on the model. The items are sorted by
     * the position on which the change happened. If a position {@link module:engine/model/position~Position#isBefore is before}
     * another one, it will be on an earlier index in the diff set.
     *
     * Because calculating the diff is a costly operation, the result is cached. If no new operation was buffered since the
     * previous {@link #getChanges} call, the next call will return the cached value.
     */
    getChanges(options?: { includeChangesInGraveyard?: boolean }): object[];

    /**
     * Resets `Differ`. Removes all buffered changes.
     */
    reset(): void;
}

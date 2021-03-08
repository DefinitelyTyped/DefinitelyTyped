import Position from "./position";
import Range from "./range";
import LiveRange from "./liverange";

/**
 * The collection of all {@link module:engine/model/markercollection~Marker markers} attached to the document.
 * It lets you {@link module:engine/model/markercollection~MarkerCollection#get get} markers or track them using
 * {@link module:engine/model/markercollection~MarkerCollection#event:update} event.
 *
 * To create, change or remove makers use {@link module:engine/model/writer~Writer model writers'} methods:
 * {@link module:engine/model/writer~Writer#addMarker} or {@link module:engine/model/writer~Writer#removeMarker}. Since
 * the writer is the only proper way to change the data model it is not possible to change markers directly using this
 * collection. All markers created by the writer will be automatically added to this collection.
 *
 * By default there is one marker collection available as {@link module:engine/model/model~Model#markers model property}.
 *
 * @see module:engine/model/markercollection~Marker
 */
export default class MarkerCollection implements Iterable<Marker> {
    /**
     * Iterable interface.
     *
     * Iterates over all {@link ~Marker markers} added to the collection.
     */
    [Symbol.iterator](): Iterator<Marker>;
    /**
     * Checks if marker with given `markerName` is in the collection.
     */
    has(markerName: string): boolean;
    /**
     * Returns {@link ~Marker marker} with given `markerName`.
     */
    get(markerName: string): Marker;
    /**
     * Returns iterator that iterates over all markers, which ranges contain given {@link module:engine/model/position~Position position}.
     */
    getMarkersAtPosition(position: Position): Marker;
    /**
     * Returns iterator that iterates over all markers, which intersects with given {@link module:engine/model/range~Range range}.
     */
    getMarkersIntersectingRange(range: Range): Marker;
    /**
     * Destroys marker collection and all markers inside it.
     */
    destroy(): void;
    /**
     * Iterates over all markers that starts with given `prefix`.
     *
     *        const markerFooA = markersCollection.set( 'foo:a', rangeFooA );
     *        const markerFooB = markersCollection.set( 'foo:b', rangeFooB );
     *        const markerBarA = markersCollection.set( 'bar:a', rangeBarA );
     *        const markerFooBarA = markersCollection.set( 'foobar:a', rangeFooBarA );
     *        Array.from( markersCollection.getMarkersGroup( 'foo' ) ); // [ markerFooA, markerFooB ]
     *        Array.from( markersCollection.getMarkersGroup( 'a' ) ); // []
     */
    getMarkersGroup(prefix: string): Iterable<Marker>;
}

export class Marker {
    /**
     * Creates a marker instance.
     */
    constructor(name: string, liveRange: LiveRange, managedUsingOperations: boolean, affectsData: boolean);

    /**
     * A value indicating if the marker is managed using operations.
     * See {@link ~Marker marker class description} to learn more about marker types.
     * See {@link module:engine/model/writer~Writer#addMarker}.
     */
    get managedUsingOperations(): boolean;

    /**
     * A value indicating if the marker changes the data.
     */
    get affectsData(): boolean;

    /**
     * Returns current marker start position.
     */
    getStart(): Position;

    /**
     * Returns current marker end position.
     */
    getEnd(): Position;

    /**
     * Returns a range that represents the current state of the marker.
     *
     * Keep in mind that returned value is a {@link module:engine/model/range~Range Range}, not a
     * {@link module:engine/model/liverange~LiveRange LiveRange}. This means that it is up-to-date and relevant only
     * until next model document change. Do not store values returned by this method. Instead, store {@link ~Marker#name}
     * and get `Marker` instance from {@link module:engine/model/markercollection~MarkerCollection MarkerCollection} every
     * time there is a need to read marker properties. This will guarantee that the marker has not been removed and
     * that it's data is up-to-date.
     */
    getRange(): Range;

    /**
     * Checks whether this object is of the given.
     *
     *        marker.is( 'marker' ); // -> true
     *        marker.is( 'model:marker' ); // -> true
     *
     *        marker.is( 'view:element' ); // -> false
     *        marker.is( 'documentSelection' ); // -> false
     *
     * {@link module:engine/model/node~Node#is Check the entire list of model objects} which implement the `is()` method.
     */
    is(type: string): boolean;
}

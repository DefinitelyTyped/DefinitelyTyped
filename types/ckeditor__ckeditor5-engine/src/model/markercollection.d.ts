import Position from "./position";
import Range from "./range";
import LiveRange from "./liverange";

export default class MarkerCollection implements Iterable<Marker> {
    constructor();
    [Symbol.iterator](): Iterator<Marker>;
    destroy(): void;
    get(markerName: string): Marker | null;
    getMarkersAtPosition(position: Position): Generator<Marker>;
    getMarkersGroup(prefix: string): Generator<Marker>;
    getMarkersIntersectingRange(range: Range): Generator<Marker>;
    has(markerName: string): boolean;
}

export class Marker {
    readonly affectsData: boolean;
    readonly managedUsingOperations: boolean;
    readonly name: string;

    constructor(name: string, liveRange: LiveRange, managedUsingOperations: boolean, affectsData: boolean);
    getEnd(): Position;
    getRange(): Range;
    getStart(): Position;
    is(type: string): boolean;
}

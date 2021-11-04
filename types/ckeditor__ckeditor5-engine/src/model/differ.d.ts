import { Item } from "./item";
import MarkerCollection, { Marker } from "./markercollection";
import Operation from "./operation/operation";
import Position from "./position";
import Range from "./range";

export default class Differ {
    readonly isEmpty: boolean;

    constructor(markerCollection: MarkerCollection);
    bufferMarkerChange(markerName: string, oldRange: Range | null, newRange: Range | null, affectsData: boolean): void;
    bufferOperation(operation: Operation): void;
    getChangedMarkers(): Marker[];
    getChanges(options?: { includeChangesInGraveyard?: boolean | undefined }): DiffItem[];
    getMarkersToAdd(): Marker[];
    getMarkersToRemove(): Marker[];
    hasDataChanges(): boolean;
    refreshItem(item: Item): void;
    reset(): void;
}

export type DiffItem = DiffItemInsert | DiffItemRemove | DiffItemAttribute;

export class DiffItemAttribute {
    attributeKey: string;
    attributeNewValue: string;
    attributeOldValue: string;
    range: Range;
    type: "attribute";
}

export class DiffItemInsert {
    length: number;
    name: string;
    position: Position;
    type: "insert";
}

export class DiffItemRemove {
    length: number;
    name: string;
    position: Position;
    type: "remove";
}

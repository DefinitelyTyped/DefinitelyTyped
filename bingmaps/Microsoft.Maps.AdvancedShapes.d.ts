// Type definitions for Microsoft.Maps.AdvancedShapes 7.0
// Project: http://msdn.microsoft.com/en-us/library/hh921952.aspx
// Definitions by: Eric Todd <https://github.com/ericrtodd>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="Microsoft.Maps.d.ts"/>

declare module Microsoft.Maps.AdvancedShapes {

    export class EntityCollection {

        constructor(options: EntityCollectionOptions);

        clear(): void;
        get(index: number): Entity;
        getLength(): number;
        getVisible(): boolean;
        getZIndex(): number;
        indexOf(entity: Entity): number;
        insert(entity: Entity, index: number): void;
        pop(): Entity;
        push(entity: Entity): void;
        remove(entity: Entity): Entity;
        removeAt(index: number): Entity;
        setOptions(options: EntityCollectionOptions): void;
        toString(): string;

        entityAdded: (args: EntityChangeArgs) => any;
        entityChanged: (args: EntityChangeArgs) => any;
        entityRemoved: (args: EntityChangeArgs) => any;
    }

    export class Polygon implements Entity {

        constructor(locations: Array<Location>, options?: PolygonOptions);

        getFillColor(): Color;
        getLocations(): Array<Location>;
        getStrokeColor(): Color;
        getStrokeDashArray(): string;
        getStrokeThickness(): number;
        getVisible(): boolean;
        setLocations(locations: Location[]): void;
        setOptions(options: PolylineOptions): void;
        toString(): string;

        click: (eventArgs: MouseEventArgs) => void;
        dbclick: (eventArgs: MouseEventArgs) => void;
        entitychanged: (entity: Entity) => void;
        mousedown: (eventArgs: MouseEventArgs) => void;
        mouseout: (eventArgs: MouseEventArgs) => void;
        mouseover: (eventArgs: MouseEventArgs) => void;
        mouseup: (eventArgs: MouseEventArgs) => void;
        rightclick: (eventArgs: MouseEventArgs) => void;
    }

}
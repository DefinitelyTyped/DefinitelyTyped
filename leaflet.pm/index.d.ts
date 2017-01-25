// Type definitions for leaflet.pm 0.13
// Project: https://github.com/codeofsumit/leaflet.pm
// Definitions by: Thomas Kleinke <https://github.com/tkleinke>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="leaflet" />

declare namespace L {

    export interface Map {
        pm: PM.Map;
    }

    export interface Polygon {
        pm: PM.Edit.Line;
    }

    export interface Polyline {
        pm: PM.Edit.Line;
    }

    export interface Marker {
        pm: PM.Edit.Marker;
    }

    export interface LayerGroup {
        pm: PM.Edit.LayerGroup;
    }

    export namespace PM {

        export interface Map {
            addControls(options?: PM.ToolbarOptions): void;
            enableDraw(shape: string, options?: PM.DrawOptions): void;
            disableDraw(shape: string): void;
            setPathOptions(options: L.PathOptions): void;
            toggleRemoval(enabled: boolean): void;
            globalEditEnabled(): boolean;
            toggleGlobalEditMode(options?: PM.EditOptions): void;

            Draw: PM.Draw;
        }

        export interface Draw {
            getShapes(): string[];
        }

        export interface ToolbarOptions {
            position?: string; // topleft | topright | bottomleft | bottomright
            drawMarker?: boolean;
            drawPolygon?: boolean;
            drawPolyline?: boolean;
            editPolygon?: boolean;
            deleteLayer?: boolean;
        }

        export interface DrawOptions {
            templineStyle?: L.PathOptions;
            hintlineStyle?: L.PathOptions;
            pathOptions?: L.PathOptions;
        }

        export interface EditOptions {
            draggable?: boolean;
            snappable?: boolean;
            snapDistance?: number;
        }

        export namespace Edit {

            export interface Line {
                enable(options?: EditOptions): void;
                disable(poly?: L.Layer): void;
                toggleEdit(options?: EditOptions): void;
                enabled(): boolean;
            }

            export interface Marker {
                enable(options?: EditOptions): void;
                disable(): void;
                toggleEdit(options?: EditOptions): void;
                enabled(): boolean;
            }

            export interface LayerGroup {
                enable(options?: EditOptions): void;
                disable(): void;
                toggleEdit(options?: EditOptions): void;
                enabled(): boolean;
                findLayers(): L.Layer[];
                dragging(): boolean;
                getOptions(): EditOptions;
            }
        }
    }
}

// Type definitions for leaflet.pm 0.13
// Project: https://github.com/codeofsumit/leaflet.pm
// Definitions by: Thomas Kleinke <https://github.com/tkleinke>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="leaflet" />

declare namespace L {
    interface Map {
        pm: PM.Map;
    }

    interface Polygon {
        pm: PM.Edit.Line;
    }

    interface Polyline {
        pm: PM.Edit.Line;
    }

    interface Marker {
        pm: PM.Edit.Marker;
    }

    interface LayerGroup {
        pm: PM.Edit.LayerGroup;
    }

    namespace PM {
        interface Map {
            addControls(options?: PM.ToolbarOptions): void;
            enableDraw(shape: string, options?: PM.DrawOptions): void;
            disableDraw(shape: string): void;
            setPathOptions(options: L.PathOptions): void;
            toggleRemoval(enabled: boolean): void;
            globalEditEnabled(): boolean;
            toggleGlobalEditMode(options?: PM.EditOptions): void;

            Draw: PM.Draw;
        }

        interface Draw {
            getShapes(): string[];
        }

        interface ToolbarOptions {
            position?: string; // topleft | topright | bottomleft | bottomright
            drawMarker?: boolean;
            drawPolygon?: boolean;
            drawPolyline?: boolean;
            editPolygon?: boolean;
            deleteLayer?: boolean;
        }

        interface DrawOptions {
            templineStyle?: L.PathOptions;
            hintlineStyle?: L.PathOptions;
            pathOptions?: L.PathOptions;
        }

        interface EditOptions {
            draggable?: boolean;
            snappable?: boolean;
            snapDistance?: number;
        }

        namespace Edit {
            interface Line {
                enable(options?: EditOptions): void;
                disable(poly?: L.Layer): void;
                toggleEdit(options?: EditOptions): void;
                enabled(): boolean;
            }

            interface Marker {
                enable(options?: EditOptions): void;
                disable(): void;
                toggleEdit(options?: EditOptions): void;
                enabled(): boolean;
            }

            interface LayerGroup {
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

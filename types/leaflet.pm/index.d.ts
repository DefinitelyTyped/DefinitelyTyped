// Type definitions for leaflet.pm 0.13
// Project: https://github.com/codeofsumit/leaflet.pm, https://leafletpm.now.sh
// Definitions by: Thomas Kleinke <https://github.com/tkleinke>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as L from 'leaflet';

declare module 'leaflet' {
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
            addControls(options?: ToolbarOptions): void;
            enableDraw(shape: string, options?: DrawOptions): void;
            disableDraw(shape: string): void;
            setPathOptions(options: PathOptions): void;
            toggleRemoval(enabled: boolean): void;
            globalEditEnabled(): boolean;
            toggleGlobalEditMode(options?: EditOptions): void;

            Draw: Draw;
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
            templineStyle?: PathOptions;
            hintlineStyle?: PathOptions;
            pathOptions?: PathOptions;
        }

        interface EditOptions {
            draggable?: boolean;
            snappable?: boolean;
            snapDistance?: number;
        }

        namespace Edit {
            interface Line {
                enable(options?: EditOptions): void;
                disable(poly?: Layer): void;
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
                findLayers(): Layer[];
                dragging(): boolean;
                getOptions(): EditOptions;
            }
        }
    }
}

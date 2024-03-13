import * as L from "leaflet";

declare module "leaflet" {
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
            position?: string | undefined; // topleft | topright | bottomleft | bottomright
            drawMarker?: boolean | undefined;
            drawPolygon?: boolean | undefined;
            drawPolyline?: boolean | undefined;
            editPolygon?: boolean | undefined;
            deleteLayer?: boolean | undefined;
        }

        interface DrawOptions {
            templineStyle?: PathOptions | undefined;
            hintlineStyle?: PathOptions | undefined;
            pathOptions?: PathOptions | undefined;
        }

        interface EditOptions {
            draggable?: boolean | undefined;
            snappable?: boolean | undefined;
            snapDistance?: number | undefined;
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

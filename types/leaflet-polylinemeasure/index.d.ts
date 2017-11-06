// Type definitions for leaflet.polylinemeasure 1.0
// Project: https://github.com/ppete2/Leaflet.PolylineMeasure#readme
// Definitions by: Rinat Sultanov <https://github.com/RiON69>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="leaflet" />

declare module L {
    namespace Control {

        export interface PolylineMeasure extends L.Control {
            new (options?: PolylineMeasureOptions): any;
        }

        export interface PolylineMeasureOptions {
            position?: string;
            unit?: string;
            measureControlTitleOn?: string;
            measureControlTitleOff?: string;
            measureControlLabel?: string;
            measureControlClasses?: any[];
            backgroundColor?: string;
            cursor?: string;
            clearMeasurementsOnStop?: boolean;
            showMeasurementsClearControl?: boolean;
            clearControlTitle?: string;
            clearControlLabel?: string;
            clearControlClasses?: any[];
            showUnitControl?: boolean;
            tempLine?: any;
            fixedLine?: any;
            startCircle?: any;
            intermedCircle?: any;
            currentCircle?: any;
            endCircle?: any;
        }
    }

    export namespace control {
        export function polylineMeasure (options?: Control.PolylineMeasureOptions): Control.PolylineMeasure;
    }
}

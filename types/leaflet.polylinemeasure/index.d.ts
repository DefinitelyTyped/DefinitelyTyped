// Type definitions for leaflet.polylinemeasure 1.0
// Project: https://github.com/ppete2/Leaflet.PolylineMeasure#readme
// Definitions by: Rinat Sultanov <https://github.com/RiON69>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as L from 'leaflet';

declare module 'leaflet' {
    namespace Control {
        interface PolylineMeasure extends Control {
            new (options?: PolylineMeasureOptions): any;
        }

        interface PolylineMeasureOptions {
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

    namespace control {
        function polylineMeasure(options?: Control.PolylineMeasureOptions): Control.PolylineMeasure;
    }
}

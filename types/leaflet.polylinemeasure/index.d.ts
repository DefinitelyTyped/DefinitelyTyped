// Type definitions for leaflet.polylinemeasure 1.0
// Project: https://github.com/ppete2/Leaflet.PolylineMeasure#readme
// Definitions by: Rinat Sultanov <https://github.com/RiON69>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as L from "leaflet";

declare module "leaflet" {
    namespace Control {
        interface PolylineMeasure extends Control {
            new(options?: PolylineMeasureOptions): any;
        }

        interface PolylineMeasureOptions {
            position?: string | undefined;
            unit?: string | undefined;
            measureControlTitleOn?: string | undefined;
            measureControlTitleOff?: string | undefined;
            measureControlLabel?: string | undefined;
            measureControlClasses?: any[] | undefined;
            backgroundColor?: string | undefined;
            cursor?: string | undefined;
            clearMeasurementsOnStop?: boolean | undefined;
            showMeasurementsClearControl?: boolean | undefined;
            clearControlTitle?: string | undefined;
            clearControlLabel?: string | undefined;
            clearControlClasses?: any[] | undefined;
            showUnitControl?: boolean | undefined;
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

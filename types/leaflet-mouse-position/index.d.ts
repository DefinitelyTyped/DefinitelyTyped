// Type definitions for leaflet-mouse-position 1.2
// Project: https://github.com/danwild/Leaflet.MousePosition
// Definitions by: Hanyon <https://github.com/Hanyon>
//                 Håkon <https://github.com/hlovdal>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { ControlOptions, Control as LControl } from 'leaflet';

declare module 'leaflet' {
    interface MapOptions {
        positionControl?: boolean;
    }

    namespace control {
        function mousePosition(options?: Control.MousePositionControlOptions): Control.MousePosition;
    }

    namespace Control {
        interface MousePositionControlOptions extends ControlOptions {
            separator?: string;
            emptyString?: string;
            lngFirst?: boolean;
            numDigits?: number;
            lngFormatter?: (lng: number) => string;
            latFormatter?: (lat: number) => string;
            formatter?: (lng: number, lat: number) => string;
            prefix?: string;
            wrapLng?: boolean;
        }

        class MousePosition extends LControl {
            options: MousePositionControlOptions;

            constructor(options?: MousePositionControlOptions);
        }
    }
}

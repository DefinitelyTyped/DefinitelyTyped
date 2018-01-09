// Type definitions for leaflet.mouseposition 1.0
// Project: https://github.com/ardhi/Leaflet.MousePosition (Does not have to be to GitHub, but prefer linking to a source code repository rather than to a project website.)
// Definitions by: Hanyon <https://github.com/Hanyon>
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
            prefix?: string;
        }

        class MousePosition extends LControl {
            options: MousePositionControlOptions;

            constructor(options?: MousePositionControlOptions);
        }
    }
}

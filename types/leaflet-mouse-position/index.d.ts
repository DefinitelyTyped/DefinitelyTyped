// Type definitions for leaflet-mouse-position 1.2
// Project: https://github.com/danwild/Leaflet.MousePosition
// Definitions by: Hanyon <https://github.com/Hanyon>
//                 Håkon <https://github.com/hlovdal>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Control as LControl, ControlOptions } from "leaflet";

declare module "leaflet" {
    interface MapOptions {
        positionControl?: boolean | undefined;
    }

    namespace control {
        function mousePosition(options?: Control.MousePositionControlOptions): Control.MousePosition;
    }

    namespace Control {
        interface MousePositionControlOptions extends ControlOptions {
            separator?: string | undefined;
            emptyString?: string | undefined;
            lngFirst?: boolean | undefined;
            numDigits?: number | undefined;
            lngFormatter?: ((lng: number) => string) | undefined;
            latFormatter?: ((lat: number) => string) | undefined;
            formatter?: ((lng: number, lat: number) => string) | undefined;
            prefix?: string | undefined;
            wrapLng?: boolean | undefined;
        }

        class MousePosition extends LControl {
            options: MousePositionControlOptions;

            constructor(options?: MousePositionControlOptions);
        }
    }
}

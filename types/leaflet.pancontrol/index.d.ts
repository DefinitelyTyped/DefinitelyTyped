// Type definitions for leaflet.pancontrol 1.0
// Project: https://github.com/kartena/Leaflet.Pancontrol
// Definitions by: Brictarus <https://github.com/Brictarus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Control as LControl, ControlOptions } from "leaflet";

declare module "leaflet" {
    interface MapOptions {
        panControl?: boolean | undefined;
    }

    namespace control {
        function pan(options?: Control.PanControlOptions): Control.Pan;
    }

    namespace Control {
        interface PanControlOptions extends ControlOptions {
            panOffset?: number | undefined;
        }

        class Pan extends LControl {
            options: PanControlOptions;

            constructor(options?: PanControlOptions);
        }
    }
}

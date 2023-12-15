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

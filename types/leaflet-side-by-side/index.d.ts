import * as L from "leaflet";

declare module "leaflet" {
    namespace control {
        function sideBySide(
            leftLayers: Layer[] | Layer,
            rightLayers: Layer[] | Layer,
            options?: Control.SideBySideOptions,
        ): Control.SideBySide;
    }

    namespace Control {
        interface SideBySideOptions extends ControlOptions {
            thumbSize?: number;
            padding?: number;
        }

        interface SideBySide extends Control {
            options: SideBySideOptions;
            setLeftLayers(leftLayers: Layer[] | Layer): this;
            setRightLayers(rightLayers: Layer[] | Layer): this;
            getPosition(): any;
            setPosition(): this;
            addTo(map: Map): this;
            remove(): this;
        }
    }
}

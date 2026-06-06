import * as L from "leaflet";

declare module "leaflet" {
    namespace Control {
        class GroupedLayers extends Control {
            constructor(
                baseLayers: { [index: string]: Layer },
                groupedOverlays: { [index: string]: { [index: string]: LayerGroup } },
                options: GroupedLayersOptions,
            );
        }
    }

    namespace control {
        function groupedLayers(
            baseLayers: { [index: string]: Layer },
            groupedOverlays: { [index: string]: { [index: string]: LayerGroup } },
            options: GroupedLayersOptions,
        ): Control;
    }

    interface GroupedLayersOptions extends ControlOptions {
        /** Default: true */
        collapsed?: boolean | undefined;
        /** Default: true */
        autoZIndex?: boolean | undefined;
        exclusiveGroups?: string[] | undefined;
        /** Default: false */
        groupCheckboxes?: boolean | undefined;
    }
}

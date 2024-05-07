import * as L from "leaflet";

declare module "leaflet" {
    namespace FeatureGroup {
        /**
         * An extended FeatureGroup that adds its child layers into a parent
         * group when added to a map (e.g., through L.Control.Layers). Typical
         * usage is to dynamically add and remove groups of markers from marker
         * clusters.
         */
        class SubGroup<P = any> extends FeatureGroup<P> {
            /**
             * Instantiates a SubGroup.
             */
            constructor(parentGroup?: LayerGroup, layers?: Layer[]);

            /**
             * Changes the parent group into which child markers are added to or
             * removed from.
             */
            setParentGroup(parentGroup: LayerGroup): this;

            /**
             * Removes the current sub-group from map before changing the parent
             * group. Re-adds the sub-group to map if it was before changing.
             */
            setParentGroupSafe(parentGroup: LayerGroup): this;

            /**
             * Returns the current parent group.
             */
            getParentGroup(): LayerGroup;
        }
    }

    namespace featureGroup {
        /**
         * Creates a feature subgroup, optionally given an initial parent group and a set of layers.
         */
        function subGroup(parentGroup?: LayerGroup, layers?: Layer[]): FeatureGroup.SubGroup;
    }
}

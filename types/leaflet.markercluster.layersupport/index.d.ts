// Type definitions for Leaflet.MarkerCluster.LayerSupport 1.0
// Project: https://github.com/ghybs/Leaflet.MarkerCluster.LayerSupport
// Definitions by: AsamK <https://github.com/AsamK>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as Leaflet from "leaflet";
import * as MakerCluster from "leaflet.markercluster";

export = Leaflet;

declare global { namespace L {
    namespace MarkerClusterGroup {
        interface LayerSupport extends MarkerClusterGroup {
            /**
             * Stamps the passed layers as being part of this group, but without adding
             * them to the map right now.
             */
            checkIn(layers: Layer | Layer[]): this;

            /**
             * Un-stamps the passed layers from being part of this group. It has to
             * remove them from map (if they are) since they will no longer cluster.
             */
            checkOut(layers: Layer | Layer[]): this;
        }
    }
    namespace markerClusterGroup {
        /**
         * Create a layer support marker cluster group, optionally given marker cluster group options.
         */
        function layerSupport(options?: MarkerClusterGroupOptions): MarkerClusterGroup.LayerSupport;
    }
} }

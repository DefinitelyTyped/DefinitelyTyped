// Type definitions for Leaflet.MarkerCluster.LayerSupport 1.0
// Project: https://github.com/ghybs/Leaflet.MarkerCluster.LayerSupport
// Definitions by: AsamK <https://github.com/AsamK>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as L from 'leaflet';
import 'leaflet.markercluster';

declare module 'leaflet' {
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

    interface MarkerClusterGroupLayerSupportOptions extends MarkerClusterGroupOptions {
        /**
         * Buffer single addLayer and removeLayer requests for efficiency.
         */
        singleAddRemoveBufferDuration: number;
    }

    namespace markerClusterGroup {
        /**
         * Create a layer support marker cluster group, optionally given marker cluster group options.
         */
        function layerSupport(options?: MarkerClusterGroupLayerSupportOptions): MarkerClusterGroup.LayerSupport;
    }
}

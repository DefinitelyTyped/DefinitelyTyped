// Type definitions for leaflet.canvas-flowmap-layer 1.0
// Project: https://github.com/jwasilgeo/Leaflet.Canvas-Flowmap-Layer/blob/master/README.md
// Definitions by: Rinat Sultanov <https://github.com/RiON69>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3


import * as L from 'leaflet';

declare module 'leaflet' {
    function canvasFlowmapLayer(originAndDestinationGeoJsonPoints: any, opts?: any): any;
}
// Type definitions for leaflet-curve 0.1
// Project: https://github.com/onikiienko/Leaflet.curve
// Definitions by: Onikiienko <https://github.com/onikiienko>
//                 Andrea <https://github.com/AndreaCimini>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import * as L from 'leaflet';

declare module 'leaflet' {
    class Curve extends Path {
        /*
        * Return path
        */
        getPath(): Array<string | Array<[]>>;
        /*
        * Set path
        */
        setPath(): Curve;
        /*
        * Get bounds
        */
        getBounds(): LatLngBounds;
        /*
        * Get center
        */
        getCenter(): LatLng;
    }
    /*
     * Drawing Bezier curves and other complex shapes.
     */
    function curve(path: any[], options?: PathOptions): Curve;
}

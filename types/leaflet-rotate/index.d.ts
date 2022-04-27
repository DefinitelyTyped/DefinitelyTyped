// Type definitions for leaflet-rotate 0.1
// Project: https://github.com//Raruto/leaflet-rotate
// Definitions by: Brian Jubelirer <https://github.com/bjubes>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as L from 'leaflet';

declare module 'leaflet' {
    interface MapOptions {
        rotate?: boolean;
        bearing?: number;
    }

    interface Map {
        setBearing: (theta: number) => void;
        getBearing: () => number;
        rotatedPointToMapPanePoint: (point: Point) => Point;
        mapPanePointToRotatedPoint: (point: Point) => Point;
    }
}

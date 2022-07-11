// Type definitions for leaflet-rotate 0.1
// Project: https://github.com//Raruto/leaflet-rotate
// Definitions by: Brian Jubelirer <https://github.com/bjubes>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as L from 'leaflet';

declare module 'leaflet' {
    interface MapOptions {
        rotate?: boolean;
        bearing?: number;
        trackContainerMutation?: boolean;
        touchRotate?: boolean | string;
        shiftKeyRotate?: boolean | string;
        rotateControl?: boolean;
    }

    interface Map {
        setBearing: (theta: number) => void;
        getBearing: () => number;
        rotatedPointToMapPanePoint: (point: Point) => Point;
        mapPanePointToRotatedPoint: (point: Point) => Point;
    }

    interface Point {
        rotate: (theta: number) => Point;
        rotateFrom: (theta: number, pivot: Point) => Point;
    }

    interface MarkerOptions {
        rotation?: number;
        rotateWithView?: boolean;
    }

    interface Marker {
        setRotation: (rotation: number) => void;
    }
}

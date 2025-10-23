import L = require("leaflet");

declare module "leaflet" {
    interface MapOptions {
        rotate?: boolean;
        bearing?: number;
        trackContainerMutation?: boolean;
        touchRotate?: boolean | string;
        shiftKeyRotate?: boolean | string;
        rotateControl?: boolean | {
            position?: string;
            closeOnZeroBearing?: boolean;
        };
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
        scale?: number;
    }

    interface Marker {
        setRotation: (rotation: number) => void;
    }
}

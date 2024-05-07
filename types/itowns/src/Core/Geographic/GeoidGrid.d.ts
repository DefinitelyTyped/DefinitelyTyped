import * as THREE from "three";
import Coordinates from "./Coordinates";
import Extent from "./Extent";

declare class GeoidGrid {
    constructor(
        extent: Extent,
        step: THREE.Vector2,
        getData: (x: number, y: number) => number,
    );

    extent: Extent;
    step: THREE.Vector2;
    dimensions: THREE.Vector2;
    dataSize: THREE.Vector2;
    getData: (x: number, y: number) => number;

    getHeightAtCoordinates(coordinates: Coordinates): number;
}

export default GeoidGrid;

declare namespace AMap {
    class ArrayBounds {
        constructor(bounds: LocationValue[]);
        bounds: LngLat[];
        contains(point: LocationValue): boolean;
        // internal
        toBounds(): Bounds;
        getCenter(): LngLat;
    }
}

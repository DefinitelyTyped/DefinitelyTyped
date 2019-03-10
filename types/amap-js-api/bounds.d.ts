declare namespace AMap {
    class Bounds {
        constructor(southWest: LngLat, northEast: LngLat);
        contains(point: LocationValue): boolean;
        getCenter(): LngLat;
        getSouthWest(): LngLat;
        getSouthEast(): LngLat;
        getNorthEast(): LngLat;
        getNorthWest(): LngLat;
        toString(): string;
    }
}

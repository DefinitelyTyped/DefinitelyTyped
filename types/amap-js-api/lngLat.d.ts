declare namespace AMap {
    class LngLat {
        constructor(lng: number, lat: number, noAutofix?: boolean);
        offset(east: number, north: number): LngLat;
        distance(lnglat: LngLat | LngLat[]): number;
        getLng(): number;
        getLat(): number;
        equals(lnglat: LngLat): boolean;
        toString(): string;

        // internal
        add(lnglat: LngLat, noAutofix?: boolean): LngLat;
        subtract(lnglat: LngLat, noAutofix?: boolean): LngLat;
        divideBy(num: number, noAutofix?: boolean): LngLat;
        multiplyBy(num: number, noAutofix?: boolean): LngLat;
    }
}

import { LatLng, LatLngBounds, LatLngExpression, Map, Point, PointExpression } from "leaflet";

declare module "leaflet" {
    class RasterCoords {
        constructor(map: Map, imgsize: number[], tilesize?: number, setmaxbounds?: boolean);

        zoomLevel(): number;
        unproject(coords: PointExpression): LatLng;
        project(coords: LatLngExpression): Point;
        getMaxBounds(): LatLngBounds;
        setMaxBounds(): void;
    }
}

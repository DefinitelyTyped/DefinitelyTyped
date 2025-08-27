import * as L from "leaflet";

// geodesic
declare module "leaflet" {
    function geodesicPolyline(latlngs: LatLng[], options?: PolylineOptions): GeodesicPolyline;
    function geodesicPolygon(latlngs: LatLng[], options?: PolylineOptions): GeodesicPolygon;

    class GeodesicPolyline extends Polyline {
        getLatLngs(): LatLng[];
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    class GeodesicPolygon extends GeodesicPolyline {
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    class GeodesicCircle extends Polyline {
    }
}

import * as L from "leaflet";

// geodesic
declare module "leaflet" {
    function geodesicPolyline(latlngs: LatLng[], options?: PolylineOptions): GeodesicPolyline;
    function geodesicPolygon(latlngs: LatLng[], options?: PolylineOptions): GeodesicPolygon;

    class GeodesicPolyline extends Polyline {
        getLatLngs(): LatLng[];
    }

    // tslint:disable-next-line:no-empty-interface
    class GeodesicPolygon extends GeodesicPolyline {
    }

    // tslint:disable-next-line:no-empty-interface
    class GeodesicCircle extends Polyline {
    }
}

import * as geojson from "geojson";
import * as L from "leaflet";
import * as proj4 from "proj4";

declare module "leaflet" {
    namespace Proj {
        class CRS implements CRS {
            projection: Projection;
            transformation: Transformation;
            code?: string | undefined;
            wrapLng?: [number, number] | undefined;
            wrapLat?: [number, number] | undefined;
            infinite: boolean;

            constructor(projection: proj4.InterfaceProjection, options?: ProjCRSOptions);
            constructor(code: string, proj4def: string, options?: ProjCRSOptions);

            latLngToPoint(latlng: LatLngExpression, zoom: number): Point;

            pointToLatLng(point: PointExpression, zoom: number): LatLng;

            project(latlng: LatLng | LatLngLiteral): Point;

            unproject(point: PointExpression): LatLng;

            scale(zoom: number): number;

            zoom(scale: number): number;

            getProjectedBounds(zoom: number): Bounds;

            distance(latlng1: LatLngExpression, latlng2: LatLngExpression): number;

            wrapLatLng(latlng: LatLng | LatLngLiteral): LatLng;
        }

        class GeoJSON extends L.GeoJSON {}

        function geoJson(geojson?: Proj4GeoJSONFeature, options?: GeoJSONOptions): GeoJSON;

        class ImageOverlay extends L.ImageOverlay {}

        function imageOverlay(
            imageUrl: string,
            bounds: LatLngBoundsExpression,
            options?: ImageOverlayOptions,
        ): ImageOverlay;

        interface ProjCRSOptions {
            bounds?: Bounds | undefined;
            origin?: [number, number] | undefined;
            scales?: number[] | undefined;
            resolutions?: number[] | undefined;
            transformation?: Transformation | undefined;
        }
    }
}
export type Proj4GeoJSONFeature = geojson.Feature<geojson.GeometryObject> & {
    crs?: { type: string; properties: { name: string } } | undefined;
};

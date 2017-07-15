// Type definitions for proj4leaflet 1.0
// Project: https://github.com/kartena/Proj4Leaflet#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="leaflet" />

declare namespace L {
  namespace Proj {
    class CRS implements L.CRS {
      projection: Projection;
      transformation: Transformation;
      code?: string;
      wrapLng?: [number, number];
      wrapLat?: [number, number];
      infinite: boolean;

      constructor(projection: InterfaceProjection, options?: ProjCRSOptions);
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

    class GeoJSON extends L.GeoJSON {
    }

    const geoJson: (geojson?: GeoJSONGeoJsonObject, options?: GeoJSONOptions) => GeoJSON;

    class ImageOverlay extends L.ImageOverlay {
    }

    const imageOverlay: (imageUrl: string, bounds: LatLngBoundsExpression, options?: ImageOverlayOptions) => ImageOverlay;

    interface ProjCRSOptions {
      bounds?: Bounds;
      origin?: [number, number];
      scales?: number[];
      resolutions?: number[];
      transformation?: Transformation;
    }

    interface InterfaceProjection {
      datum: string;
      b: number;
      rf: number;
      sphere: number;
      es: number;
      e: number;
      ep2: number;
      forward(coordinates: TemplateCoordinates): number[];
      inverse(coordinates: TemplateCoordinates): number[];
    }

    type TemplateCoordinates = number[] | InterfaceCoordinates;

    interface InterfaceCoordinates {
      x: number;
      y: number;
      z?: number;
      m?: number;
    }
  }
}

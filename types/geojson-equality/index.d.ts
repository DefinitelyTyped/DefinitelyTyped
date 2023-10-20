/// <reference types="geojson" />

declare class GeojsonEquality {
    constructor(
        options?: Partial<{
            /**
             * Precision used in floating point comparison.
             * @default 17
             */
            precision: number;

            /**
             * Direction of LineString or Polygon (orientation) is ignored if false
             * @default false
             */
            direction: boolean;

            /**
             * Custom function for use in comparing Feature properties
             * @default shallowEquals
             */
            objectComparator: (a: Record<string, any>, b: Record<string, any>) => boolean;
        }>,
    );

    compare(a: GeoJSON.GeoJsonObject, b: GeoJSON.GeoJsonObject): boolean;
}

export = GeojsonEquality;

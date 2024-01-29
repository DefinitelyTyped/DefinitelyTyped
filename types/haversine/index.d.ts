declare namespace haversine {
    interface CoordinateLongitudeLatitude {
        longitude: number;
        latitude: number;
    }

    interface CoordinateLonLat {
        lon: number;
        lat: number;
    }

    interface CoordinateLatLng {
        lat: number;
        lng: number;
    }

    type LatLonTuple = [number, number];

    interface GeoJSON {
        geometry: {
            coordinates: number[]; // matches Point type in types/geojson.
        };
    }

    type Coordinate = CoordinateLongitudeLatitude | CoordinateLonLat | CoordinateLatLng | LatLonTuple | GeoJSON;

    interface Options {
        /** Unit of measurement applied to result. Default: "km". */
        unit?: "km" | "mile" | "meter" | "nmi" | undefined;
        /**
         * If passed, will result in library returning boolean value of whether or not the start and end points are within that supplied threshold.
         */
        threshold?: number | null | undefined;
        /** Format of coordinate arguments. */
        format?: "[lat,lon]" | "[lon,lat]" | "{lon,lat}" | "{lat,lng}" | "geojson" | undefined;
    }

    // The input & output types of haversine() both depend on the Options object.
    type ParamType<T extends Options | undefined> = T extends undefined ? CoordinateLongitudeLatitude
        : T extends { format: "[lat,lon]" | "[lon,lat]" } ? [number, number]
        : T extends { format: "{lat,lon}" } ? CoordinateLonLat
        : T extends { format: "{lat,lng}" } ? CoordinateLatLng
        : T extends { format: "geojson" } ? GeoJSON
        : Coordinate;

    type Return<T extends Options | undefined> = T extends { threshold: number } ? boolean : number;
}

/**
 * Determines the great-circle distance between two points on a sphere given their longitudes and latitudes
 */
declare function haversine<OptionsT extends haversine.Options | undefined = undefined>(
    start: haversine.ParamType<OptionsT>,
    end: haversine.ParamType<OptionsT>,
    options?: OptionsT,
): haversine.Return<OptionsT>;

export = haversine;

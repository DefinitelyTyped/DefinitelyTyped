import * as GeoJSON from "geojson";

interface Parse {
    /**
     * Remove meaningless precision from your GeoJSON.
     *
     * @param coordinatePrecision A positive integer. If your specified precision value
     *        is greater than the precision of the input geometry, the output precision
     *        will be the same as the input. For example, if your input coordinates are
     *        `[10.0, 20.0]`, and you specify a precision of `5`, the output will be the
     *        same as the input.
     *
     * @param extrasPrecision A positive integer specifying extra coordinate precision
     *        for things like the `z` value when the coordinate is
     *        `[longitude, latitude, elevation]`.
     */
    <T extends GeoJSON.Geometry>(
        geometry: T,
        coordinatePrecision: number,
        extrasPrecision?: number,
    ): T;
    parse: Parse;
}

declare const parse: Parse;
export = parse;

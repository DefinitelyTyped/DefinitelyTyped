import { convert, ConvertResponse } from "geo-coordinates-parser";

const coordinates = convert("40° 26.7717, -79° 56.93172");
coordinates.decimalLatitude; // $ExpectType number
coordinates.decimalLongitude; // $ExpectType number
coordinates.decimalCoordinates; // $ExpectType string
coordinates.verbatimCoordinates; // $ExpectType string
coordinates.verbatimLatitude; // $ExpectType string
coordinates.verbatimLongitude; // $ExpectType string

import * as wellknown from 'wellknown';

// $ExpectType GeoJSONGeometry | null
wellknown.parse("POINT(1 2)");

const geoJson: wellknown.GeoJSONGeometry = {
    coordinates: [1, 2],
    type: "Point"
};
wellknown.stringify(geoJson); // $ExpectType string

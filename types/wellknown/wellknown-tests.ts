import * as wellknown from 'wellknown';

wellknown.parse("POINT(1 2)"); // $ExpectType GeoJSONGeometry

const geoJson: wellknown.GeoJSONGeometry = {
    coordinates: [1, 2],
    type: "Point"
};

wellknown.stringify(geoJson); // $ExpectType string

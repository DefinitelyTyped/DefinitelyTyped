import * as wellknown from 'wellknown';

wellknown.parse("POINT(1 2)"); // $ExpectType GeoJSONGeometryOrNull

const geoJson: wellknown.GeoJSONGeometry = {
    coordinates: [1, 2],
    type: "Point"
};

wellknown.stringify(geoJson); // $ExpectType string

wellknown.parse("GEOMETRYCOLLECTION (POINT (1 2))"); // $ExpectType GeoJSONGeometryOrNull

const geometryCollection: wellknown.GeoJSONGeometry = {
    type: "GeometryCollection",
    geometries: [
        {
            type: "Point",
            coordinates: [1, 2]
        },
        {
            type: "Polygon",
            coordinates: [[[1, 2], [2, 3], [3, 4], [4, 1]]]
        }
    ]
};

wellknown.stringify(geometryCollection); // $ExpectType string

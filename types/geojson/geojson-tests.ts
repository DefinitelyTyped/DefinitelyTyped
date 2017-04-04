let featureCollection: GeoJSON.FeatureCollection<any> =  {
    type: "FeatureCollection",
    features: [
        {
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: [102.0, 0.5]
            },
            properties: {
                prop0: "value0"
            }
        },
        {
            type: "Feature",
            geometry: {
                type: "LineString",
                coordinates: [
                    [102.0, 0.0],
                    [103.0, 1.0],
                    [104.0, 0.0],
                    [105.0, 1.0]
                ]
            },
            properties: {
                prop0: "value0",
                prop1: 0.0
            }
        },
        {
            type: "Feature",
            geometry: {
                type: "Polygon",
                coordinates: [
                    [ [100.0, 0.0], [101.0, 0.0], [101.0, 1.0], [100.0, 1.0], [100.0, 0.0] ]
                ]
            },
            properties: {
                prop0: "value0",
                prop1: {
                    that: "this"
                }
            }
        }
    ],
    crs: {
        type: "link",
        properties: {
            href: "http://example.com/crs/42",
            type: "proj4"
        }
    }
};

let featureWithPolygon: GeoJSON.Feature<GeoJSON.Polygon> = {
    type: "Feature",
    bbox: [-180.0, -90.0, 180.0, 90.0],
    geometry: {
        type: "Polygon",
        coordinates: [
            [[-180.0, 10.0], [20.0, 90.0], [180.0, -5.0], [-30.0, -90.0]]
        ]
    },
    properties: null
};

let point: GeoJSON.Point = {
	type: "Point",
	coordinates: [100.0, 0.0]
};

// This type is commonly used in the turf package
let pointCoordinates: number[] = point.coordinates;

let lineString: GeoJSON.LineString = {
	type: "LineString",
	coordinates: [ [100.0, 0.0], [101.0, 1.0] ]
};

let polygon: GeoJSON.Polygon = {
    type: "Polygon",
    coordinates: [
        [ [100.0, 0.0], [101.0, 0.0], [101.0, 1.0], [100.0, 1.0], [100.0, 0.0] ]
    ]
};

let polygonWithHole: GeoJSON.Polygon = {
    type: "Polygon",
    coordinates: [
        [ [100.0, 0.0], [101.0, 0.0], [101.0, 1.0], [100.0, 1.0], [100.0, 0.0] ],
        [ [100.2, 0.2], [100.8, 0.2], [100.8, 0.8], [100.2, 0.8], [100.2, 0.2] ]
    ]
};

let multiPoint: GeoJSON.MultiPoint = {
    type: "MultiPoint",
    coordinates: [ [100.0, 0.0], [101.0, 1.0] ]
};

let multiLineString: GeoJSON.MultiLineString = {
    type: "MultiLineString",
    coordinates: [
        [ [100.0, 0.0], [101.0, 1.0] ],
        [ [102.0, 2.0], [103.0, 3.0] ]
    ]
};

let multiPolygon: GeoJSON.MultiPolygon = {
    type: "MultiPolygon",
    coordinates: [
        [[[102.0, 2.0], [103.0, 2.0], [103.0, 3.0], [102.0, 3.0], [102.0, 2.0]]],
        [[[100.0, 0.0], [101.0, 0.0], [101.0, 1.0], [100.0, 1.0], [100.0, 0.0]],
         [[100.2, 0.2], [100.8, 0.2], [100.8, 0.8], [100.2, 0.8], [100.2, 0.2]]]
    ]
};

let geometryCollection: GeoJSON.GeometryCollection = {
    type: "GeometryCollection",
    geometries: [
        {
            type: "Point",
            coordinates: [100.0, 0.0]
        },
        {
            type: "LineString",
            coordinates: [ [101.0, 0.0], [102.0, 1.0] ]
        }
    ]
};

let feature: GeoJSON.Feature<GeoJSON.GeometryObject> = {
    type: "Feature",
    geometry: lineString,
    properties: null
};
feature = {
    type: "Feature",
    geometry: polygon,
    properties: null
};
feature = {
    type: "Feature",
    geometry: polygonWithHole,
    properties: null
};
feature = {
    type: "Feature",
    geometry: multiPoint,
    properties: null
};
feature = {
    type: "Feature",
    geometry: multiLineString,
    properties: null
};
feature = {
    type: "Feature",
    geometry: multiPolygon,
    properties: null
};
feature = {
    type: "Feature",
    geometry: geometryCollection,
    properties: null
};

featureCollection = {
    type: "FeatureCollection",
    features: [
        {
            type: "Feature",
            geometry: lineString,
            properties: {test: 'OK'}
        }, {
            type: "Feature",
            geometry: polygon,
            properties: {test: 'OK'}
        }, {
            type: "Feature",
            geometry: polygonWithHole,
            properties: {test: 'OK'}
        }, {
            type: "Feature",
            geometry: multiPoint,
            properties: {test: 'OK'}
        }, {
            type: "Feature",
            geometry: multiLineString,
            properties: {test: 'OK'}
        }, {
            type: "Feature",
            geometry: multiPolygon,
            properties: {test: 'OK'}
        }, {
            type: "Feature",
            geometry: geometryCollection,
            properties: {test: 'OK'}
        }
    ],
    crs: {
        type: "link",
        properties: {
            href: "http://example.com/crs/42",
            type: "proj4"
        }
    }
};

/// <reference path="./geojson.d.ts" />

var featureCollection: GeoJSON.FeatureCollection =  { 
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
}

var feature: GeoJSON.Feature = { 
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


var point: GeoJSON.Point = { 
	type: "Point",
	coordinates: [100.0, 0.0]
};

var lineString: GeoJSON.LineString = {
	type: "LineString",
	coordinates: [ [100.0, 0.0], [101.0, 1.0] ]
};

var polygon: GeoJSON.Polygon = { 
    type: "Polygon",
    coordinates: [
        [ [100.0, 0.0], [101.0, 0.0], [101.0, 1.0], [100.0, 1.0], [100.0, 0.0] ]
    ]
};

var polygonWithHole: GeoJSON.Polygon = { 
    type: "Polygon",
    coordinates: [
        [ [100.0, 0.0], [101.0, 0.0], [101.0, 1.0], [100.0, 1.0], [100.0, 0.0] ],
        [ [100.2, 0.2], [100.8, 0.2], [100.8, 0.8], [100.2, 0.8], [100.2, 0.2] ]
    ]
};

var multiPoint: GeoJSON.MultiPoint = {
    type: "MultiPoint",
    coordinates: [ [100.0, 0.0], [101.0, 1.0] ]
};

var multiLineString: GeoJSON.MultiLineString = { 
    type: "MultiLineString",
    coordinates: [
        [ [100.0, 0.0], [101.0, 1.0] ],
        [ [102.0, 2.0], [103.0, 3.0] ]
    ]
};

var multiPolygon: GeoJSON.MultiPolygon = { 
    type: "MultiPolygon",
    coordinates: [
        [[[102.0, 2.0], [103.0, 2.0], [103.0, 3.0], [102.0, 3.0], [102.0, 2.0]]],
        [[[100.0, 0.0], [101.0, 0.0], [101.0, 1.0], [100.0, 1.0], [100.0, 0.0]],
         [[100.2, 0.2], [100.8, 0.2], [100.8, 0.8], [100.2, 0.8], [100.2, 0.2]]]
    ]
}

var geometryCollection: GeoJSON.GeometryCollection = { 
    type: "GeometryCollection",
    "geometries": [
        { 
            type: "Point",
            coordinates: [100.0, 0.0]
        },
        { 
            type: "LineString",
            coordinates: [ [101.0, 0.0], [102.0, 1.0] ]
        }
    ]
}
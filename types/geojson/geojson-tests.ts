import {
    Feature, FeatureCollection, GeometryCollection, LineString,
    MultiLineString, MultiPoint, MultiPolygon, Point, Polygon, GeoJsonGeometryTypes,
    GeoJsonTypes, GeometryObject
} from "geojson";

let featureCollection: FeatureCollection = {
    type: "FeatureCollection",
    features: [
        {
            id: 1234,
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
            id: "stringid",
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
                    [[100.0, 0.0], [101.0, 0.0], [101.0, 1.0], [100.0, 1.0], [100.0, 0.0]]
                ]
            },
            properties: {
                prop0: "value0",
                prop1: {
                    that: "this"
                }
            }
        }
    ]
};

featureCollection.type;  // $ExpectType "FeatureCollection"
featureCollection.features[0].type;  // $ExpectType "Feature"
featureCollection.features[0].geometry;  // $ExpectType Geometry
featureCollection.features[0].geometry.type;  // $ExpectType "Point" | "MultiPoint" | "LineString" | "MultiLineString" | "Polygon" | "MultiPolygon" | "GeometryCollection"

declare let geometryTypes: GeoJsonGeometryTypes;
geometryTypes; // $ExpectType "Point" | "MultiPoint" | "LineString" | "MultiLineString" | "Polygon" | "MultiPolygon" | "GeometryCollection"

declare let geojsonTypes: GeoJsonTypes;
geojsonTypes; // $ExpectType "FeatureCollection" | "Feature" | "Point" | "MultiPoint" | "LineString" | "MultiLineString" | "Polygon" | "MultiPolygon" | "GeometryCollection"

const featureWithPolygon: Feature<Polygon> = {
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

featureWithPolygon.type;  // $ExpectType "Feature"
featureWithPolygon.geometry;  // $ExpectType Polygon
featureWithPolygon.geometry.type;  // $ExpectType "Polygon"
featureWithPolygon.geometry.coordinates;  // $ExpectType number[][][] || Position[][]

const point: Point = {
    type: "Point",
    coordinates: [100.0, 0.0]
};

// This type is commonly used in the turf package
const pointCoordinates: number[] = point.coordinates;

const lineString: LineString = {
    type: "LineString",
    coordinates: [[100.0, 0.0], [101.0, 1.0]]
};

const polygon: Polygon = {
    type: "Polygon",
    coordinates: [
        [[100.0, 0.0], [101.0, 0.0], [101.0, 1.0], [100.0, 1.0], [100.0, 0.0]]
    ]
};

const polygonWithHole: Polygon = {
    type: "Polygon",
    coordinates: [
        [[100.0, 0.0], [101.0, 0.0], [101.0, 1.0], [100.0, 1.0], [100.0, 0.0]],
        [[100.2, 0.2], [100.8, 0.2], [100.8, 0.8], [100.2, 0.8], [100.2, 0.2]]
    ]
};

const multiPoint: MultiPoint = {
    type: "MultiPoint",
    coordinates: [[100.0, 0.0], [101.0, 1.0]]
};

const multiLineString: MultiLineString = {
    type: "MultiLineString",
    coordinates: [
        [[100.0, 0.0], [101.0, 1.0]],
        [[102.0, 2.0], [103.0, 3.0]]
    ]
};

const multiPolygon: MultiPolygon = {
    type: "MultiPolygon",
    coordinates: [
        [[[102.0, 2.0], [103.0, 2.0], [103.0, 3.0], [102.0, 3.0], [102.0, 2.0]]],
        [[[100.0, 0.0], [101.0, 0.0], [101.0, 1.0], [100.0, 1.0], [100.0, 0.0]],
        [[100.2, 0.2], [100.8, 0.2], [100.8, 0.8], [100.2, 0.8], [100.2, 0.2]]]
    ]
};

const geometryCollection: GeometryCollection = {
    type: "GeometryCollection",
    geometries: [
        {
            type: "Point",
            coordinates: [100.0, 0.0]
        },
        {
            type: "LineString",
            coordinates: [[101.0, 0.0], [102.0, 1.0]]
        }
    ]
};

let feature: Feature<GeometryObject> = {
    type: "Feature",
    geometry: lineString,
    properties: null
};

feature.properties;  // $ExpectType GeoJsonProperties

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
            properties: { test: "OK" }
        }, {
            type: "Feature",
            geometry: polygon,
            properties: { test: "OK" }
        }, {
            type: "Feature",
            geometry: polygonWithHole,
            properties: { test: "OK" }
        }, {
            type: "Feature",
            geometry: multiPoint,
            properties: { test: "OK" }
        }, {
            type: "Feature",
            geometry: multiLineString,
            properties: { test: "OK" }
        }, {
            type: "Feature",
            geometry: multiPolygon,
            properties: { test: "OK" }
        }, {
            type: "Feature",
            geometry: geometryCollection,
            properties: { test: "OK" }
        }
    ]
};

// Allow access to custom properties
const pt: Feature<Point> = {
    type: "Feature",
    properties: {
        foo: "bar",
        hello: "world",
        1: 2
    },
    geometry: {
        type: "Point",
        coordinates: [0, 0]
    }
};

if (pt.properties) {
    if (pt.properties.foo == null || pt.properties.hello == null || pt.properties[1] == null) {
        throw TypeError("Properties should not be null or undefined.");
    }
} else {
    throw TypeError("Feature should have a 'properties' property.");
}

// Optional generic for properties

interface TestProperty {
    foo: "bar" | "baz";
    hello: string;
}

const testProps: TestProperty = {
    foo: "baz",
    hello: "world"
};

const typedPropertiesFeature: Feature<Point> = {
    type: "Feature",
    properties: testProps,
    geometry: {
        type: "Point",
        coordinates: [0, 0]
    }
};

const typedPropertiesFeatureCollection: FeatureCollection<Point> = {
    type: "FeatureCollection",
    features: [typedPropertiesFeature]
};

// Strict Null Checks

let isNull: null;
let isPoint: Point;
let isPointOrNull: Point | null;
let isProperty: TestProperty;
let isPropertyOrNull: TestProperty | null;

const featureAllNull: Feature<null, null> = {
    type: "Feature",
    properties: null,
    geometry: null
};

const featurePropertyNull: Feature<Point, null> = {
    type: "Feature",
    properties: null,
    geometry: point
};

const featureGeometryNull: Feature<null, TestProperty> = {
    type: "Feature",
    properties: testProps,
    geometry: null
};

featureGeometryNull.properties.foo;  // $ExpectType "bar" | "baz"

const featureNoNull: Feature<Point, TestProperty> = {
    type: "Feature",
    properties: testProps,
    geometry: point
};

featureNoNull.geometry.type;  // $ExpectType "Point"

const collectionAllNull: FeatureCollection<null, null> = {
    type: "FeatureCollection",
    features: [featureAllNull],
};

const collectionMaybeNull: FeatureCollection<Point | null, TestProperty | null> = {
    type: "FeatureCollection",
    features: [featureAllNull, featurePropertyNull, featureGeometryNull, featureNoNull],
};

const collectionPropertyMaybeNull: FeatureCollection<Point, TestProperty | null> = {
    type: "FeatureCollection",
    features: [featurePropertyNull, featureNoNull],
};

const collectionGeometryMaybeNull: FeatureCollection<Point | null, TestProperty> = {
    type: "FeatureCollection",
    features: [featureGeometryNull, featureNoNull],
};

collectionGeometryMaybeNull.features[0].geometry;  // $ExpectType Point | null

const collectionNoNull: FeatureCollection<Point, TestProperty> = {
    type: "FeatureCollection",
    features: [featureNoNull],
};

const collectionDefault: FeatureCollection = {
    type: "FeatureCollection",
    features: []
};

collectionDefault.features[0].geometry;  // $ExpectType Geometry
collectionDefault.features[0].properties!.foo;  // $ExpectType any

isNull = featureAllNull.geometry;
isPoint = featurePropertyNull.geometry;
isNull = featureAllNull.properties;
isProperty = featureGeometryNull.properties;

isNull = collectionAllNull.features[0].geometry;
isPointOrNull = collectionMaybeNull.features[0].geometry;
isPoint = collectionPropertyMaybeNull.features[0].geometry;
isPointOrNull = collectionGeometryMaybeNull.features[0].geometry;
isPoint = collectionNoNull.features[0].geometry;

isNull = collectionAllNull.features[0].properties;
isPropertyOrNull = collectionMaybeNull.features[0].properties;
isPropertyOrNull = collectionPropertyMaybeNull.features[0].properties;
isProperty = collectionGeometryMaybeNull.features[0].properties;
isProperty = collectionNoNull.features[0].properties;

for (const { geometry } of collectionDefault.features) {
    switch (geometry.type) {
        case "Point":
            isPoint = geometry;
            break;
        case "GeometryCollection":
            for (const child of geometry.geometries) {
                if (child.type === "Point") {
                    isPoint = child;
                }
            }
            break;
    }
}

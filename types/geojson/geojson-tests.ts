import {
    BBox,
    Feature, FeatureCollection, GeometryCollection, LineString,
    MultiLineString, MultiPoint, MultiPolygon, Point, Polygon, GeometryObject
} from "geojson";

let featureCollection: FeatureCollection<Point | LineString | Polygon | MultiPoint | MultiLineString | MultiPolygon | GeometryCollection> = {
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
    foo: "bar",
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

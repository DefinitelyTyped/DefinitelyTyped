// Tests for: https://github.com/topojson/topojson-specification

// Geometry Objects

const point: topojson.Point = {
    type: "Point",
    coordinates: [0, 0],
};

const multiPoint: topojson.MultiPoint = {
    type: "MultiPoint",
    coordinates: [[0, 0]],
};

const lineString: topojson.LineString = {
    type: "LineString",
    arcs: [0],
};

const multiLineString: topojson.MultiLineString = {
    type: "MultiLineString",
    arcs: [[3], [4]],
};

const polygon: topojson.Polygon = {
    type: "Polygon",
    arcs: [[0]],
};

const multiPolygon: topojson.MultiPolygon = {
    type: "MultiPolygon",
    arcs: [[[0]]],
};

const geometryCollection: topojson.GeometryCollection = {
    type: "GeometryCollection",
    geometries: [
        {type: "Polygon", arcs: [[0]]},
        {type: "MultiPolygon", arcs: [[[0]]]},
        {type: "GeometryCollection", geometries: [
            {type: "Point", coordinates: [0, 0]}
        ]}
    ],
};

const nullObject: topojson.NullObject = {
    type: null,
};

// Properties

interface TestProp {
    color: string;
    size: number;
}

const pointWithProp: topojson.Point<TestProp> = {
    type: "Point",
    coordinates: [0, 0],
    properties: {color: "orange", size: 42},
};

const str: string = pointWithProp.properties!.color;
const nbr: number = pointWithProp.properties!.size;

// Topology

let topology: topojson.Topology;

topology = {
    type: "Topology",
    objects: {},
    arcs: [],
};

topology = {
    type: "Topology",
    bbox: [0, 0, 1, 1],
    transform: {
        scale: [1, 1],
        translate: [0, 0],
    },
    objects: {
        foo: {
            type: "Polygon",
            arcs: [[0]],
        },
    },
    arcs: [[[0, 0], [1, 1]], [[1, 1], [-1, -1]]],
};

topology = {
    type: "Topology",
    transform: {
        scale: [1, 1],
        translate: [0, 0],
    },
    objects: {
        point,
        lineString,
        multiLineString,
        multiPoint,
        polygon,
        multiPolygon,
        geometryCollection,
        nullObject,
    },
    arcs: [
        [[0, 0], [1, 0], [0, 1], [-1, 0], [0, -1]],
        [[0, 0], [1, 0], [0, 1]],
        [[1, 1], [-1, 0], [0, -1]],
        [[1, 1]],
        [[0, 0]]
    ],
};

topology = {
    type: "Topology",
    objects: {
        example: {
            type: "GeometryCollection",
            geometries: [
            {
                type: "Point",
                properties: {
                    prop0: "value0",
                },
                coordinates: [102, 0.5],
            },
            {
                type: "LineString",
                properties: {
                    prop0: "value0",
                    prop1: 0,
                },
                arcs: [0],
            },
            {
                type: "Polygon",
                properties: {
                    prop0: "value0",
                    prop1: {
                        this: "that",
                    },
                },
                arcs: [[-2]],
            }
            ],
        },
    },
    arcs: [
        [[102, 0], [103, 1], [104, 0], [105, 1]],
        [[100, 0], [101, 0], [101, 1], [100, 1], [100, 0]]
    ],
};

// Fails

// $ExpectError
topology = {
    type: "Topology",
    objects: {
        foo: {
            type: "hello", // must fail
            arcs: [[0]],
        },
    },
    arcs: [],
};

// $ExpectError
topology = {
    type: "Topology",
    objects: {
        foo: {
            type: "Point",
            // must fail:  Property 'coordinates' is missing in type '{ type: "Point"; }'.
        },
    },
    arcs: [],
};

// $ExpectError
topology = {
    type: "Topology",
    objects: {
        foo: {
            type: "GeometryCollection",
            geometries: [
                {type: "Polygon"}
                // must fail: Property 'arcs' is missing in type '{ type: "Polygon"; }'
            ],
        },
    },
    arcs: [],
};

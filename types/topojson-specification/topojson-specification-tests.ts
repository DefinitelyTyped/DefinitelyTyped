// Geometry Objects

const point: TopoJSON.Point = {
    type: "Point",
    coordinates: [0, 0],
};

const multiPoint: TopoJSON.MultiPoint = {
    type: "MultiPoint",
    coordinates: [[0, 0]],
};

const lineString: TopoJSON.LineString = {
    type: "LineString",
    arcs: [0],
};

const multiLineString: TopoJSON.MultiLineString = {
    type: "MultiLineString",
    arcs: [[3], [4]],
};

const polygon: TopoJSON.Polygon = {
    type: "Polygon",
    arcs: [[0]],
};

const multiPolygon: TopoJSON.MultiPolygon = {
    type: "MultiPolygon",
    arcs: [[[0]]],
};

const geometryCollection: TopoJSON.GeometryCollection = {
    type: "GeometryCollection",
    geometries: [
        {type: "Polygon", arcs: [[0]]},
        {type: "MultiPolygon", arcs: [[[0]]]},
        {type: "GeometryCollection", geometries: [
            {type: "Point", coordinates: [0, 0]}
        ]}
    ],
};

const nullObject: TopoJSON.NullObject = {
    type: null,
};

// Properties

interface TestProp {
    color: string;
    size: number;
}

const pointWithProp: TopoJSON.Point<TestProp> = {
    type: "Point",
    coordinates: [0, 0],
    properties: {color: "orange", size: 42},
};

const str: string = pointWithProp.properties!.color;
const nbr: number = pointWithProp.properties!.size;

// Topology

let topology: TopoJSON.Topology;

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

// must fail on "type"
// $ExpectError
topology = { type: "Topology", objects: { foo: { type: "hello", arcs: [[0]] } }, arcs: [] };

// must fail:  Property 'coordinates' is missing in type '{ type: "Point"; }'.
// $ExpectError
topology = { type: "Topology", objects: { foo: { type: "Point" } }, arcs: [] };

// must fail: Property 'arcs' is missing in type '{ type: "Polygon"; }'
// $ExpectError
topology = { type: "Topology", objects: { foo: { type: "GeometryCollection", geometries: [{type: "Polygon"}] } }, arcs: [] };

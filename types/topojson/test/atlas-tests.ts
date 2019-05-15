// Tests for: https://github.com/topojson/us-atlas and https://github.com/topojson/world-atlas

const world: topojson.WorldAtlas = {
    type: "Topology",
    objects: {
        countries: {
            type: "GeometryCollection",
            geometries: [{
                type: "Polygon",
                arcs: [[]],
                id: "004",
            }],
        },
        land: {
            type: "GeometryCollection",
            geometries: [{
                type: "MultiPolygon",
                arcs: [[[]]],
            }],
        },
    },
    arcs: [[]],
    bbox: [-180, -85, 180, 83],
    transform: {
        scale: [0, 0],
        translate: [-180, -85],
    },
};

const us: topojson.UsAtlas = {
    type: "Topology",
    bbox: [-56, 12, 942, 596],
    transform: {
        scale: [0, 0],
        translate: [-56, 12],
    },
    objects: {
        counties: {
            type: "GeometryCollection",
            geometries: [{
                type: "Polygon",
                arcs: [[]],
                id: "05089",
            }],
        },
        states: {
            type: "GeometryCollection",
            geometries: [{
                type: "MultiPolygon",
                arcs: [[[]]],
                id: "11",
            }],
        },
        nation: {
            type: "GeometryCollection",
            geometries: [{
                type: "MultiPolygon",
                arcs: [[[]]],
            }],
        },
    },
    arcs: [[[]]],
};

// $ExpectError
us.objects.xxx;

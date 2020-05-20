import * as topojson from "topojson-client";
import { UsAtlas, WorldAtlas } from "topojson";

declare let us: UsAtlas;
declare let world: WorldAtlas;

interface UsAtlasObjects extends TopoJSON.Objects {
    counties: {type: "GeometryCollection", geometries: Array<TopoJSON.Polygon | TopoJSON.MultiPolygon>};
    states: {type: "GeometryCollection", geometries: Array<TopoJSON.Polygon | TopoJSON.MultiPolygon>};
    nation: TopoJSON.GeometryCollection;
}

let geoMP: GeoJSON.MultiPolygon;
let geoMLS: GeoJSON.MultiLineString;
let topoMP: TopoJSON.MultiPolygon;
let topoMLS: TopoJSON.MultiLineString;
let newUs: TopoJSON.Topology<UsAtlasObjects>;
let bbox: GeoJSON.BBox;
let transformer: topojson.Transformer;
let color: string;
let size: number;

interface TestProp {
    color: string;
    size: number;
}

const selectedGeometries: Array<TopoJSON.Polygon | TopoJSON.MultiPolygon> =
    us.objects.states.geometries.filter((g) => ["be", 2, undefined].indexOf(g.id) >= 0);

const topoWithProp = {
    type: "Topology" as "Topology",
    transform: {scale: [1, 1] as [number, number], translate: [0, 0] as [number, number]},
    objects: {
        foo: {type: "Polygon" as "Polygon", properties: {color: "orange", size: 42}, arcs: [[0]]},
        bar: {type: "Polygon" as "Polygon", properties: {name: "hello"}, arcs: [[0]]},
        more: {type: "Polygon" as "Polygon", arcs: [[0]]},
        coll: {
            type: "GeometryCollection" as "GeometryCollection", geometries: [
                {type: "Polygon" as "Polygon", properties: {color: "orange", size: 42}, arcs: [[0]]},
            ],
        },
    },
    arcs: [
        [[0, 0], [1, 0], [0, 1], [-1, 0], [0, -1]],
        [[0, 0], [1, 0], [0, 1]],
        [[1, 1], [-1, 0], [0, -1]],
        [[1, 1]],
        [[0, 0]]
    ],
};

const featurePolygon: GeoJSON.Feature<GeoJSON.Polygon> =
    topojson.feature(topoWithProp, topoWithProp.objects.foo);

const featurePolygonWithProp: GeoJSON.Feature<GeoJSON.Polygon, TestProp> =
    topojson.feature(topoWithProp, topoWithProp.objects.foo);

const featureCollection: GeoJSON.FeatureCollection<GeoJSON.GeometryObject> =
    topojson.feature(us, us.objects.counties);

const featureObject: GeoJSON.Feature<GeoJSON.GeometryObject> | GeoJSON.FeatureCollection<GeoJSON.GeometryObject, {}> =
    topojson.feature(topoWithProp, topoWithProp.objects.foo as TopoJSON.GeometryObject);

const propColor = topojson.feature(topoWithProp, topoWithProp.objects.foo).properties;
color = propColor.color;
size = propColor.size;

const propName = topojson.feature(topoWithProp, topoWithProp.objects.bar).properties;
const aName: string = propName.name;

const propCollection = topojson.feature(topoWithProp, topoWithProp.objects.coll).features[0].properties;
color = propCollection.color;
size = propCollection.size;

const prop3: GeoJSON.GeoJsonProperties = topojson.feature(topoWithProp, topoWithProp.objects.more).properties;

geoMP = topojson.merge(us, selectedGeometries);

topoMP = topojson.mergeArcs(us, selectedGeometries);

geoMLS = topojson.mesh(us);
geoMLS = topojson.mesh(us, us.objects.states);
geoMLS = topojson.mesh(us, us.objects.states, (a, b) => a !== b);

topoMLS = topojson.meshArcs(us);
topoMLS = topojson.meshArcs(us, us.objects.states);
topoMLS = topojson.meshArcs(us, us.objects.states, (a, b) => a !== b);

const n: number[][] = topojson.neighbors(world.objects.countries.geometries);

// Transforms
const usTransform: TopoJSON.Transform = us.transform;

bbox = topojson.bbox(us);
bbox = topojson.bbox({type: "Topology", objects: {}, arcs: []});

newUs = topojson.quantize(us, 1e4);
newUs = topojson.quantize(us, {scale: [1, 1], translate: [0, 0]});
newUs = topojson.quantize(us, us.transform);

transformer = topojson.transform(null);
transformer = topojson.transform({scale: [1, 1], translate: [0, 0]});
transformer = topojson.transform(usTransform);

transformer = topojson.untransform(null);
transformer = topojson.untransform({scale: [1, 1], translate: [0, 0]});
transformer = topojson.untransform(usTransform);

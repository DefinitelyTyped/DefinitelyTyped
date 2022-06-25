import * as topojson from "topojson-simplify";
import { UsAtlas, WorldAtlas } from "topojson";

declare let us: UsAtlas;
declare let world: WorldAtlas;

interface UsAtlasObjects extends TopoJSON.Objects {
    counties: {type: "GeometryCollection", geometries: Array<TopoJSON.Polygon | TopoJSON.MultiPolygon>};
    states: {type: "GeometryCollection", geometries: Array<TopoJSON.Polygon | TopoJSON.MultiPolygon>};
    nation: TopoJSON.GeometryCollection;
}

interface UsEmpty extends TopoJSON.Objects {
    counties: TopoJSON.NullObject;
    states: TopoJSON.NullObject;
    nation: TopoJSON.NullObject;
}

let aTopology: TopoJSON.Topology;
let presimplifiedUs: TopoJSON.Topology<UsAtlasObjects>;
let newUs: TopoJSON.Topology<UsAtlasObjects>;
let emptyUs: TopoJSON.Topology<UsEmpty>;
let geomCollection: TopoJSON.GeometryCollection;
let geomCollectionOrNull: TopoJSON.GeometryCollection | TopoJSON.NullObject;
let aNullObject: TopoJSON.NullObject;
let filter: topojson.Filter;

presimplifiedUs = topojson.presimplify(us);
presimplifiedUs = topojson.presimplify(us, topojson.planarTriangleArea);
presimplifiedUs = topojson.presimplify(us, topojson.sphericalTriangleArea);
presimplifiedUs = topojson.presimplify(us, (points: Array<[number, number]>) => 1.5);

geomCollection = topojson.presimplify(us).objects.counties;
geomCollection = topojson.presimplify(us).objects.nation;
geomCollection = topojson.presimplify(us).objects.states;

const minWeight = topojson.quantile(presimplifiedUs, 0.5);

newUs = topojson.simplify(presimplifiedUs);
newUs = topojson.simplify(presimplifiedUs, 1.23);
newUs = topojson.simplify(presimplifiedUs, minWeight);

geomCollection = topojson.simplify(presimplifiedUs).objects.counties;
geomCollection = topojson.simplify(presimplifiedUs).objects.nation;
geomCollection = topojson.simplify(presimplifiedUs).objects.states;

// Filtering

filter = topojson.filterAttached(us);

filter = topojson.filterAttachedWeight(us);
filter = topojson.filterAttachedWeight(us, 0.5);
filter = topojson.filterAttachedWeight(us, 0.5, topojson.planarRingArea);
filter = topojson.filterAttachedWeight(us, 0.5, (points: Array<[number, number]>) => 1.5);

filter = topojson.filterWeight(us);
filter = topojson.filterWeight(us, 0.5);
filter = topojson.filterWeight(us, 0.5, topojson.planarRingArea);
filter = topojson.filterWeight(us, 0.5, (points: Array<[number, number]>) => 1.5);

aTopology = topojson.filter(us, filter);
newUs = topojson.filter(us, (ring: topojson.Ring, interior: boolean) => true) as UsAtlas;
emptyUs = topojson.filter(us, () => false) as TopoJSON.Topology<UsEmpty>;

geomCollectionOrNull = topojson.filter(us, () => Math.random() > 0.9).objects.nation;
aNullObject = topojson.filter(us, () => false).objects.nation as TopoJSON.NullObject;
geomCollection = topojson.filter(us, () => true).objects.nation as TopoJSON.GeometryCollection;

// Geometry

let area: number;
area = topojson.planarRingArea([[0, 0], [0, 1], [1, 1], [1, 0], [0, 0]]);
area = topojson.planarTriangleArea([[0, 0], [0, 1], [1, 1]]);
area = topojson.sphericalRingArea([[0, 0], [0, 90], [90, 180], [0, 0]], true);
area = topojson.sphericalTriangleArea([[0, 0], [0, 90], [90, 180]]);

// Fails

interface MyAtlas extends TopoJSON.Topology {
    objects: {
        obj: TopoJSON.GeometryCollection;
    };
    more: "hello";
}

declare let myAtlas: MyAtlas;
console.log(myAtlas.more);

let s: string;
// @ts-expect-error
s = topojson.presimplify(myAtlas).more; // must fail
// @ts-expect-error
s = topojson.simplify(myAtlas).more; // must fail

// // @ts-expect-error
// area = topojson.planarTriangleArea([[0, 0], [0, 1], [1, 1], [1, 0]]); // must fail in 2.7

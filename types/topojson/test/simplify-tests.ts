// Tests for: https://github.com/topojson/topojson-simplify

interface UsAtlasObjects extends topojson.Objects {
    counties: {type: "GeometryCollection", geometries: Array<topojson.Polygon | topojson.MultiPolygon>};
    states: {type: "GeometryCollection", geometries: Array<topojson.Polygon | topojson.MultiPolygon>};
    nation: topojson.GeometryCollection;
}

interface UsEmpty extends topojson.Objects {
    counties: topojson.NullObject;
    states: topojson.NullObject;
    nation: topojson.NullObject;
}

let aTopology: topojson.Topology;
let presimplifiedUs: topojson.Topology<UsAtlasObjects>;
let newUs: topojson.Topology<UsAtlasObjects>;
let emptyUs: topojson.Topology<UsEmpty>;
let geomCollection: topojson.GeometryCollection;
let geomCollectionOrNull: topojson.GeometryCollection | topojson.NullObject;
let aNullObject: topojson.NullObject;
let filter: topojson.Filter;

presimplifiedUs = topojson.presimplify(us);
presimplifiedUs = topojson.presimplify(us, topojson.planarTriangleArea);
presimplifiedUs = topojson.presimplify(us, topojson.sphericalTriangleArea);
presimplifiedUs = topojson.presimplify(us, (points: Array<[number, number]>) => 1.5);

geomCollection = topojson.presimplify(us).objects.counties;
geomCollection = topojson.presimplify(us).objects.nation;
geomCollection = topojson.presimplify(us).objects.states;

let minWeight = topojson.quantile(presimplifiedUs, 0.5);

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
newUs = topojson.filter(us, (ring: topojson.Ring, interior: boolean) => true) as topojson.UsAtlas;
emptyUs = topojson.filter(us, () => false) as topojson.Topology<UsEmpty>;

geomCollectionOrNull = topojson.filter(us, () => Math.random() > 0.9).objects.nation;
aNullObject = topojson.filter(us, () => false).objects.nation as topojson.NullObject;
geomCollection = topojson.filter(us, () => true).objects.nation as topojson.GeometryCollection;

// Geometry

let area: number;
area = topojson.planarRingArea([[0, 0], [0, 1], [1, 1], [1, 0], [0, 0]]);
area = topojson.planarTriangleArea([[0, 0], [0, 1], [1, 1]]);
area = topojson.sphericalRingArea([[0, 0], [0, 90], [90, 180], [0, 0]], true);
area = topojson.sphericalTriangleArea([[0, 0], [0, 90], [90, 180]]);

// Fails

interface MyAtlas extends topojson.Topology {
    objects: {
        obj: topojson.GeometryCollection;
    };
    more: "hello";
}

let myAtlas: MyAtlas = null as any; // shortcut...
console.log(myAtlas.more);

let s: string;
// $ExpectError
s = topojson.presimplify(myAtlas).more; // must fail
// $ExpectError
s = topojson.simplify(myAtlas).more; // must fail

// // $ExpectError
// area = topojson.planarTriangleArea([[0, 0], [0, 1], [1, 1], [1, 0]]); // must fail in 2.7

/**
 * Typescript definition tests for d3/d3-geo module
 *
 * Note: These tests are intended to test the definitions only
 * in the sense of typing and call signature consistency. They
 * are not intended as functional tests.
 */

import * as d3Geo from 'd3-geo';
import { Selection } from 'd3-selection';

// ----------------------------------------------------------------------
// Tests setup
// ----------------------------------------------------------------------

interface SampleProperties1 {
    name: string;
}

interface SampleProperties2 {
    name: string;
    value: number;
}

const samplePolygon: GeoJSON.Polygon = {
    type: 'Polygon',
    coordinates: [
        [[0, 0], [0, 90], [90, 0], [0, 0]]
    ]
};

const sampleSphere: d3Geo.GeoSphere = {
    type: 'Sphere'
};

const sampleGeometryCollection: GeoJSON.GeometryCollection = {
    type: 'GeometryCollection',
    geometries: [
        samplePolygon,
        samplePolygon
    ]
};

const sampleExtendedGeometryCollection: d3Geo.ExtendedGeometryCollection<GeoJSON.Polygon | d3Geo.GeoSphere> = {
    type: 'GeometryCollection',
    geometries: [
        samplePolygon,
        sampleSphere
    ]
};

const sampleFeature: GeoJSON.Feature<GeoJSON.Polygon> = {
    type: 'Feature',
    geometry: samplePolygon,
    properties: {
        name: 'Alabama'
    }
};

const sampleExtendedFeature1: d3Geo.ExtendedFeature<GeoJSON.Polygon, SampleProperties1> = {
    type: 'Feature',
    geometry: samplePolygon,
    properties: {
        name: 'Alabama'
    }
};

const sampleExtendedFeature2: d3Geo.ExtendedFeature<d3Geo.GeoSphere, SampleProperties2> = {
    type: 'Feature',
    geometry: sampleSphere,
    properties: {
        name: 'earth',
        value: 42
    }
};

const sampleFeatureCollection: GeoJSON.FeatureCollection<GeoJSON.Polygon> = {
    type: 'FeatureCollection',
    features: [
        sampleFeature,
        sampleFeature
    ]
};

const sampleExtendedFeatureCollection: d3Geo.ExtendedFeatureCollection<d3Geo.ExtendedFeature<GeoJSON.Polygon, SampleProperties1> | d3Geo.ExtendedFeature<d3Geo.GeoSphere, SampleProperties2>> = {
    type: 'FeatureCollection',
    features: [
        sampleExtendedFeature1,
        sampleExtendedFeature2
    ]
};

// ----------------------------------------------------------------------
// Spherical Math
// ----------------------------------------------------------------------

// geoArea(...) =========================================================

let area: number = d3Geo.geoArea(samplePolygon);
area = d3Geo.geoArea(sampleSphere);
area = d3Geo.geoArea(sampleGeometryCollection);
area = d3Geo.geoArea(sampleExtendedGeometryCollection);
area = d3Geo.geoArea(sampleFeature);
area = d3Geo.geoArea(sampleExtendedFeature1);
area = d3Geo.geoArea(sampleExtendedFeature2);
area = d3Geo.geoArea(sampleFeatureCollection);
area = d3Geo.geoArea(sampleExtendedFeatureCollection);

// geoBounds(...) =========================================================

let bounds: [[number, number], [number, number]] = d3Geo.geoBounds(samplePolygon);
bounds = d3Geo.geoBounds(sampleSphere);
bounds = d3Geo.geoBounds(sampleGeometryCollection);
bounds = d3Geo.geoBounds(sampleExtendedGeometryCollection);
bounds = d3Geo.geoBounds(sampleFeature);
bounds = d3Geo.geoBounds(sampleExtendedFeature1);
bounds = d3Geo.geoBounds(sampleExtendedFeature2);
bounds = d3Geo.geoBounds(sampleFeatureCollection);
bounds = d3Geo.geoBounds(sampleExtendedFeatureCollection);

// geoCentroid(...) =======================================================

let centroid: [number, number] = d3Geo.geoCentroid(samplePolygon);
centroid = d3Geo.geoCentroid(sampleSphere);
centroid = d3Geo.geoCentroid(sampleGeometryCollection);
centroid = d3Geo.geoCentroid(sampleExtendedGeometryCollection);
centroid = d3Geo.geoCentroid(sampleFeature);
centroid = d3Geo.geoCentroid(sampleExtendedFeature1);
centroid = d3Geo.geoCentroid(sampleExtendedFeature2);
centroid = d3Geo.geoCentroid(sampleFeatureCollection);
centroid = d3Geo.geoCentroid(sampleExtendedFeatureCollection);

// geoContains(...) =======================================================

let contained: boolean = d3Geo.geoContains(samplePolygon, [0, 0]);
contained = d3Geo.geoContains(sampleSphere, [0, 0]);
contained = d3Geo.geoContains(sampleGeometryCollection, [0, 0]);
contained = d3Geo.geoContains(sampleExtendedGeometryCollection, [0, 0]);
contained = d3Geo.geoContains(sampleFeature, [0, 0]);
contained = d3Geo.geoContains(sampleExtendedFeature1, [0, 0]);
contained = d3Geo.geoContains(sampleExtendedFeature2, [0, 0]);
contained = d3Geo.geoContains(sampleFeatureCollection, [0, 0]);
contained = d3Geo.geoContains(sampleExtendedFeatureCollection, [0, 0]);

// geoDistance(...) =======================================================

const distance: number = d3Geo.geoDistance([54, 2], [53, 1]);

// geoLength(...) =========================================================

let length: number = d3Geo.geoLength(samplePolygon);
length = d3Geo.geoLength(sampleSphere);
length = d3Geo.geoLength(sampleGeometryCollection);
length = d3Geo.geoLength(sampleExtendedGeometryCollection);
length = d3Geo.geoLength(sampleFeature);
length = d3Geo.geoLength(sampleExtendedFeature1);
length = d3Geo.geoLength(sampleExtendedFeature2);
length = d3Geo.geoLength(sampleFeatureCollection);
length = d3Geo.geoLength(sampleExtendedFeatureCollection);

// geoInterpolate(...) ====================================================

const interpolateFct: (t: number) => [number, number] = d3Geo.geoInterpolate([54, 2], [53, 1]);

// geoRotation(...) =======================================================

// create rotation -----------------------------------------------------

const rotation: d3Geo.GeoRotation = d3Geo.geoRotation([90, 45]);
const rotation2: d3Geo.GeoRotation = d3Geo.geoRotation([90, 45, 27.5]);

// use rotation --------------------------------------------------------

const point: [number, number] = rotation([54, 2]);
const inverted: [number, number] = rotation.invert([54, 2]);

// ----------------------------------------------------------------------
// Spherical Shapes - geoCircle
// ----------------------------------------------------------------------

// Create GeoCircleGenerator ============================================

// simple use case
let circleGeneratorSimple: d3Geo.GeoCircleGenerator<any, any> = d3Geo.geoCircle();

// complex use as part of object
class Circulator {
    constructor(radius: number, precision: number) {
        this.r = radius;
        this.p = precision;
        this.circleGenerator = d3Geo.geoCircle<Circulator, [number, number] | undefined>()
            .radius(function(datum) {
                const t: Circulator = this;
                const d: [number, number] | undefined = datum;
                return this.r;
            })
            .precision(function(datum) {
                const t: Circulator = this;
                const d: [number, number] | undefined = datum;
                return this.p;
            })
            .center(function(datum) {
                const t: Circulator = this;
                const d: [number, number] | undefined = datum;
                return d ? d : [0, 0];
            });
    }
    private readonly r: number;
    private readonly p: number;
    private readonly circleGenerator: d3Geo.GeoCircleGenerator<Circulator, [number, number] | undefined>;

    getCirclePolygon(center?: [number, number]): GeoJSON.Polygon {
        if (center && center.length === 2 && typeof center[0] === 'number' && typeof center[1] === 'number') {
            return this.circleGenerator(center);
        } else {
            return this.circleGenerator();
        }
    }
}

const circulator = new Circulator(50, 2);

// Configure CircleGenerator ============================================

// center(...) ----------------------------------------------------------

const centerFctSimple: ((this: any, d: any, ...args: any[]) => [number, number]) = circleGeneratorSimple.center();

const c: [number, number] = [54, 2];

circleGeneratorSimple = circleGeneratorSimple.center(() => c);
circleGeneratorSimple = circleGeneratorSimple.center(c);

// radius(...) -----------------------------------------------------------

const radius: ((...args: any[]) => number) = circleGeneratorSimple.radius();
circleGeneratorSimple = circleGeneratorSimple.radius(() => 5);
circleGeneratorSimple = circleGeneratorSimple.radius(2);

// precision(...) --------------------------------------------------------

const precision: ((...args: any[]) => number) = circleGeneratorSimple.precision();
circleGeneratorSimple = circleGeneratorSimple.precision(() => 5);
circleGeneratorSimple = circleGeneratorSimple.precision(2);

// Use CircleGenerator ====================================================

// use simple geoCircleGenerator
let circlePolygon: GeoJSON.Polygon = circleGeneratorSimple();

// use encapsulated geoCircleGenerator
circlePolygon = circulator.getCirclePolygon([5, 5]);
circlePolygon = circulator.getCirclePolygon();

// ----------------------------------------------------------------------
// Spherical Shapes - geoGraticule
// ----------------------------------------------------------------------

// Create GeoGraticuleGenerator =========================================

let graticuleGenerator: d3Geo.GeoGraticuleGenerator = d3Geo.geoGraticule();

// Configure GeoGraticuleGenerator =======================================

// extent(...) -----------------------------------------------------------

const extent: [[number, number], [number, number]] = graticuleGenerator.extent();
graticuleGenerator = graticuleGenerator.extent([[-180, -80], [180, 80]]);

// extentMajor(...) ---------------------------------------------------------

const extentMajor: [[number, number], [number, number]] = graticuleGenerator.extentMajor();
graticuleGenerator = graticuleGenerator.extentMajor([[-180, -80], [180, 80]]);

// extentMinor(...) ---------------------------------------------------------

const extentMinor: [[number, number], [number, number]] = graticuleGenerator.extentMinor();
graticuleGenerator = graticuleGenerator.extentMinor([[-180, -80], [180, 80]]);

// step(...) ----------------------------------------------------------------

const step: [number, number] = graticuleGenerator.step();
graticuleGenerator = graticuleGenerator.step([10, 10]);

// stepMajor(...) -----------------------------------------------------------

const stepMajor: [number, number] = graticuleGenerator.stepMajor();
graticuleGenerator = graticuleGenerator.stepMajor([10, 10]);

// stepMinor(...) ------------------------------------------------------------

const stepMinor: [number, number] = graticuleGenerator.stepMinor();
graticuleGenerator = graticuleGenerator.stepMinor([10, 10]);

// precision(...) -------------------------------------------------------------

const precision1: number = graticuleGenerator.precision();
graticuleGenerator = graticuleGenerator.precision(5);

// Use GeoGraticuleGenerator ============================================

let multiString: GeoJSON.MultiLineString = graticuleGenerator();
const lines: GeoJSON.LineString[] = graticuleGenerator.lines();
const polygon2: GeoJSON.Polygon = graticuleGenerator.outline();

// geoGraticule10() =====================================================

// test convenience function:

multiString = d3Geo.geoGraticule10();

// ----------------------------------------------------------------------
// Raw Projections
// ----------------------------------------------------------------------

// Pre-Defined Raw Projection Factories =================================

const azimuthalEqualAreaRaw: d3Geo.GeoRawProjection = d3Geo.geoAzimuthalEqualAreaRaw();
const azimuthalEquidistantRaw: d3Geo.GeoRawProjection = d3Geo.geoAzimuthalEquidistantRaw();
const conicConformalRaw: d3Geo.GeoRawProjection = d3Geo.geoConicConformalRaw(0, 0);
const conicEqualAreaRaw: d3Geo.GeoRawProjection = d3Geo.geoConicEqualAreaRaw(0, 0);
const conicEquidistantRaw: d3Geo.GeoRawProjection = d3Geo.geoConicEquidistantRaw(0, 0);
const equirectangularRaw: d3Geo.GeoRawProjection = d3Geo.geoEquirectangularRaw();
const gnomonicRaw: d3Geo.GeoRawProjection = d3Geo.geoGnomonicRaw();
const mercatorRaw: d3Geo.GeoRawProjection = d3Geo.geoMercatorRaw();
const orthographicRaw: d3Geo.GeoRawProjection = d3Geo.geoOrthographicRaw();
const stereographicRaw: d3Geo.GeoRawProjection = d3Geo.geoStereographicRaw();
const transverseMercatorRaw: d3Geo.GeoRawProjection = d3Geo.geoTransverseMercatorRaw();
const naturalEart1Raw: d3Geo.GeoRawProjection = d3Geo.geoNaturalEarth1Raw();

// Use Raw Projection =====================================================

const rawProjectionPoint: [number, number] = azimuthalEqualAreaRaw(54, 2);
const rawProjectionInvertedPoint: [number, number] = azimuthalEqualAreaRaw.invert(180, 6);

// ----------------------------------------------------------------------
// Pre-Defined Projections
// ----------------------------------------------------------------------

// Create predefined Projection from factory =============================

const albers: d3Geo.GeoConicProjection = d3Geo.geoAlbers();
const albersUsa: d3Geo.GeoProjection = d3Geo.geoAlbersUsa();
const azimuthalEqualArea: d3Geo.GeoProjection = d3Geo.geoAzimuthalEqualArea();
const azimuthalEquidistant: d3Geo.GeoProjection = d3Geo.geoAzimuthalEquidistant();
let conicConformal: d3Geo.GeoConicProjection = d3Geo.geoConicConformal();
const conicEqualArea: d3Geo.GeoConicProjection = d3Geo.geoConicEqualArea();
const conicEquidistant: d3Geo.GeoConicProjection = d3Geo.geoConicEquidistant();
const cquirectangular: d3Geo.GeoProjection = d3Geo.geoEquirectangular();
const gnomonic: d3Geo.GeoProjection = d3Geo.geoGnomonic();
const mercator: d3Geo.GeoProjection = d3Geo.geoMercator();
const orthographic: d3Geo.GeoProjection = d3Geo.geoOrthographic();
const stereographic: d3Geo.GeoProjection = d3Geo.geoStereographic();
const transverseMercator: d3Geo.GeoProjection = d3Geo.geoTransverseMercator();
const natualEarth1: d3Geo.GeoProjection = d3Geo.geoNaturalEarth1();

// ----------------------------------------------------------------------
// Create New Projections
// ----------------------------------------------------------------------

const geoProjection: d3Geo.GeoProjection = d3Geo.geoProjection(azimuthalEqualAreaRaw);

const mutate: () => d3Geo.GeoProjection = d3Geo.geoProjectionMutator(() => azimuthalEqualAreaRaw);
let constructedProjection: d3Geo.GeoProjection = mutate();

// Use Projection ==========================================================

const projected: [number, number] = constructedProjection([54, 2]);
const inverted2: [number, number] = constructedProjection.invert([54, 2]);

// TODO ?????
// let stream: d3Geo.Stream = constructedProjection.stream([54, 2]);

const preClip: (stream: d3Geo.GeoStream) => d3Geo.GeoStream = constructedProjection.preclip();
constructedProjection = constructedProjection.preclip(d3Geo.geoClipAntimeridian);
constructedProjection = constructedProjection.preclip(d3Geo.geoClipCircle(45));

const postClip: (stream: d3Geo.GeoStream) => d3Geo.GeoStream = constructedProjection.postclip();
constructedProjection = constructedProjection.postclip(d3Geo.geoClipRectangle(0, 0, 1, 1));

const clipAngle: number = constructedProjection.clipAngle();
constructedProjection = constructedProjection.clipAngle(null);
constructedProjection = constructedProjection.clipAngle(45);

let clipExtent: [[number, number], [number, number]] | null = constructedProjection.clipExtent();
constructedProjection = constructedProjection.clipExtent(null);
constructedProjection = constructedProjection.clipExtent([[0, 0], [1, 1]]);

let scale: number = constructedProjection.scale();
constructedProjection = constructedProjection.scale(45);

let translate: [number, number] = constructedProjection.translate();
constructedProjection = constructedProjection.translate([480, 250]);

const center: [number, number] = constructedProjection.center();
constructedProjection = constructedProjection.center([0, 0]);

const rotate: [number, number, number] = constructedProjection.rotate();
constructedProjection = constructedProjection.rotate([0, 0]);
constructedProjection = constructedProjection.rotate([0, 0, 0]);

const precision2: number = constructedProjection.precision();
constructedProjection = constructedProjection.precision(0.707);

constructedProjection = constructedProjection.fitExtent([[0, 0], [960, 500]], samplePolygon);
constructedProjection = constructedProjection.fitExtent([[0, 0], [960, 500]], sampleSphere);
constructedProjection = constructedProjection.fitExtent([[0, 0], [960, 500]], sampleGeometryCollection);
constructedProjection = constructedProjection.fitExtent([[0, 0], [960, 500]], sampleExtendedGeometryCollection);
constructedProjection = constructedProjection.fitExtent([[0, 0], [960, 500]], sampleFeature);
constructedProjection = constructedProjection.fitExtent([[0, 0], [960, 500]], sampleExtendedFeature1);
constructedProjection = constructedProjection.fitExtent([[0, 0], [960, 500]], sampleExtendedFeature2);
constructedProjection = constructedProjection.fitExtent([[0, 0], [960, 500]], sampleFeatureCollection);
constructedProjection = constructedProjection.fitExtent([[0, 0], [960, 500]], sampleExtendedFeatureCollection);

constructedProjection = constructedProjection.fitSize([960, 500], samplePolygon);
constructedProjection = constructedProjection.fitSize([960, 500], sampleSphere);
constructedProjection = constructedProjection.fitSize([960, 500], sampleGeometryCollection);
constructedProjection = constructedProjection.fitSize([960, 500], sampleExtendedGeometryCollection);
constructedProjection = constructedProjection.fitSize([960, 500], sampleFeature);
constructedProjection = constructedProjection.fitSize([960, 500], sampleExtendedFeature1);
constructedProjection = constructedProjection.fitSize([960, 500], sampleExtendedFeature2);
constructedProjection = constructedProjection.fitSize([960, 500], sampleFeatureCollection);
constructedProjection = constructedProjection.fitSize([960, 500], sampleExtendedFeatureCollection);

constructedProjection = constructedProjection.fitWidth(960, samplePolygon);
constructedProjection = constructedProjection.fitWidth(960, sampleSphere);
constructedProjection = constructedProjection.fitWidth(960, sampleGeometryCollection);
constructedProjection = constructedProjection.fitWidth(960, sampleExtendedGeometryCollection);
constructedProjection = constructedProjection.fitWidth(960, sampleFeature);
constructedProjection = constructedProjection.fitWidth(960, sampleExtendedFeature1);
constructedProjection = constructedProjection.fitWidth(960, sampleExtendedFeature2);
constructedProjection = constructedProjection.fitWidth(960, sampleFeatureCollection);
constructedProjection = constructedProjection.fitWidth(960, sampleExtendedFeatureCollection);

constructedProjection = constructedProjection.fitHeight(500, samplePolygon);
constructedProjection = constructedProjection.fitHeight(500, sampleSphere);
constructedProjection = constructedProjection.fitHeight(500, sampleGeometryCollection);
constructedProjection = constructedProjection.fitHeight(500, sampleExtendedGeometryCollection);
constructedProjection = constructedProjection.fitHeight(500, sampleFeature);
constructedProjection = constructedProjection.fitHeight(500, sampleExtendedFeature1);
constructedProjection = constructedProjection.fitHeight(500, sampleExtendedFeature2);
constructedProjection = constructedProjection.fitHeight(500, sampleFeatureCollection);
constructedProjection = constructedProjection.fitHeight(500, sampleExtendedFeatureCollection);

// ----------------------------------------------------------------------
// GeoConicProjection interface
// ----------------------------------------------------------------------

// parallels(...) ------------------------------------------------------
const parallels: [number, number] = conicConformal.parallels();
conicConformal = conicConformal.parallels([20, 20]);

// test method inheritance from GeoProjection ---------------------------

conicConformal = conicConformal.fitSize([960, 500], samplePolygon); // inherited

// ----------------------------------------------------------------------
// GeoPath Generator
// ----------------------------------------------------------------------

const minimalRenderingContextMockUp: d3Geo.GeoContext = {
    beginPath: () => { return; },
    moveTo: (x: number, y: number) => { return; },
    lineTo: (x: number, y: number) => { return; },
    arc: (x, y, radius, startAngle, endAngle) => { return; },
    closePath: () => { return; }
};

// Create geoPath Generator =============================================

let geoPathCanvas: d3Geo.GeoPath<any, d3Geo.GeoPermissibleObjects>;
geoPathCanvas = d3Geo.geoPath();
geoPathCanvas = d3Geo.geoPath(null);
geoPathCanvas = d3Geo.geoPath(null, null);
geoPathCanvas = d3Geo.geoPath(d3Geo.geoAzimuthalEqualArea());
geoPathCanvas = d3Geo.geoPath(d3Geo.geoAzimuthalEqualArea(), minimalRenderingContextMockUp);

let geoPathSVG: d3Geo.GeoPath<SVGPathElement, d3Geo.ExtendedFeature<GeoJSON.Polygon, SampleProperties1>>;
geoPathSVG = d3Geo.geoPath<SVGPathElement, d3Geo.ExtendedFeature<GeoJSON.Polygon, SampleProperties1>>();
geoPathSVG = d3Geo.geoPath<SVGPathElement, d3Geo.ExtendedFeature<GeoJSON.Polygon, SampleProperties1>>(d3Geo.geoAzimuthalEqualArea());
geoPathSVG = d3Geo.geoPath<SVGPathElement, d3Geo.ExtendedFeature<GeoJSON.Polygon, SampleProperties1>>(d3Geo.geoAzimuthalEqualArea(), null);
// Configure geoPath Generator ==========================================

// projection(...) ------------------------------------------------------

geoPathCanvas = geoPathCanvas.projection(azimuthalEqualArea);
const geoPathProjectionMinimal: d3Geo.GeoStreamWrapper = geoPathCanvas.projection();
const geoPathProjectionUnion: d3Geo.GeoProjection | d3Geo.GeoConicProjection | d3Geo.GeoStreamWrapper = geoPathCanvas.projection();
const geoPathProjection: d3Geo.GeoProjection = geoPathCanvas.projection<d3Geo.GeoProjection>();

geoPathSVG = geoPathSVG.projection(conicConformal);
const geoPathConicProjection: d3Geo.GeoConicProjection = geoPathSVG.projection<d3Geo.GeoConicProjection>();
// geoPathConicProjection = geoPathSVG.projection(); // fails without casting to GeoConicProjection, or alternatively custom typeguard
// geoPathConicProjection = geoPathSVG.projection<SampleProperties1>(); // fails as SampleProperties does not extend minimal interface

// context(...) ------------------------------------------------------

// minimal context interface (mockup)
geoPathCanvas = geoPathCanvas.context(minimalRenderingContextMockUp);

const geoPathContext: d3Geo.GeoContext = geoPathCanvas.context();

// reset
geoPathCanvas = geoPathCanvas.context(null);

// With canvas 2D rendering context
let canvasContext: CanvasRenderingContext2D;

geoPathCanvas = geoPathCanvas.context(canvasContext);

canvasContext = geoPathCanvas.context<CanvasRenderingContext2D>();
// canvasContext = geoPathCanvas.context(); // fails without casting to CanvasRenderingContext2D
// canvasContext = geoPathCanvas.context<SampleProperties1>(); // fails as SampleProperties does not extend GeoCanvas

// pointRadius(...) ------------------------------------------------------

geoPathCanvas = geoPathCanvas.pointRadius(5);
const geoPathCanvasPointRadiusAccessor: ((this: any, d: d3Geo.GeoPermissibleObjects, ...args: any[]) => number) | number = geoPathCanvas.pointRadius();

geoPathSVG = geoPathSVG.pointRadius(function(datum) {
    const that: SVGPathElement = this;
    const d: d3Geo.ExtendedFeature<GeoJSON.Polygon, SampleProperties1> = datum;
    return datum.properties.name === 'Alabama' ? 10 : 15;
});

const geoPathSVGPointRadiusAccessor: number | ((this: SVGPathElement, d: d3Geo.ExtendedFeature<GeoJSON.Polygon, SampleProperties1>, ...args: any[]) => number) = geoPathSVG.pointRadius();
// let geoPathSVGPointRadiusAccessorWrong1: number | ((this: SVGCircleElement, d: d3Geo.ExtendedFeature<GeoJSON.Polygon, SampleProperties1>, ...args: any[]) => number)
//     = geoPathSVG.pointRadius(); // fails, mismatch in this context
// let geoPathSVGPointRadiusAccessorWrong2: number | ((this: SVGPathElement, d: d3Geo.GeoGeometryObjects, ...args: any[]) => number) = geoPathSVG.pointRadius(); // fails, mismatch in object datum type

// Use geoPath Generator ================================================

// area(...) ------------------------------------------------------

let geoPathArea: number = geoPathCanvas.area(samplePolygon);
geoPathArea = geoPathCanvas.area(sampleSphere);
geoPathArea = geoPathCanvas.area(sampleGeometryCollection);
geoPathArea = geoPathCanvas.area(sampleExtendedGeometryCollection);
geoPathArea = geoPathCanvas.area(sampleFeature);
geoPathArea = geoPathCanvas.area(sampleExtendedFeature1);
geoPathArea = geoPathCanvas.area(sampleExtendedFeature2);
geoPathArea = geoPathCanvas.area(sampleFeatureCollection);
geoPathArea = geoPathCanvas.area(sampleExtendedFeatureCollection);

// geoPathArea = geoPathSVG.area(sampleExtendedFeatureCollection); // fails, wrong data object type

// bounds(...) ------------------------------------------------------

let geoPathBounds: [[number, number], [number, number]] = geoPathCanvas.bounds(samplePolygon);
geoPathBounds = geoPathCanvas.bounds(sampleSphere);
geoPathBounds = geoPathCanvas.bounds(sampleGeometryCollection);
geoPathBounds = geoPathCanvas.bounds(sampleExtendedGeometryCollection);
geoPathBounds = geoPathCanvas.bounds(sampleFeature);
geoPathBounds = geoPathCanvas.bounds(sampleExtendedFeature1);
geoPathBounds = geoPathCanvas.bounds(sampleExtendedFeature2);
geoPathBounds = geoPathCanvas.bounds(sampleFeatureCollection);
geoPathBounds = geoPathCanvas.bounds(sampleExtendedFeatureCollection);

// geoPathBounds = geoPathSVG.bounds(sampleExtendedFeatureCollection); // fails, wrong data object type

// centroid(...) ------------------------------------------------------

let geoPathCentroid: [number, number] = geoPathCanvas.centroid(samplePolygon);
geoPathCentroid = geoPathCanvas.centroid(sampleSphere);
geoPathCentroid = geoPathCanvas.centroid(sampleGeometryCollection);
geoPathCentroid = geoPathCanvas.centroid(sampleExtendedGeometryCollection);
geoPathCentroid = geoPathCanvas.centroid(sampleFeature);
geoPathCentroid = geoPathCanvas.centroid(sampleExtendedFeature1);
geoPathCentroid = geoPathCanvas.centroid(sampleExtendedFeature2);
geoPathCentroid = geoPathCanvas.centroid(sampleFeatureCollection);
geoPathCentroid = geoPathCanvas.centroid(sampleExtendedFeatureCollection);

// geoPathCentroid = geoPathSVG.centroid(sampleExtendedFeatureCollection); // fails, wrong data object type

// measure(...) ------------------------------------------------------

let geoPathMeasure: number = geoPathCanvas.measure(samplePolygon);
geoPathMeasure = geoPathCanvas.measure(sampleSphere);
geoPathMeasure = geoPathCanvas.measure(sampleGeometryCollection);
geoPathMeasure = geoPathCanvas.measure(sampleExtendedGeometryCollection);
geoPathMeasure = geoPathCanvas.measure(sampleFeature);
geoPathMeasure = geoPathCanvas.measure(sampleExtendedFeature1);
geoPathMeasure = geoPathCanvas.measure(sampleExtendedFeature2);
geoPathMeasure = geoPathCanvas.measure(sampleFeatureCollection);
geoPathMeasure = geoPathCanvas.measure(sampleExtendedFeatureCollection);

// render path to context of get path string----------------------------

// render to GeoContext/Canvas

geoPathCanvas(samplePolygon);
geoPathCanvas(sampleSphere);
geoPathCanvas(sampleGeometryCollection);
geoPathCanvas(sampleExtendedGeometryCollection);
geoPathCanvas(sampleFeature);
geoPathCanvas(sampleExtendedFeature1);
geoPathCanvas(sampleExtendedFeature2);
geoPathCanvas(sampleFeatureCollection);
geoPathCanvas(sampleExtendedFeatureCollection);

// Use path string generator for SVGPathElement

declare const svgPath: Selection<SVGPathElement, d3Geo.ExtendedFeature<GeoJSON.Polygon, SampleProperties1>, any, any>;
svgPath.attr('d', geoPathSVG);

declare const svgCircleWrong: Selection<SVGCircleElement, d3Geo.ExtendedFeature<GeoJSON.Polygon, SampleProperties1>, any, any>;
// svgCircleWrong.attr('d', geoPathSVG); // fails, mismatch in `this` context

declare const svgPathWrong: Selection<SVGPathElement, GeoJSON.Polygon, any, any>;
// svgPathWrong.attr('d', geoPathSVG); // fails, mismatch in datum type

// ----------------------------------------------------------------------
// Context interface
// ----------------------------------------------------------------------
const context: d3Geo.GeoContext = {
    beginPath: () => { return; },
    moveTo: (x: number, y: number) => { return; },
    lineTo: (x: number, y: number) => { return; },
    arc: (x, y, radius, startAngle, endAngle) => { return; },
    closePath: () => { return; }
};

// ----------------------------------------------------------------------
// Projection Streams
// ----------------------------------------------------------------------

// geoTransform(...) ====================================================

const transformFunction: { stream(s: d3Geo.GeoStream): {} } = d3Geo.geoTransform({});

interface CustomTranformProto extends d3Geo.GeoTransformPrototype {
    a: number;
}

let customTransformProto: CustomTranformProto;

customTransformProto = {
    point(x, y) {
        this.stream.point(x + this.a, -y);
    },
    a: 10
};

const t: { stream(s: d3Geo.GeoStream): CustomTranformProto & d3Geo.GeoStream } = d3Geo.geoTransform(customTransformProto);

// geoIdentity() ========================================================

let identityTransform: d3Geo.GeoIdentityTranform;

identityTransform = d3Geo.geoIdentity();

scale = identityTransform.scale();
identityTransform = identityTransform.scale(2);

translate = identityTransform.translate();
identityTransform = identityTransform.translate([10, 10]);

clipExtent = identityTransform.clipExtent();
identityTransform = identityTransform.clipExtent(null);
identityTransform = identityTransform.clipExtent([[0, 0], [100, 100]]);

identityTransform = identityTransform.fitExtent([[0, 0], [960, 500]], samplePolygon);
identityTransform = identityTransform.fitExtent([[0, 0], [960, 500]], sampleSphere);
identityTransform = identityTransform.fitExtent([[0, 0], [960, 500]], sampleGeometryCollection);
identityTransform = identityTransform.fitExtent([[0, 0], [960, 500]], sampleExtendedGeometryCollection);
identityTransform = identityTransform.fitExtent([[0, 0], [960, 500]], sampleFeature);
identityTransform = identityTransform.fitExtent([[0, 0], [960, 500]], sampleExtendedFeature1);
identityTransform = identityTransform.fitExtent([[0, 0], [960, 500]], sampleExtendedFeature2);
identityTransform = identityTransform.fitExtent([[0, 0], [960, 500]], sampleFeatureCollection);
identityTransform = identityTransform.fitExtent([[0, 0], [960, 500]], sampleExtendedFeatureCollection);

identityTransform = identityTransform.fitSize([960, 500], samplePolygon);
identityTransform = identityTransform.fitSize([960, 500], sampleSphere);
identityTransform = identityTransform.fitSize([960, 500], sampleGeometryCollection);
identityTransform = identityTransform.fitSize([960, 500], sampleExtendedGeometryCollection);
identityTransform = identityTransform.fitSize([960, 500], sampleFeature);
identityTransform = identityTransform.fitSize([960, 500], sampleExtendedFeature1);
identityTransform = identityTransform.fitSize([960, 500], sampleExtendedFeature2);
identityTransform = identityTransform.fitSize([960, 500], sampleFeatureCollection);
identityTransform = identityTransform.fitSize([960, 500], sampleExtendedFeatureCollection);

let reflecting: boolean;

identityTransform = identityTransform.reflectX(true);
// identityTransform = identityTransform.reflectX(5); // fails, wrong argument data type
reflecting = identityTransform.reflectX();

identityTransform = identityTransform.reflectY(true);
// identityTransform = identityTransform.reflectY(5); // fails, wrong argument data type
reflecting = identityTransform.reflectY();

// ----------------------------------------------------------------------
// Stream interface
// ----------------------------------------------------------------------
declare const stream: d3Geo.GeoStream;

stream.point(0, 0);
stream.point(0, 0, 0);
stream.lineStart();
stream.lineEnd();
stream.polygonStart();
stream.polygonEnd();
stream.sphere();

// geoStream(...) ========================================================

d3Geo.geoStream(samplePolygon, stream);
d3Geo.geoStream(sampleSphere, stream);
d3Geo.geoStream(sampleGeometryCollection, stream);
d3Geo.geoStream(sampleExtendedGeometryCollection, stream);
d3Geo.geoStream(sampleFeature, stream);
d3Geo.geoStream(sampleExtendedFeature1, stream);
d3Geo.geoStream(sampleExtendedFeature2, stream);
d3Geo.geoStream(sampleFeatureCollection, stream);
d3Geo.geoStream(sampleExtendedFeatureCollection, stream);

// ----------------------------------------------------------------------
// Clipping Function
// ----------------------------------------------------------------------

let clippingFunction: (stream: d3Geo.GeoStream) => d3Geo.GeoStream;

clippingFunction = d3Geo.geoClipAntimeridian;
clippingFunction = d3Geo.geoClipCircle(45);
clippingFunction = d3Geo.geoClipRectangle(0, 0, 1, 1);

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

let distance: number = d3Geo.geoDistance([54, 2], [53, 1]);

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

let interpolateFct: (t: number) => [number, number] = d3Geo.geoInterpolate([54, 2], [53, 1]);

// geoRotation(...) =======================================================

// create rotation -----------------------------------------------------

let rotation: d3Geo.GeoRotation = d3Geo.geoRotation([90, 45]);
let rotation2: d3Geo.GeoRotation = d3Geo.geoRotation([90, 45, 27.5]);

// use rotation --------------------------------------------------------

let point: [number, number] = rotation([54, 2]);
let inverted: [number, number] = rotation.invert([54, 2]);

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
            .radius(function (datum) {
                let t: Circulator = this;
                let d: [number, number] | undefined = datum;
                return this.r;
            })
            .precision(function (datum) {
                let t: Circulator = this;
                let d: [number, number] | undefined = datum;
                return this.p;
            })
            .center(function (datum) {
                let t: Circulator = this;
                let d: [number, number] | undefined = datum;
                return d ? d : [0, 0];
            });
    }
    private r: number;
    private p: number;
    private circleGenerator: d3Geo.GeoCircleGenerator<Circulator, [number, number] | undefined>;

    getCirclePolygon(center?: [number, number]): GeoJSON.Polygon {
        if (center && center.length === 2 && typeof center[0] === 'number' && typeof center[1] === 'number') {
            return this.circleGenerator(center);
        } else {
            return this.circleGenerator();
        }
    }
}

let circulator = new Circulator(50, 2);

// Configure CircleGenerator ============================================

// center(...) ----------------------------------------------------------

let centerFctSimple: ((this: any, d: any, ...args: any[]) => [number, number]) = circleGeneratorSimple.center();

let c: [number, number] = [54, 2];

circleGeneratorSimple = circleGeneratorSimple.center(() => c);
circleGeneratorSimple = circleGeneratorSimple.center(c);

// radius(...) -----------------------------------------------------------

let radius: ((...args: any[]) => number) = circleGeneratorSimple.radius();
circleGeneratorSimple = circleGeneratorSimple.radius(() => 5);
circleGeneratorSimple = circleGeneratorSimple.radius(2);

// precision(...) --------------------------------------------------------

let precision: ((...args: any[]) => number) = circleGeneratorSimple.precision();
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

let extent: [[number, number], [number, number]] = graticuleGenerator.extent();
graticuleGenerator = graticuleGenerator.extent([[-180, -80], [180, 80]]);

// extentMajor(...) ---------------------------------------------------------

let extentMajor: [[number, number], [number, number]] = graticuleGenerator.extentMajor();
graticuleGenerator = graticuleGenerator.extentMajor([[-180, -80], [180, 80]]);

// extentMinor(...) ---------------------------------------------------------

let extentMinor: [[number, number], [number, number]] = graticuleGenerator.extentMinor();
graticuleGenerator = graticuleGenerator.extentMinor([[-180, -80], [180, 80]]);

// step(...) ----------------------------------------------------------------

let step: [number, number] = graticuleGenerator.step();
graticuleGenerator = graticuleGenerator.step([10, 10]);

// stepMajor(...) -----------------------------------------------------------

let stepMajor: [number, number] = graticuleGenerator.stepMajor();
graticuleGenerator = graticuleGenerator.stepMajor([10, 10]);

// stepMinor(...) ------------------------------------------------------------

let stepMinor: [number, number] = graticuleGenerator.stepMinor();
graticuleGenerator = graticuleGenerator.stepMinor([10, 10]);

// precision(...) -------------------------------------------------------------

let precision1: number = graticuleGenerator.precision();
graticuleGenerator = graticuleGenerator.precision(5);

// Use GeoGraticuleGenerator ============================================

let multiString: GeoJSON.MultiLineString = graticuleGenerator();
let lines: GeoJSON.LineString[] = graticuleGenerator.lines();
let polygon2: GeoJSON.Polygon = graticuleGenerator.outline();

// geoGraticule10() =====================================================

// test convenience function:

multiString = d3Geo.geoGraticule10();

// ----------------------------------------------------------------------
// Raw Projections
// ----------------------------------------------------------------------

// Pre-Defined Raw Projection Factories =================================

let azimuthalEqualAreaRaw: d3Geo.GeoRawProjection = d3Geo.geoAzimuthalEqualAreaRaw();
let azimuthalEquidistantRaw: d3Geo.GeoRawProjection = d3Geo.geoAzimuthalEquidistantRaw();
let conicConformalRaw: d3Geo.GeoRawProjection = d3Geo.geoConicConformalRaw(0, 0);
let conicEqualAreaRaw: d3Geo.GeoRawProjection = d3Geo.geoConicEqualAreaRaw(0, 0);
let conicEquidistantRaw: d3Geo.GeoRawProjection = d3Geo.geoConicEquidistantRaw(0, 0);
let equirectangularRaw: d3Geo.GeoRawProjection = d3Geo.geoEquirectangularRaw();
let gnomonicRaw: d3Geo.GeoRawProjection = d3Geo.geoGnomonicRaw();
let mercatorRaw: d3Geo.GeoRawProjection = d3Geo.geoMercatorRaw();
let orthographicRaw: d3Geo.GeoRawProjection = d3Geo.geoOrthographicRaw();
let stereographicRaw: d3Geo.GeoRawProjection = d3Geo.geoStereographicRaw();
let transverseMercatorRaw: d3Geo.GeoRawProjection = d3Geo.geoTransverseMercatorRaw();

// Use Raw Projection =====================================================

let rawProjectionPoint: [number, number] = azimuthalEqualAreaRaw(54, 2);
let rawProjectionInvertedPoint: [number, number] = azimuthalEqualAreaRaw.invert(180, 6);



// ----------------------------------------------------------------------
// Pre-Defined Projections
// ----------------------------------------------------------------------

// Create predefined Projection from factory =============================

let albers: d3Geo.GeoConicProjection = d3Geo.geoAlbers();
let albersUsa: d3Geo.GeoProjection = d3Geo.geoAlbersUsa();
let azimuthalEqualArea: d3Geo.GeoProjection = d3Geo.geoAzimuthalEqualArea();
let azimuthalEquidistant: d3Geo.GeoProjection = d3Geo.geoAzimuthalEquidistant();
let conicConformal: d3Geo.GeoConicProjection = d3Geo.geoConicConformal();
let conicEqualArea: d3Geo.GeoConicProjection = d3Geo.geoConicEqualArea();
let conicEquidistant: d3Geo.GeoConicProjection = d3Geo.geoConicEquidistant();
let cquirectangular: d3Geo.GeoProjection = d3Geo.geoEquirectangular();
let gnomonic: d3Geo.GeoProjection = d3Geo.geoGnomonic();
let mercator: d3Geo.GeoProjection = d3Geo.geoMercator();
let orthographic: d3Geo.GeoProjection = d3Geo.geoOrthographic();
let stereographic: d3Geo.GeoProjection = d3Geo.geoStereographic();
let transverseMercator: d3Geo.GeoProjection = d3Geo.geoTransverseMercator();

// ----------------------------------------------------------------------
// Create New Projections
// ----------------------------------------------------------------------


let geoProjection: d3Geo.GeoProjection = d3Geo.geoProjection(azimuthalEqualAreaRaw);

let mutate: () => d3Geo.GeoProjection = d3Geo.geoProjectionMutator(() => azimuthalEqualAreaRaw);
let constructedProjection: d3Geo.GeoProjection = mutate();

// Use Projection ==========================================================

let projected: [number, number] = constructedProjection([54, 2]);
let inverted2: [number, number] = constructedProjection.invert([54, 2]);

// TODO ?????
// let stream: d3Geo.Stream = constructedProjection.stream([54, 2]);

let clipAngle: number = constructedProjection.clipAngle();
constructedProjection = constructedProjection.clipAngle(null);
constructedProjection = constructedProjection.clipAngle(45);

let clipExtent: [[number, number], [number, number]] | null = constructedProjection.clipExtent();
constructedProjection = constructedProjection.clipExtent(null);
constructedProjection = constructedProjection.clipExtent([[0, 0], [1, 1]]);

let scale: number = constructedProjection.scale();
constructedProjection = constructedProjection.scale(45);

let translate: [number, number] = constructedProjection.translate();
constructedProjection = constructedProjection.translate([480, 250]);

let center: [number, number] = constructedProjection.center();
constructedProjection = constructedProjection.center([0, 0]);

let rotate: [number, number, number] = constructedProjection.rotate();
constructedProjection = constructedProjection.rotate([0, 0]);
constructedProjection = constructedProjection.rotate([0, 0, 0]);

let precision2: number = constructedProjection.precision();
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

// ----------------------------------------------------------------------
// GeoConicProjection interface
// ----------------------------------------------------------------------

// parallels(...) ------------------------------------------------------
let parallels: [number, number] = conicConformal.parallels();
conicConformal = conicConformal.parallels([20, 20]);

// test method inheritance from GeoProjection ---------------------------

conicConformal = conicConformal.fitSize([960, 500], samplePolygon); // inherited

// ----------------------------------------------------------------------
// GeoPath Generator
// ----------------------------------------------------------------------

let minimalRenderingContextMockUp: d3Geo.GeoContext = {
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
let geoPathProjectionMinimal: d3Geo.GeoStreamWrapper = geoPathCanvas.projection();
let geoPathProjectionUnion: d3Geo.GeoProjection | d3Geo.GeoConicProjection | d3Geo.GeoStreamWrapper = geoPathCanvas.projection();
let geoPathProjection: d3Geo.GeoProjection = geoPathCanvas.projection<d3Geo.GeoProjection>();

geoPathSVG = geoPathSVG.projection(conicConformal);
let geoPathConicProjection: d3Geo.GeoConicProjection = geoPathSVG.projection<d3Geo.GeoConicProjection>();
// geoPathConicProjection = geoPathSVG.projection(); // fails without casting to GeoConicProjection, or alternatively custom typeguard
// geoPathConicProjection = geoPathSVG.projection<SampleProperties1>(); // fails as SampleProperties does not extend minimal interface

// context(...) ------------------------------------------------------

// minimal context interface (mockup)
geoPathCanvas = geoPathCanvas.context(minimalRenderingContextMockUp);


let geoPathContext: d3Geo.GeoContext = geoPathCanvas.context();

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
let geoPathCanvasPointRadiusAccessor: ((this: any, d: d3Geo.GeoPermissibleObjects, ...args: any[]) => number) | number = geoPathCanvas.pointRadius();

geoPathSVG = geoPathSVG.pointRadius(function (datum) {
    let that: SVGPathElement = this;
    let d: d3Geo.ExtendedFeature<GeoJSON.Polygon, SampleProperties1> = datum;
    return datum.properties.name === 'Alabama' ? 10 : 15;
});

let geoPathSVGPointRadiusAccessor: number | ((this: SVGPathElement, d: d3Geo.ExtendedFeature<GeoJSON.Polygon, SampleProperties1>, ...args: any[]) => number) = geoPathSVG.pointRadius();
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

let svgPath: Selection<SVGPathElement, d3Geo.ExtendedFeature<GeoJSON.Polygon, SampleProperties1>, any, any>;
svgPath.attr('d', geoPathSVG);

let svgCircleWrong: Selection<SVGCircleElement, d3Geo.ExtendedFeature<GeoJSON.Polygon, SampleProperties1>, any, any>;
// svgCircleWrong.attr('d', geoPathSVG); // fails, mismatch in `this` context

let svgPathWrong: Selection<SVGPathElement, GeoJSON.Polygon, any, any>;
// svgPathWrong.attr('d', geoPathSVG); // fails, mismatch in datum type




// ----------------------------------------------------------------------
// Context interface
// ----------------------------------------------------------------------
let context: d3Geo.GeoContext = {
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

let transformFunction: { stream: (s: d3Geo.GeoStream) => {} } = d3Geo.geoTransform({});

interface CustomTranformProto extends d3Geo.GeoTransformPrototype {
    a: number;
}

let customTransformProto: CustomTranformProto;

customTransformProto = {
    point: function (x, y) {
        return this.stream.point(x + this.a, -y);
    },
    a: 10
};

let t: { stream: (s: d3Geo.GeoStream) => (CustomTranformProto & d3Geo.GeoStream) } = d3Geo.geoTransform(customTransformProto);


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
let stream: d3Geo.GeoStream;

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


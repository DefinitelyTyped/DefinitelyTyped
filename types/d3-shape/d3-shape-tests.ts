/**
 * Typescript definition tests for d3/d3-shape module
 *
 * Note: These tests are intended to test the definitions only
 * in the sense of typing and call signature consistency. They
 * are not intended as functional tests.
 */

import * as d3Shape from 'd3-shape';
import { select, Selection } from 'd3-selection';
import { path } from 'd3-path';
import { HierarchyPointLink, HierarchyPointNode } from 'd3-hierarchy';

// -----------------------------------------------------------------------------------
// Preparatory Steps (General)
// -----------------------------------------------------------------------------------

let context: CanvasRenderingContext2D | null = document.querySelector('canvas')!.getContext('2d');
let num: number;
let pathStringMaybe: string | null;

// -----------------------------------------------------------------------------------
// Test Arc Generator
// -----------------------------------------------------------------------------------

interface ArcDatum {
    iRadius: number;
    oRadius: number;
    sAngle: number;
    eAngle: number;
    pAngle: number;
}

const arcDefaultDatum: d3Shape.DefaultArcObject = {
    innerRadius: 40,
    outerRadius: 60,
    startAngle: 0,
    endAngle: Math.PI / 2,
    padAngle: 0.03
};

const arcDatum: ArcDatum = {
    iRadius: 40,
    oRadius: 60,
    sAngle: 0,
    eAngle: Math.PI / 2,
    pAngle: 0.03
};

let accessorArcDatumNumber: (this: any, d: ArcDatum, ...args: any[]) => number;
let accessorArcDatumNumberOrNull: ((this: any, d: ArcDatum, ...args: any[]) => number) | null;

// DefaultArcObject interface ========================================================

const defaultArcObject: d3Shape.DefaultArcObject = {
    innerRadius: 0,
    outerRadius: 100,
    startAngle: 0,
    endAngle: Math.PI / 2,
    padAngle: 0
};

num = defaultArcObject.innerRadius;
num = defaultArcObject.outerRadius;
num = defaultArcObject.startAngle;
num = defaultArcObject.endAngle;
num = defaultArcObject.padAngle;

// arc(...) create Arc generator =====================================================

let canvasArc: d3Shape.Arc<any, d3Shape.DefaultArcObject> = d3Shape.arc();
let svgArc: d3Shape.Arc<SVGPathElement, ArcDatum> = d3Shape.arc<SVGPathElement, ArcDatum>();

// configure Arc(...) generator ======================================================

// context(...) ----------------------------------------------------------------------

if (context !== null) {
    canvasArc = canvasArc.context(context); // draw to canvas
}
context = canvasArc.context();

svgArc = svgArc.context(null); // use as path string generator for SVG

// innerRadius(...) -------------------------------------------------------------------

canvasArc = canvasArc.innerRadius(40);

svgArc = svgArc.innerRadius(d => {
    return d.iRadius; // datum type is ArcDatum
});
accessorArcDatumNumber = svgArc.innerRadius();

// outerRadius(...) --------------------------------------------------------------------

canvasArc = canvasArc.outerRadius(60);

svgArc = svgArc.outerRadius(d => {
    return d.oRadius; // datum type is ArcDatum
});
accessorArcDatumNumber = svgArc.outerRadius();

// cornerRadius(...) ------------------------------------------------------------------

canvasArc = canvasArc.cornerRadius(4);

svgArc = svgArc.cornerRadius(d => {
    return d.oRadius / 10; // datum type is ArcDatum
});
accessorArcDatumNumber = svgArc.cornerRadius();

// startAngle(...) --------------------------------------------------------------------

canvasArc = canvasArc.startAngle(0);

svgArc = svgArc.startAngle(d => {
    return d.sAngle; // datum type is ArcDatum
});
accessorArcDatumNumber = svgArc.startAngle();

// endAngle(...) ----------------------------------------------------------------------

canvasArc = canvasArc.endAngle(Math.PI / 2);

svgArc = svgArc.endAngle(d => {
    return d.eAngle; // datum type is ArcDatum
});
accessorArcDatumNumber = svgArc.endAngle();

// padAngle(...) ----------------------------------------------------------------------

canvasArc = canvasArc.padAngle(0);

svgArc = svgArc.padAngle(d => {
    return d.pAngle; // datum type is ArcDatum
});
accessorArcDatumNumber = svgArc.padAngle();

// padRadius(...) ----------------------------------------------------------------------

canvasArc = canvasArc.padRadius(0);

svgArc = svgArc.padRadius(d => {
    return Math.sqrt(d.iRadius * d.iRadius + d.oRadius * d.oRadius);
});

svgArc = svgArc.padRadius(null);

accessorArcDatumNumberOrNull = svgArc.padRadius();

// use Arc(...) generator ============================================================

// centroid(...) ---------------------------------------------------------------------

const centroid: [number, number] = svgArc.centroid(arcDatum);
// centroid = svgArc.centroid(arcDefaultDatum); // fails, wrong datum type

// generate arc ----------------------------------------------------------------------

// use with canvas
canvasArc(arcDefaultDatum);

// use with svg

const pArc: Selection<SVGPathElement, ArcDatum, any, any> = select<SVGPathElement, ArcDatum>('.arc-paths'); // mock
const wrongArc1: Selection<SVGCircleElement, ArcDatum, any, any> = select<SVGCircleElement, ArcDatum>('.arc-paths'); // mock
const wrongArc2: Selection<SVGPathElement, { test: string }, any, any> = select<SVGPathElement, { test: string }>('.arc-paths'); // mock

pArc.attr('d', svgArc);
// wrongArc1.attr('d', svgArc); // fails, incompatible this contexts
// wrongArc2.attr('d', svgArc); // fails, incompatible datum types

// pathStringMaybe = svgArc(arcDatum); // fails, wrong this type for invocation

// Use with custom object

interface ArcerDatum {
    innerRadius: number;
    outerRadius: number;
}

class Arcer {
    constructor(innerRadius: number, outerRadius: number) {
        this.startAngle = 0;
        this.endAngle = Math.PI / 2;
        this.padAngle = 0;
        this.innerRadius = innerRadius;
        this.outerRadius = outerRadius;
        this.cornerRadius = 3;

        this.arc = d3Shape.arc<Arcer, ArcerDatum>()
            .innerRadius(d => {
                return Math.min(d.innerRadius, this.innerRadius);
            })
            .outerRadius(d => {
                return Math.min(d.outerRadius, this.outerRadius);
            })
            .cornerRadius(this.cornerRadius)
            .startAngle(this.startAngle)
            .endAngle(this.endAngle)
            .padAngle(this.padAngle);
    }
    private startAngle: number;
    private endAngle: number;
    private padAngle: number;
    private innerRadius: number;
    private outerRadius: number;
    private cornerRadius: number;

    private arc: d3Shape.Arc<Arcer, ArcerDatum>;

    getPathString(d?: ArcerDatum) {
        return d ? this.arc(d) : this.arc({ innerRadius: this.innerRadius, outerRadius: this.outerRadius });
    }
}

const arcer = new Arcer(100, 120);

pathStringMaybe = arcer.getPathString();
pathStringMaybe = arcer.getPathString({ innerRadius: 10, outerRadius: 20 });

// -----------------------------------------------------------------------------------
// Test Pie Generator
// -----------------------------------------------------------------------------------

interface PieDatum {
    val: number;
    name: string;
}

let accessorPieDatumNumber: (this: any, data: PieDatum[], ...args: any[]) => number;

// PieArcDatum interface =============================================================

const pieArcObject: d3Shape.PieArcDatum<PieDatum> = {
    data: {
        val: 10,
        name: "Segment 1"
    },
    value: 10,
    index: 0,
    startAngle: 0,
    endAngle: Math.PI / 2,
    padAngle: 0
};

const pieDatum: PieDatum = pieArcObject.data;
num = pieArcObject.value;
num = pieArcObject.index;
num = pieArcObject.startAngle;
num = pieArcObject.endAngle;
num = pieArcObject.padAngle;

// pie(...) create Pie generator =====================================================

let defaultPie: d3Shape.Pie<any, number | { valueOf(): number }> = d3Shape.pie();

let pie: d3Shape.Pie<any, PieDatum> = d3Shape.pie<PieDatum>();

// configure Pie(...) generator ======================================================

// value(...) -------------------------------------------------------------------------

let defaultPieValueAccessor: (d: number | { valueOf(): number }, i?: number, data?: Array<number | { valueOf(): number }>) => number;

defaultPie = defaultPie.value(10);

defaultPieValueAccessor = defaultPie.value();

let pieValueAccessor: (d: PieDatum, i?: number, data?: PieDatum[]) => number;

pie = pie.value((d, i, data) => {
    console.log(data.length > 0 ? data[0].val : 'no data'); // data type is Array<PieDatum>
    return d.val; // d type is PieDatum
});

pieValueAccessor = pie.value();

// sort(...) ---------------------------------------------------------------------------

let pieSorter: ((a: PieDatum, b: PieDatum) => number) | null;

pie = pie.sort((a, b) => {
    return b.val - a.val; // type of a and b is PieDatum
});

pieSorter = pie.sort();

pie = pie.sort(null);

// sortValues(...) ---------------------------------------------------------------------

let pieValuesSorter: ((a: number, b: number) => number) | null;

pie = pie.sortValues((a, b) => {
    return b - a; // type of a and b is number
});

pieValuesSorter = pie.sortValues();

pie = pie.sortValues(null);

// startAngle(...) --------------------------------------------------------------------

defaultPie = defaultPie.startAngle(0);

pie = pie.startAngle(d => {
    console.log(d.length > 0 ? d[0].val : 'no data'); // data type is Array<PieDatum>
    return 0;
});
accessorPieDatumNumber = pie.startAngle();

// endAngle(...) ----------------------------------------------------------------------

defaultPie = defaultPie.endAngle(2 * Math.PI);

pie = pie.endAngle(d => {
    console.log(d.length > 0 ? d[0].val : 'no data'); // data type is Array<PieDatum>
    return 2 * Math.PI;
});
accessorPieDatumNumber = pie.endAngle();

// padAngle(...) ----------------------------------------------------------------------

defaultPie = defaultPie.padAngle(0.03);

pie = pie.padAngle(d => {
    console.log(d.length > 0 ? d[0].val : 'no data'); // data type is Array<PieDatum>
    return 0.03;
});
accessorPieDatumNumber = pie.padAngle();

// use Pie(...) generator ============================================================

let defaultPieChart: Array<d3Shape.PieArcDatum<number | { valueOf(): number }>>;

defaultPieChart = defaultPie([20, 10, 30, 40]);

const pieData: PieDatum[] = [
    { name: 'John', val: 20 },
    { name: 'Jill', val: 10 },
    { name: 'Rodrigo', val: 30 }
];
let pieChart: Array<d3Shape.PieArcDatum<PieDatum>>;

pieChart = pie(pieData);

// -----------------------------------------------------------------------------------
// Test Line Generators
// -----------------------------------------------------------------------------------

interface LineDatum {
    x: number;
    y: number;
    missing: boolean;
}

let lineXYAccessorFn: (d: LineDatum, index?: number, data?: LineDatum[]) => number;
let lineDefAccessorFn: (d: LineDatum, index?: number, data?: LineDatum[]) => boolean;

interface LineRadialDatum {
    angle: number;
    radius: number;
    missing: boolean;
}

let lineRadialAngRAccessorFn: (d: LineRadialDatum, index?: number, data?: LineRadialDatum[]) => number;
let lineRadialDefAccessorFn: (d: LineRadialDatum, index?: number, data?: LineRadialDatum[]) => boolean;

// line(...) create Line generator =====================================================

let defaultLine: d3Shape.Line<[number, number]> = d3Shape.line();
let line: d3Shape.Line<LineDatum> = d3Shape.line<LineDatum>();

// configure Line(...) generator ======================================================

// context(...) ----------------------------------------------------------------------

if (context !== null) {
    defaultLine = defaultLine.context(context); // draw to canvas
}

context = defaultLine.context();

line = line.context(null); // use as path string generator for SVG

// x(...) ----------------------------------------------------------------------------

defaultLine = defaultLine.x(30);

line = line.x((d, t, data) => {
    console.log('Number of Points: ', data.length);
    console.log('X-Coordinate of first point: ', data[0].x); // data type is Array<LineDatum>
    return d.x; // d type is LineDatum
});

lineXYAccessorFn = line.x();

// y(...) ----------------------------------------------------------------------------

defaultLine = defaultLine.y(10);

line = line.y((d, t, data) => {
    console.log('Number of Points: ', data.length);
    console.log('Y-Coordinate of first point: ', data[0].y); // data type is Array<LineDatum>
    return d.y; // d type is LineDatum
});

lineXYAccessorFn = line.y();

// defined(...) ----------------------------------------------------------------------

defaultLine = defaultLine.defined(true);

line = line.defined((d, t, data) => {
    console.log('Number of Points: ', data.length);
    console.log('Y-Coordinate of first point: ', data[0].y); // data type is Array<LineDatum>
    return !d.missing; // d type is LineDatum
});

lineDefAccessorFn = line.defined();

// curve(...) ------------------------------------------------------------------------

defaultLine = defaultLine.curve(d3Shape.curveLinear);

line = line.curve(d3Shape.curveBundle.beta(0.5));

let currentCurveFactory: d3Shape.CurveFactory | d3Shape.CurveFactoryLineOnly = line.curve();

// use Line generator ===============================================================

defaultLine([[10, 10], [20, 10], [20, 20]]);

const lineData: LineDatum[] = [
    { x: 10, y: 10, missing: false },
    { x: 20, y: 10, missing: false },
    { x: 20, y: 20, missing: false }
];

const linePathStringMaybe: string | null = line(lineData);

// lineRadial(...) create Line generator =====================================================

let defaultLineRadial: d3Shape.LineRadial<[number, number]> = d3Shape.lineRadial();
let lineRadial: d3Shape.LineRadial<LineRadialDatum> = d3Shape.lineRadial<LineRadialDatum>();

// DEPRECATED Naming conventions test (cross-testing with new naming conventions)

let defaultRadialLine: d3Shape.RadialLine<[number, number]> = defaultLineRadial;
let radialLine: d3Shape.RadialLine<LineRadialDatum> = lineRadial;

defaultLineRadial = d3Shape.radialLine();
lineRadial = d3Shape.radialLine<LineRadialDatum>();

// configure LineRadial(...) generator ======================================================

// context(...) ----------------------------------------------------------------------

if (context !== null) {
    defaultLineRadial = defaultLineRadial.context(context); // draw to canvas
}
context = defaultLineRadial.context();

lineRadial = lineRadial.context(null); // use as path string generator for SVG

// angle(...) ----------------------------------------------------------------------------

defaultLineRadial = defaultLineRadial.angle(Math.PI);

lineRadial = lineRadial.angle((d, t, data) => {
    console.log('Number of Points: ', data.length);
    console.log('Angle of first point: ', data[0].angle); // data type is Array<LineRadialDatum>
    return d.angle; // d type is LineRadialDatum
});

lineRadialAngRAccessorFn = lineRadial.angle();

// radius(...) ----------------------------------------------------------------------------

defaultLineRadial = defaultLineRadial.radius(30);

lineRadial = lineRadial.radius((d, t, data) => {
    console.log('Number of Points: ', data.length);
    console.log('Angle of first point: ', data[0].angle); // data type is Array<LineRadialDatum>
    return d.radius; // d type is LineRadialDatum
});

lineRadialAngRAccessorFn = lineRadial.radius();

// defined(...) ----------------------------------------------------------------------

defaultLineRadial = defaultLineRadial.defined(true);

lineRadial = lineRadial.defined((d, t, data) => {
    console.log('Number of Points: ', data.length);
    console.log('Angle of first point: ', data[0].angle); // data type is Array<LineRadialDatum>
    return !d.missing; // d type is LineRadialDatum
});

lineRadialDefAccessorFn = lineRadial.defined();

// curve(...) ------------------------------------------------------------------------

defaultLineRadial = defaultLineRadial.curve(d3Shape.curveLinear);

lineRadial = lineRadial.curve(d3Shape.curveBundle.beta(0.5));

currentCurveFactory = lineRadial.curve();

// use LineRadial generator ===============================================================

defaultLineRadial([[10, 10], [20, 10], [20, 20]]);

const lineRadialData: LineRadialDatum[] = [
    { angle: 0, radius: 10, missing: false },
    { angle: Math.PI / 2, radius: 20, missing: false },
    { angle: 2 * Math.PI, radius: 10, missing: false }
];

const lineRadialPathStringMaybe: string | null = lineRadial(lineRadialData);

// -----------------------------------------------------------------------------------
// Test Area Generators
// -----------------------------------------------------------------------------------

interface AreaDatum {
    x0: number;
    y0: number;
    x1: number;
    y1: number;
    missing: boolean;
}

let areaXYAccessorFn: (d: AreaDatum, index?: number, data?: AreaDatum[]) => number;
let areaXYAccessorFnMaybe: null | ((d: AreaDatum, index?: number, data?: AreaDatum[]) => number);
let areaDefAccessorFn: (d: AreaDatum, index?: number, data?: AreaDatum[]) => boolean;

interface AreaRadialDatum {
    startAngle: number;
    endAngle: number;
    innerRadius: number;
    outerRadius: number;
    missing: boolean;
}

let areaRadialAngRAccessorFn: (d: AreaRadialDatum, index?: number, data?: AreaRadialDatum[]) => number;
let areaRadialAngRAccessorFnMaybe: null | ((d: AreaRadialDatum, index?: number, data?: AreaRadialDatum[]) => number);
let areaRadialDefAccessorFn: (d: AreaRadialDatum, index?: number, data?: AreaRadialDatum[]) => boolean;

// area(...) create Area generator =====================================================

let defaultArea: d3Shape.Area<[number, number]> = d3Shape.area();
let area: d3Shape.Area<AreaDatum> = d3Shape.area<AreaDatum>();

// configure Area(...) generator ======================================================

// context(...) ----------------------------------------------------------------------

if (context !== null) {
    defaultArea = defaultArea.context(context); // draw to canvas
}
context = defaultArea.context();

area = area.context(null); // use as path string generator for SVG

// x(...) ----------------------------------------------------------------------------

defaultArea = defaultArea.x(30);

area = area.x((d, t, data) => {
    console.log('Number of Points: ', data.length);
    console.log('X0-Coordinate of first point: ', data[0].x0); // data type is Array<AreaDatum>
    return d.x0; // d type is AreaDatum
});

areaXYAccessorFn = area.x();

// x0(...) ----------------------------------------------------------------------------

defaultArea = defaultArea.x0(30);

area = area.x0((d, t, data) => {
    console.log('Number of Points: ', data.length);
    console.log('X0-Coordinate of first point: ', data[0].x0); // data type is Array<AreaDatum>
    return d.x0; // d type is AreaDatum
});

areaXYAccessorFn = area.x0();

// x1(...) ----------------------------------------------------------------------------

defaultArea = defaultArea.x1(30);

area = area.x1((d, t, data) => {
    console.log('Number of Points: ', data.length);
    console.log('X1-Coordinate of first point: ', data[0].x1); // data type is Array<AreaDatum>
    return d.x1; // d type is AreaDatum
});

areaXYAccessorFnMaybe = area.x1();

// y(...) ----------------------------------------------------------------------------

defaultArea = defaultArea.y(10);

area = area.y((d, t, data) => {
    console.log('Number of Points: ', data.length);
    console.log('Y0-Coordinate of first point: ', data[0].y0); // data type is Array<AreaDatum>
    return d.y0; // d type is AreaDatum
});

areaXYAccessorFn = area.y();

// y0(...) ----------------------------------------------------------------------------

defaultArea = defaultArea.y0(10);

area = area.y0((d, t, data) => {
    console.log('Number of Points: ', data.length);
    console.log('Y0-Coordinate of first point: ', data[0].y0); // data type is Array<AreaDatum>
    return d.y0; // d type is AreaDatum
});

areaXYAccessorFn = area.y0();

// y1(...) ----------------------------------------------------------------------------

defaultArea = defaultArea.y1(10);

area = area.y1((d, t, data) => {
    console.log('Number of Points: ', data.length);
    console.log('Y1-Coordinate of first point: ', data[0].y1); // data type is Array<AreaDatum>
    return d.y1; // d type is AreaDatum
});

areaXYAccessorFnMaybe = area.y1();

// defined(...) ----------------------------------------------------------------------

defaultArea = defaultArea.defined(true);

area = area.defined((d, t, data) => {
    console.log('Number of Points: ', data.length);
    console.log('Y0-Coordinate of first point: ', data[0].y0); // data type is Array<AreaDatum>
    return !d.missing; // d type is AreaDatum
});

areaDefAccessorFn = area.defined();

// curve(...) ------------------------------------------------------------------------

defaultArea = defaultArea.curve(d3Shape.curveLinear);

area = area.curve(d3Shape.curveCardinal.tension(0.5));
// area = area.curve(d3Shape.curveBundle.beta(0.5)); // fails, as curveBundle-based line generator does not support area-related methods

currentCurveFactory = area.curve();

// use Area generator ===============================================================

defaultArea([[10, 10], [20, 10], [20, 20]]);

const areaData: AreaDatum[] = [
    { x0: 10, y0: 10, x1: 10, y1: 30, missing: false },
    { x0: 20, y0: 20, x1: 20, y1: 40, missing: false },
    { x0: 30, y0: 30, x1: 30, y1: 30, missing: false }
];

const areaPathStringMaybe: string | null = area(areaData);

// Get Line Generators from Area generator ========================================================

let areaLineGenerator: d3Shape.Line<AreaDatum>;

areaLineGenerator = area.lineX0();
areaLineGenerator = area.lineY0();
areaLineGenerator = area.lineX1();
areaLineGenerator = area.lineY1();

// areaRadial(...) create AreaRadial generator =====================================================

let defaultAreaRadial: d3Shape.AreaRadial<[number, number]> = d3Shape.areaRadial();
let areaRadial: d3Shape.AreaRadial<AreaRadialDatum> = d3Shape.areaRadial<AreaRadialDatum>();

// DEPRECATED Naming conventions test (cross-testing with new naming conventions)

let defaultRadialArea: d3Shape.RadialArea<[number, number]> = defaultAreaRadial;
let radialArea: d3Shape.RadialArea<AreaRadialDatum> = areaRadial;

defaultAreaRadial = d3Shape.radialArea();
areaRadial = d3Shape.radialArea<AreaRadialDatum>();

// configure AreaRadial(...) generator ======================================================

// context(...) ----------------------------------------------------------------------

if (context !== null) {
    defaultAreaRadial = defaultAreaRadial.context(context); // draw to canvas
}
context = defaultAreaRadial.context();

areaRadial = areaRadial.context(null); // use as path string generator for SVG

// angle(...) ----------------------------------------------------------------------------

defaultAreaRadial = defaultAreaRadial.angle(Math.PI);

areaRadial = areaRadial.angle((d, t, data) => {
    console.log('Number of Points: ', data.length);
    console.log('Start angle of first point: ', data[0].startAngle); // data type is Array<AreaRadialDatum>
    return d.startAngle; // d type is AreaRadialDatum
});

areaRadialAngRAccessorFn = areaRadial.angle();

// startAngle(...) ----------------------------------------------------------------------------

defaultAreaRadial = defaultAreaRadial.startAngle(Math.PI);

areaRadial = areaRadial.startAngle((d, t, data) => {
    console.log('Number of Points: ', data.length);
    console.log('Start angle of first point: ', data[0].startAngle); // data type is Array<AreaRadialDatum>
    return d.startAngle; // d type is AreaRadialDatum
});

areaRadialAngRAccessorFn = areaRadial.startAngle();

// endAngle(...) ----------------------------------------------------------------------------

defaultAreaRadial = defaultAreaRadial.endAngle(Math.PI);

areaRadial = areaRadial.endAngle((d, t, data) => {
    console.log('Number of Points: ', data.length);
    console.log('End angle of first point: ', data[0].endAngle); // data type is Array<AreaRadialDatum>
    return d.endAngle; // d type is AreaRadialDatum
});

areaRadialAngRAccessorFnMaybe = areaRadial.endAngle();

// radius(...) ----------------------------------------------------------------------------

defaultAreaRadial = defaultAreaRadial.radius(10);

areaRadial = areaRadial.radius((d, t, data) => {
    console.log('Number of Points: ', data.length);
    console.log('Inner radius of first point: ', data[0].innerRadius); // data type is Array<AreaRadialDatum>
    return d.innerRadius; // d type is AreaRadialDatum
});

areaRadialAngRAccessorFn = areaRadial.radius();

// innerRadius(...) ----------------------------------------------------------------------------

defaultAreaRadial = defaultAreaRadial.innerRadius(10);

areaRadial = areaRadial.innerRadius((d, t, data) => {
    console.log('Number of Points: ', data.length);
    console.log('Inner radius of first point: ', data[0].innerRadius); // data type is Array<AreaRadialDatum>
    return d.innerRadius; // d type is AreaRadialDatum
});

areaRadialAngRAccessorFn = areaRadial.innerRadius();

// outerRadius(...) ----------------------------------------------------------------------------

defaultAreaRadial = defaultAreaRadial.outerRadius(20);

areaRadial = areaRadial.outerRadius((d, t, data) => {
    console.log('Number of Points: ', data.length);
    console.log('Outer radius of first point: ', data[0].outerRadius); // data type is Array<AreaRadialDatum>
    return d.outerRadius; // d type is AreaRadialDatum
});

areaRadialAngRAccessorFnMaybe = areaRadial.outerRadius();

// defined(...) ----------------------------------------------------------------------

defaultAreaRadial = defaultAreaRadial.defined(true);

areaRadial = areaRadial.defined((d, t, data) => {
    console.log('Number of Points: ', data.length);
    console.log('Inner radius of first point: ', data[0].innerRadius); // data type is Array<AreaRadialDatum>
    return !d.missing; // d type is AreaRadialDatum
});

areaRadialDefAccessorFn = areaRadial.defined();

// curve(...) ------------------------------------------------------------------------

defaultAreaRadial = defaultAreaRadial.curve(d3Shape.curveLinear);

areaRadial = areaRadial.curve(d3Shape.curveCardinal.tension(0.5));
// areaRadial = areaRadial.curve(d3Shape.curveBundle.beta(0.5)); // fails, as curveBundle-based line generator does not support area-related methods

currentCurveFactory = areaRadial.curve();

// use AreaRadial generator ===============================================================

defaultAreaRadial([[10, 10], [20, 10], [20, 20]]);

const areaRadialData: AreaRadialDatum[] = [
    { startAngle: 0, innerRadius: 10, endAngle: 0, outerRadius: 30, missing: false },
    { startAngle: Math.PI / 2, innerRadius: 20, endAngle: Math.PI / 2, outerRadius: 40, missing: false },
    { startAngle: Math.PI, innerRadius: 30, endAngle: Math.PI, outerRadius: 30, missing: false }
];

const areaRadialPathStringMaybe: string | null = areaRadial(areaRadialData);

// Get LineRadial Generators from AreaRadial generator ========================================================

let areaLineRadialGenerator: d3Shape.LineRadial<AreaRadialDatum>;

areaLineRadialGenerator = areaRadial.lineStartAngle();
areaLineRadialGenerator = areaRadial.lineInnerRadius();
areaLineRadialGenerator = areaRadial.lineEndAngle();
areaLineRadialGenerator = areaRadial.lineOuterRadius();

// -----------------------------------------------------------------------------------
// Test Curve Factories
// -----------------------------------------------------------------------------------

// Test General interfaces -----------------------------------------------------------

let lineOnlyGenerator: d3Shape.CurveGeneratorLineOnly;

const lineOnlyFactory: d3Shape.CurveFactoryLineOnly = d3Shape.curveBundle;

lineOnlyGenerator = lineOnlyFactory(path());
lineOnlyGenerator = lineOnlyFactory(context!); // force context to be non-null with post-fix for mock

lineOnlyGenerator.lineStart();
lineOnlyGenerator.lineEnd();
lineOnlyGenerator.point(10, 20);

let curveGenerator: d3Shape.CurveGenerator;

let curveFactory: d3Shape.CurveFactory = d3Shape.curveBasis;

curveGenerator = curveFactory(path());
curveGenerator = curveFactory(context!);  // force context to be non-null with post-fix for mock

curveGenerator.lineStart();
curveGenerator.lineEnd();
curveGenerator.point(10, 20);
curveGenerator.areaStart();
curveGenerator.areaEnd();

// Test factories --------------------------------------------------------------------

curveFactory = d3Shape.curveBasis;
curveFactory = d3Shape.curveBasisOpen;
curveFactory = d3Shape.curveBasisClosed;

let curveBundleFactory: d3Shape.CurveBundleFactory;

curveBundleFactory = d3Shape.curveBundle;
curveBundleFactory = d3Shape.curveBundle.beta(0.5);

lineOnlyGenerator = d3Shape.curveBundle.beta(0.5)(context!);  // force context to be non-null with post-fix for mock
lineOnlyGenerator = d3Shape.curveBundle.beta(0.5)(path());
// curveGenerator = d3Shape.curveBundle.beta(0.5)(context); // fails, no area related methods

let curveCardinalFactory: d3Shape.CurveCardinalFactory;

curveCardinalFactory = d3Shape.curveCardinal;
curveCardinalFactory = d3Shape.curveCardinal.tension(0.5);

curveGenerator = d3Shape.curveCardinal.tension(0.5)(context!);  // force context to be non-null with post-fix for mock
curveGenerator = d3Shape.curveCardinal.tension(0.5)(path());

curveCardinalFactory = d3Shape.curveCardinalOpen;
curveCardinalFactory = d3Shape.curveCardinalOpen.tension(0.5);

curveGenerator = d3Shape.curveCardinalOpen.tension(0.5)(context!);  // force context to be non-null with post-fix for mock
curveGenerator = d3Shape.curveCardinalOpen.tension(0.5)(path());

curveCardinalFactory = d3Shape.curveCardinalClosed;
curveCardinalFactory = d3Shape.curveCardinalClosed.tension(0.5);

curveGenerator = d3Shape.curveCardinalClosed.tension(0.5)(context!);  // force context to be non-null with post-fix for mock
curveGenerator = d3Shape.curveCardinalClosed.tension(0.5)(path());

let curveCatmullRomFactory: d3Shape.CurveCatmullRomFactory;

curveCatmullRomFactory = d3Shape.curveCatmullRom;
curveCatmullRomFactory = d3Shape.curveCatmullRom.alpha(0.5);

curveGenerator = d3Shape.curveCatmullRom.alpha(0.5)(context!);  // force context to be non-null with post-fix for mock
curveGenerator = d3Shape.curveCatmullRom.alpha(0.5)(path());

curveCatmullRomFactory = d3Shape.curveCatmullRomOpen;
curveCatmullRomFactory = d3Shape.curveCatmullRomOpen.alpha(0.5);

curveGenerator = d3Shape.curveCatmullRomOpen.alpha(0.5)(context!);  // force context to be non-null with post-fix for mock
curveGenerator = d3Shape.curveCatmullRomOpen.alpha(0.5)(path());

curveCatmullRomFactory = d3Shape.curveCatmullRomClosed;
curveCatmullRomFactory = d3Shape.curveCatmullRomClosed.alpha(0.5);

curveGenerator = d3Shape.curveCatmullRomClosed.alpha(0.5)(context!);  // force context to be non-null with post-fix for mock
curveGenerator = d3Shape.curveCatmullRomClosed.alpha(0.5)(path());

curveFactory = d3Shape.curveLinear;

curveFactory = d3Shape.curveLinearClosed;

curveFactory = d3Shape.curveMonotoneX;

curveFactory = d3Shape.curveMonotoneY;

curveFactory = d3Shape.curveNatural;

curveFactory = d3Shape.curveStep;

curveFactory = d3Shape.curveStepAfter;

curveFactory = d3Shape.curveStepBefore;

// -----------------------------------------------------------------------------------
// Test Link/LinkRadial Generators
// -----------------------------------------------------------------------------------

// Preparatory steps =================================================================

interface TreeNodeDatum {
    whatever: any;
}

declare const linkDatum: HierarchyPointLink<TreeNodeDatum>;

declare const defaultLinkDatum: d3Shape.DefaultLinkObject;

const pLink: Selection<SVGPathElement, HierarchyPointLink<TreeNodeDatum>, any, any> =
    select<SVGPathElement, HierarchyPointLink<TreeNodeDatum>>('.link-paths'); // mock
const wrongLink1: Selection<SVGCircleElement, HierarchyPointLink<TreeNodeDatum>, any, any> =
    select<SVGCircleElement, HierarchyPointLink<TreeNodeDatum>>('.link-paths'); // mock
const wrongLink2: Selection<SVGPathElement, d3Shape.DefaultLinkObject, any, any> =
    select<SVGPathElement, d3Shape.DefaultLinkObject>('.link-paths'); // mock

// Test DefaultLinkObject Interface ==================================================

let coordinates: [number, number];

coordinates = defaultLinkDatum.source;
coordinates = defaultLinkDatum.target;

// Test generator factories ==========================================================

let defaultLink: d3Shape.Link<any, d3Shape.DefaultLinkObject, [number, number]>;

defaultLink = d3Shape.linkHorizontal();
defaultLink = d3Shape.linkVertical();

let link: d3Shape.Link<any, HierarchyPointLink<TreeNodeDatum>, HierarchyPointNode<TreeNodeDatum>>;

link = d3Shape.linkHorizontal<HierarchyPointLink<TreeNodeDatum>, HierarchyPointNode<TreeNodeDatum>>();
link = d3Shape.linkVertical<HierarchyPointLink<TreeNodeDatum>, HierarchyPointNode<TreeNodeDatum>>();

let svgLink: d3Shape.Link<SVGPathElement, HierarchyPointLink<TreeNodeDatum>, HierarchyPointNode<TreeNodeDatum>>;

svgLink = d3Shape.linkHorizontal<SVGPathElement, HierarchyPointLink<TreeNodeDatum>, HierarchyPointNode<TreeNodeDatum>>();
svgLink = d3Shape.linkVertical<SVGPathElement, HierarchyPointLink<TreeNodeDatum>, HierarchyPointNode<TreeNodeDatum>>();

let defaultLinkRadial: d3Shape.LinkRadial<any, d3Shape.DefaultLinkObject, [number, number]>;

defaultLinkRadial = d3Shape.linkRadial();

let radialLink: d3Shape.LinkRadial<any, HierarchyPointLink<TreeNodeDatum>, HierarchyPointNode<TreeNodeDatum>>;

radialLink = d3Shape.linkRadial<HierarchyPointLink<TreeNodeDatum>, HierarchyPointNode<TreeNodeDatum>>();

let svgLinkRadial: d3Shape.LinkRadial<SVGPathElement, HierarchyPointLink<TreeNodeDatum>, HierarchyPointNode<TreeNodeDatum>>;

svgLinkRadial = d3Shape.linkRadial<SVGPathElement, HierarchyPointLink<TreeNodeDatum>, HierarchyPointNode<TreeNodeDatum>>();

// Configure link generators ========================================================

let defaultNodeAccessor: (d: d3Shape.DefaultLinkObject, ...args: any[]) => [number, number];
let svgTreeNodeAccessor: (this: SVGPathElement, d: HierarchyPointLink<TreeNodeDatum>, ...args: any[]) => HierarchyPointNode<TreeNodeDatum>;

let defaultCoordinateAccessor: (d: [number, number], ...args: any[]) => number;
let svgCoordinateAccessor: (this: SVGPathElement, d: HierarchyPointNode<TreeNodeDatum>, ...args: any[]) => number;

// source(...) -----------------------------------------------------------------------

// vertical/horizontal

defaultLink = defaultLink.source(d => {
    const datum: d3Shape.DefaultLinkObject = d;
    return d.source;
});

defaultNodeAccessor = defaultLink.source();

svgLink = svgLink.source(function(d) {
    const that: SVGPathElement = this;
    const datum: HierarchyPointLink<TreeNodeDatum> = d;
    return d.source;
});

svgTreeNodeAccessor = svgLink.source();

// radial

defaultLinkRadial = defaultLinkRadial.source(d => {
    const datum: d3Shape.DefaultLinkObject = d;
    return d.source;
});

defaultNodeAccessor = defaultLinkRadial.source();

svgLinkRadial = svgLinkRadial.source(function(d) {
    const that: SVGPathElement = this;
    const datum: HierarchyPointLink<TreeNodeDatum> = d;
    return d.source;
});

svgTreeNodeAccessor = svgLinkRadial.source();

// target(...) -----------------------------------------------------------------------

// vertical/horizontal

defaultLink = defaultLink.target(d => {
    const datum: d3Shape.DefaultLinkObject = d;
    return d.target;
});

defaultNodeAccessor = defaultLink.target();

svgLink = svgLink.target(function(d) {
    const that: SVGPathElement = this;
    const datum: HierarchyPointLink<TreeNodeDatum> = d;
    return d.target;
});

svgTreeNodeAccessor = svgLink.target();

// radial

defaultLinkRadial = defaultLinkRadial.target(d => {
    const datum: d3Shape.DefaultLinkObject = d;
    return d.target;
});

defaultNodeAccessor = defaultLinkRadial.target();

svgLinkRadial = svgLinkRadial.target(function(d) {
    const that: SVGPathElement = this;
    const datum: HierarchyPointLink<TreeNodeDatum> = d;
    return d.target;
});

svgTreeNodeAccessor = svgLinkRadial.target();

// x(...) ----------------------------------------------------------------------------

defaultLink = defaultLink.x(d => {
    const datum: [number, number] = d;
    return datum[0];
});

defaultCoordinateAccessor = defaultLink.x();

svgLink = svgLink.x(function(d) {
    const that: SVGPathElement = this;
    const datum: HierarchyPointNode<TreeNodeDatum> = d;
    return datum.x;
});

svgCoordinateAccessor = svgLink.x();

// y(...) ----------------------------------------------------------------------------

defaultLink = defaultLink.y(d => {
    const datum: [number, number] = d;
    return datum[1];
});

defaultCoordinateAccessor = defaultLink.y();

svgLink = svgLink.y(function(d) {
    const that: SVGPathElement = this;
    const datum: HierarchyPointNode<TreeNodeDatum> = d;
    return datum.y;
});

svgCoordinateAccessor = svgLink.y();

// angle(...) ------------------------------------------------------------------------

defaultLinkRadial = defaultLinkRadial.angle(d => {
    const datum: [number, number] = d;
    return datum[0];
});

defaultCoordinateAccessor = defaultLinkRadial.angle();

svgLinkRadial = svgLinkRadial.angle(function(d) {
    const that: SVGPathElement = this;
    const datum: HierarchyPointNode<TreeNodeDatum> = d;
    return datum.x;
});

svgCoordinateAccessor = svgLinkRadial.angle();

// radius(...) ------------------------------------------------------------------------

defaultLinkRadial = defaultLinkRadial.radius(d => {
    const datum: [number, number] = d;
    return datum[1];
});

defaultCoordinateAccessor = defaultLinkRadial.radius();

svgLinkRadial = svgLinkRadial.radius(function(d) {
    const that: SVGPathElement = this;
    const datum: HierarchyPointNode<TreeNodeDatum> = d;
    return datum.y;
});

svgCoordinateAccessor = svgLinkRadial.radius();

// context(...) ----------------------------------------------------------------------

if (context !== null) {
    defaultArea = defaultArea.context(context); // draw to canvas
}
context = defaultArea.context();

area = area.context(null); // use as path string generator for SVG

// Use link generators ===============================================================

// Render to canvas ------------------------------------------------------------------

defaultLink(defaultLinkDatum);

defaultLinkRadial(defaultLinkDatum);

// Render to svg ---------------------------------------------------------------------

// vertical/horizontal

pLink.attr('d', svgLink);
// wrongLink1.attr('d', svgLink); // fails, incompatible this contexts
// wrongLink2.attr('d', svgLink); // fails, incompatible datum types

pathStringMaybe = link(linkDatum);

// pathStringMaybe = svgLink(linkDatum); // fails, wrong this type for invocation

// radial

pLink.attr('d', svgLinkRadial);
// wrongLink1.attr('d', svgLinkRadial); // fails, incompatible this contexts
// wrongLink2.attr('d', svgLinkRadial); // fails, incompatible datum types

pathStringMaybe = radialLink(linkDatum);

// pathStringMaybe = svgLinkRadial(linkDatum); // fails, wrong this type for invocation

// -----------------------------------------------------------------------------------
// Test Symbols
// -----------------------------------------------------------------------------------

interface SymbolDatum {
    size: number;
    type: 'circle' | 'square';
}

// Test Symbol Type ==================================================================

let customSymbol: d3Shape.SymbolType;

customSymbol = {
    draw(context: CanvasPathMethods, size: number): void {
        // draw custom symbol using canvas path methods
    }
};

// Symbol() create Symbol Generator ===================================================

let canvasSymbol: d3Shape.Symbol<any, any>;

let svgSymbol: d3Shape.Symbol<SVGPathElement, SymbolDatum>;

canvasSymbol = d3Shape.symbol();

svgSymbol = d3Shape.symbol<SymbolDatum>();

// Configure Symbol Generator =========================================================

// context() --------------------------------------------------------------------------

if (context !== null) {
    canvasSymbol = canvasSymbol.context(context); // draw to canvas
}
context = canvasSymbol.context();

svgSymbol = svgSymbol.context(null); // use as path string generator for SVG

// size() ----------------------------------------------------------------------------

canvasSymbol = canvasSymbol.size(30);

svgSymbol = svgSymbol.size(d => {
    return d.size; // datum type is SymbolDatum
});

let sizeAccessorFn: (d: SymbolDatum) => number;
sizeAccessorFn = svgSymbol.size();

// type() ----------------------------------------------------------------------------

canvasSymbol = canvasSymbol.type(d3Shape.symbolDiamond);

svgSymbol = svgSymbol.type(d => {
    let t: d3Shape.SymbolType;
    switch (d.type) { // datum type is SymbolDatum
        case 'circle':
            t = d3Shape.symbolCircle;
            break;
        case 'square':
            t = d3Shape.symbolSquare;
            break;
        default:
            t = d3Shape.symbolCircle;
            break;
    }
    return t;
});

let typeAccessorFn: (d: SymbolDatum) => d3Shape.SymbolType;
typeAccessorFn = svgSymbol.type();

// Use Symbol Generator ===============================================================

// use with canvas
canvasSymbol();

const symbolDatum: SymbolDatum = {
    size: 30,
    type: 'circle'
};

const pSymbol: Selection<SVGPathElement, SymbolDatum, any, any> = select<SVGPathElement, SymbolDatum>('.symbol-path'); // mock
const wrongSymbol1: Selection<SVGCircleElement, SymbolDatum, any, any> = select<SVGCircleElement, SymbolDatum>('.symbol-path'); // mock
const wrongSymbol2: Selection<SVGPathElement, { test: string }, any, any> = select<SVGPathElement, { test: string }>('.symbol-path'); // mock

pSymbol.attr('d', svgSymbol);
// wrongSymbol1.attr('d', svgSymbol); // fails, incompatible this contexts
// wrongSymbol2.attr('d', svgSymbol); // fails, incompatible datum types

// pathStringMaybe = svgSymbol(symbolDatum); // fails, wrong this type for invocation

// Use with custom object

class Symbolizer {
    constructor(size: number, type: 'circle' | 'square') {
        this.size = size;
        switch (type) {
            case 'circle':
                this.type = d3Shape.symbolCircle;
                break;
            case 'square':
                this.type = d3Shape.symbolSquare;
                break;
            default:
                this.type = d3Shape.symbolCircle;
                break;
        }
        this.symbol = d3Shape.symbol<Symbolizer, SymbolDatum>()
            .size(function(this: Symbolizer, d?: SymbolDatum) {
                return d ? d.size : this.size;
            })
            .type(function(this: Symbolizer, d?: SymbolDatum) {
                let type = this.type;
                if (d && d.type) {
                    switch (d.type) {
                        case 'circle':
                            type = d3Shape.symbolCircle;
                            break;
                        case 'square':
                            type = d3Shape.symbolSquare;
                            break;
                        default:
                            type = d3Shape.symbolSquare;
                    }
                }
                return type;
            });
    }
    private size: number;
    private type: d3Shape.SymbolType;
    private symbol: d3Shape.Symbol<Symbolizer, SymbolDatum>;

    getPathString(d?: SymbolDatum) {
        return d ? this.symbol(d) : this.symbol();
    }
}

const sym = new Symbolizer(100, 'square');

pathStringMaybe = sym.getPathString();
pathStringMaybe = sym.getPathString({ size: 10, type: 'circle' });

// Test pre-fab symbols ===============================================================

const symbolArray: d3Shape.SymbolType[] = d3Shape.symbols;

customSymbol = d3Shape.symbolCircle;
customSymbol = d3Shape.symbolCross;
customSymbol = d3Shape.symbolDiamond;
customSymbol = d3Shape.symbolSquare;
customSymbol = d3Shape.symbolStar;
customSymbol = d3Shape.symbolTriangle;
customSymbol = d3Shape.symbolWye;

// -----------------------------------------------------------------------------------
// Test pointRadius
// -----------------------------------------------------------------------------------

let coordinatates: [number, number] = d3Shape.pointRadius(0, 12);

// -----------------------------------------------------------------------------------
// Test Stacks
// -----------------------------------------------------------------------------------

interface StackDatum {
    values: { [name: string]: number; };
}

let seriesDatum: StackDatum;

interface StackKey {
    name: string;
    label: string;
}

let key: StackKey;

const keys: StackKey[] = [
    { name: 'bananas', label: 'Bananas' },
    { name: 'apples', label: 'Apples' },
    { name: 'oranges', label: 'Oranges' }
];

const stackData: StackDatum[] = [
    { values: { bananas: 10, apples: 20, oranges: 10 } },
    { values: { bananas: 10, apples: 25, oranges: 0 } },
    { values: { bananas: 20, apples: 20, oranges: 30 } },
    { values: { bananas: 12, apples: 10, oranges: 50 } }
];

// Create stack generator ==========================================================

let defaultStack: d3Shape.Stack<any, { [key: string]: number }, string>;

defaultStack = d3Shape.stack();

let overlyComplicatedStack: d3Shape.Stack<any, StackDatum, StackKey>;

overlyComplicatedStack = d3Shape.stack<StackDatum, StackKey>();

// Configure stack generator =======================================================

// keys(...) ----------------------------------------------------------------------

defaultStack = defaultStack.keys(['bananas', 'apples', 'oranges']);

overlyComplicatedStack = overlyComplicatedStack.keys((data: StackDatum[], keys: StackKey[]) => {
    return keys;
});

let keysAccessor: (this: any, data: StackDatum[], keys: StackKey[]) => StackKey[];
keysAccessor = overlyComplicatedStack.keys();

// values(...) ----------------------------------------------------------------------

defaultStack = defaultStack.value(30);

overlyComplicatedStack = overlyComplicatedStack.value((d, key, j, data) => {
    return d.values[key.name];
});

let valueAccessorFn: (this: any, d: StackDatum, key: StackKey, j?: number, data?: StackDatum[]) => number;
valueAccessorFn = overlyComplicatedStack.value();

// order(...) ----------------------------------------------------------------------

defaultStack = defaultStack.order([2, 3, 1]);
defaultStack = defaultStack.order(null);

overlyComplicatedStack = overlyComplicatedStack.order(d3Shape.stackOrderAscending);

let orderStackDatumSeries: (series: d3Shape.Series<StackDatum, StackKey>) => number[];
orderStackDatumSeries = overlyComplicatedStack.order();

// TODO: other signatures

// offset(...) ----------------------------------------------------------------------

defaultStack = defaultStack.offset(null);

overlyComplicatedStack = overlyComplicatedStack.offset(d3Shape.stackOffsetWiggle);

let offsetStackDatumSeries: (series: d3Shape.Series<StackDatum, StackKey>, order: number[]) => void;
offsetStackDatumSeries = overlyComplicatedStack.offset();

// Use stack generator ============================================================

let defaultSeriesArray: Array<d3Shape.Series<{ [key: string]: number }, string>>;
defaultSeriesArray = defaultStack([
    { bananas: 10, apples: 20, oranges: 10 },
    { bananas: 30, apples: 10, oranges: 30 },
    { bananas: 80, apples: 20, oranges: 40 }
]);

let seriesArray: Array<d3Shape.Series<StackDatum, StackKey>>;

seriesArray = overlyComplicatedStack(stackData, keys);

// Test SeriesPoint and Series interfaces ============================================

const series: d3Shape.Series<StackDatum, StackKey> = seriesArray[0];
let seriesPoint: d3Shape.SeriesPoint<StackDatum>;
seriesPoint = series[0];
key = series.key;
num = series.index;

num = seriesPoint[0];
num = seriesPoint[1];
seriesDatum = seriesPoint.data;

// Test stack orders ===============================================================

let order: number[];
const seriesAnyAny: d3Shape.Series<any, any> = seriesArray[0];

order = d3Shape.stackOrderAscending(seriesAnyAny);
order = d3Shape.stackOrderDescending(seriesAnyAny);
order = d3Shape.stackOrderInsideOut(seriesAnyAny);
order = d3Shape.stackOrderNone(seriesAnyAny);
order = d3Shape.stackOrderReverse(seriesAnyAny);

// Test stack offsets ===============================================================

d3Shape.stackOffsetExpand(seriesAnyAny, order);
d3Shape.stackOffsetDiverging(seriesAnyAny, order);
d3Shape.stackOffsetNone(seriesAnyAny, order);
d3Shape.stackOffsetSilhouette(seriesAnyAny, order);
d3Shape.stackOffsetWiggle(seriesAnyAny, order);

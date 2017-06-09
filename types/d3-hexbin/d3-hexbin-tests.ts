/**
 * Typescript definition tests for d3/d3-hexbin module
 *
 * Note: These tests are intended to test the definitions only
 * in the sense of typing and call signature consistency. They
 * are not intended as functional tests.
 */

import * as d3Hexbin from 'd3-hexbin';

interface Point {
    x0: number;
    y0: number;
}

{
    // d3.hexbin() has the expected defaults
    const b = d3Hexbin.hexbin();
    const extent = b.extent(); // [[0, 0], [1, 1]]
    extent.map((x: any, y: any) => { });
    b.x()([41, 42]); // === 41;
    b.y()([41, 42]); // === 42;
    b.radius();      // === 1;


    // hexbin(points) bins the specified points into hexagonal bins
    const bins = d3Hexbin.hexbin()([
        [0, 0], [0, 1], [0, 2],
        [1, 0], [1, 1], [1, 2],
        [2, 0], [2, 1], [2, 2]
    ])

    bins.map((bin: any) => {})
}

{
    // hexbin(points) observes the current x- and y-accessors
    const x = function(d: any) { return d.x; },
          y = function(d: any) { return d.y; },
          bins = d3Hexbin.hexbin<Point>().x(x).y(y)([
        {x0: 0, y0: 0}, {x0: 0, y0: 1}, {x0: 0, y0: 2},
        {x0: 1, y0: 0}, {x0: 1, y0: 1}, {x0: 1, y0: 2},
        {x0: 2, y0: 0}, {x0: 2, y0: 1}, {x0: 2, y0: 2}
    ]);
    bins.map((bin: any) => {});
}

{
    // hexbin(points) observes the current radius
    const bins = d3Hexbin.hexbin().radius(2)([
      [0, 0], [0, 1], [0, 2],
      [1, 0], [1, 1], [1, 2],
      [2, 0], [2, 1], [2, 2]
    ]);
    bins.map((bin: any)=> {});
}

{
    interface PointX {
        x: number;
        [key: number]: number;
    }

    // hexbin.x(x) sets the x-coordinate accessor
    const x = function(d: PointX) { return d.x; },
          b = d3Hexbin.hexbin<PointX>().x(x),
          bins = b([{x: 1, 1: 2}]);

    b.x();          // should be x;
    bins.length;    // should be 1;
    bins[0].x;      // should be 0.8660254037844386;
    bins[0].y;      // should be 1.5;
    bins[0].length  // should be 1;
}

{
    interface PointY {
        y: number;
        [key: number]: number;
    }
    // hexbin.y(y) sets the y-coordinate accessor
    const y = function(d: PointY) { return d.y; },
          b = d3Hexbin.hexbin<PointY>().y(y),
          bins = b([{0: 1, y: 2}]);

    bins.length;    // should be 1;
    bins[0].x;      // should be 0.8660254037844386;
    bins[0].y;      // should be 1.5;
    bins[0].length; // should be 1;
}

{
    // hexbin.hexagon() returns the expected path
    const path: string = d3Hexbin.hexbin().hexagon();
}

{
    // hexbin.hexagon() observes the current bin radius
    const path: string = d3Hexbin.hexbin().radius(2).hexagon();
}

{
    // hexbin.hexagon(radius) observes the specified radius
    const path: string = d3Hexbin.hexbin().hexagon(2);
}

{
    // hexbin.hexagon(radius) uses the current bin radius if radius is null
    let path: string = d3Hexbin.hexbin().hexagon(null);
    path = d3Hexbin.hexbin().hexagon(undefined);
}

{
    // hexbin.centers() returns an array of bin centers
    const centers = d3Hexbin.hexbin().centers();
    centers.map((x: any, y: any) => { });
}

{
    // hexbin.centers() observes the current bin radius
    const centers = d3Hexbin.hexbin().radius(0.5).centers();
    centers.map((x: any, y: any) => { });
}

{
    // hexbin.centers() observes the current extent
    const centers = d3Hexbin.hexbin().radius(0.5)
                            .extent([[-1.1, -1.1], [1.1, 1.1]])
                            .centers();
    centers.map((x, y) => { });
}

{
    // hexbin.mesh() returns the expected path
    const path: string = d3Hexbin.hexbin().mesh();
}

{
    // hexbin.mesh() observes the bin radius
    const path: string = d3Hexbin.hexbin().radius(0.5).mesh();
}

{
    // hexbin.mesh() observes the extent
    const path: string = d3Hexbin.hexbin().radius(0.5)
                         .extent([[-1.1, -1.1], [1.1, 1.1]])
                         .mesh();
}

{

    let hb: d3Hexbin.Hexbin<Point>;
    let bins: d3Hexbin.HexbinBin<Point>[];

    // Create generator =======================================

    hb = d3Hexbin.hexbin<Point>();

    // Configure generator =====================================

    // x Accessor ----------------------------------------------

    let x: (d:Point) => number;
    x = function (d: Point) { return d.x0; };

    // test setter
    hb = hb.x(x);

    // test getter
    x = hb.x();

    // y Accessor ----------------------------------------------

    let y: (d:Point) => number;
    y = function (d: Point) { return d.y0; };

    // test setter
    hb = hb.y(y);

    // test getter
    y = hb.y();

    // Use generator ============================================

    bins = hb([
        { x0: 0, y0: 0 }, { x0: 0, y0: 1 }, { x0: 0, y0: 2 },
        { x0: 1, y0: 0 }, { x0: 1, y0: 1 }, { x0: 1, y0: 2 },
        { x0: 2, y0: 0 }, { x0: 2, y0: 1 }, { x0: 2, y0: 2 }
    ]);

    interface RemappedBin {
        binCoordinates: [number, number];
        points: Point[];
    }

    let remappedBins: Array<RemappedBin>;

    remappedBins = bins.map(bin => {
        const x: number = bin.x; // x-coordinate of bin
        const y: number = bin.y; // y-coordinate of bin
        const pointsInBin: Point[] = bin.map(p => {
            const point: Point = p;
            return point;
        });
        const remapped: RemappedBin = {
            binCoordinates: [x, y],
            points: pointsInBin
        };
        return remapped;
    });
}

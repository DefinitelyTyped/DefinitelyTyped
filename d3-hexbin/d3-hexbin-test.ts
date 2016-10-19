/**
 * Typescript definition tests for d3/d3-hexbin module
 *
 * Note: These tests are intended to test the definitions only
 * in the sense of typing and call signature consistency. They
 * are not intended as functional tests.
 */

import * as d3Hexbin from 'd3-hexbin';

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
          bins = d3Hexbin.hexbin().x(x).y(y)([
        {x: 0, y: 0}, {x: 0, y: 1}, {x: 0, y: 2},
        {x: 1, y: 0}, {x: 1, y: 1}, {x: 1, y: 2},
        {x: 2, y: 0}, {x: 2, y: 1}, {x: 2, y: 2}
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
    // hexbin.x(x) sets the x-coordinate accessor
    const x = function(d: any) { return d.x; },
          b = d3Hexbin.hexbin().x(x),
          bins = b([{x: 1, 1: 2}]);

    b.x();          // should be x;
    bins.length;    // should be 1;
    bins[0].x;      // should be 0.8660254037844386;
    bins[0].y;      // should be 1.5;
    bins[0].length  // should be 1;
}

{
    // hexbin.y(y) sets the y-coordinate accessor
    const y = function(d: any) { return d.y; },
          b = d3Hexbin.hexbin().y(y),
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

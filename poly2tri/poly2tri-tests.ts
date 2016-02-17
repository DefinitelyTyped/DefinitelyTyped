/// <reference path="poly2tri.d.ts" />

function initializeCDT(): poly2tri.SweepContext {
    var contour = [
        new poly2tri.Point(100, 100),
        new poly2tri.Point(100, 300),
        new poly2tri.Point(300, 300),
        new poly2tri.Point(300, 100)
    ];

    var swctx = new poly2tri.SweepContext(contour);
    return swctx;
}

function addHole() {
    var swctx = initializeCDT();
    var hole = [
        new poly2tri.Point(200, 200),
        new poly2tri.Point(200, 250),
        new poly2tri.Point(250, 250)
    ];
    swctx.addHole(hole);
}

function addHoles() {
    var swctx = initializeCDT();
    var hole1 = [
        new poly2tri.Point(200, 200),
        new poly2tri.Point(200, 250),
        new poly2tri.Point(250, 250)
    ];

    var hole2 = [
        new poly2tri.Point(110, 110),
        new poly2tri.Point(110, 120),
        new poly2tri.Point(120, 120)
    ];

    swctx.addHoles([hole1, hole2]);
}

function addPoint() {
    var swctx = initializeCDT();
    var point = new poly2tri.Point(150, 150);
    swctx.addPoint(point);
}

function addPoints() {
    var swctx = initializeCDT();
    var point1 = new poly2tri.Point(150, 150);
    var point2 = new poly2tri.Point(155, 155);
    swctx.addPoints([point1, point2]);
    swctx.addPoints([{x: 110, y: 120}]);
}

function triangulate() {
    var swctx = initializeCDT();
    swctx.triangulate();
    var triangles = swctx.getTriangles();

    triangles.forEach(t => {
        t.getPoints().forEach(p => {
            console.log(p.x, p.y);
        });
        var p1 = t.getPoint(0);
        var p2 = t.getPoint(1);
        var p3 = t.getPoint(2);
    });
}

function chaining() {
    var swctx = initializeCDT();

    var hole1 = [
        new poly2tri.Point(200, 200),
        new poly2tri.Point(200, 250),
        new poly2tri.Point(250, 250)
    ];

    var hole2 = [
        new poly2tri.Point(110, 110),
        new poly2tri.Point(110, 120),
        new poly2tri.Point(120, 120)
    ];

    var holes = [hole1, hole2];
    var point1 = new poly2tri.Point(150, 150);
    var point2 = new poly2tri.Point(155, 155);
    var points = [point1, point2, { x: 153, y: 153 }];

    var triangles = swctx.addHoles(holes).addPoints(points).triangulate().getTriangles();
}

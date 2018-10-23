

var point = new DOMPoint(5, 4);
var matrix = new DOMMatrix(2, 0, 0, 2, 10, 10);
var transformedPoint = point.matrixTransform(matrix);

var point = new DOMPoint(2, 0);
var quad1 = new DOMQuad(point, {x: 12, y: 0}, {x: 2, y: 10}, {x: 12, y: 10});

var rect = new DOMRect(2, 0, 10, 10);
var quad2 = new DOMQuad(rect);

new DOMQuad({x: 40, y: 25}, {x: 180, y: 8}, {x: 210, y: 150}, {x: 10, y: 180});

var matrix = new DOMMatrix();
matrix.scaleSelf(2);
matrix.translateSelf(20,20);

var matrix = new DOMMatrix();
matrix.translateSelf(20, 20);
matrix.scaleSelf(2);
matrix.translateSelf(-20, -20);

var matrix = new DOMMatrix();
matrix.translateSelf(20, 20).scaleSelf(2).translateSelf(-20, -20);

import { Vector,
  Matrix,
  Line,
  Plane,
  LinkedListNode,
  LinkedList,
  CircularLinkedList,
  Vertex,
  Polygon,
  LineSegment,
  PRECISION,
  mht,
  makeLookAt,
  makeOrtho,
  makePerspective,
  makeFrustum } from "sylvester-es6";

// Vector
const vector1 = new Vector([1, 2]);
const vector2 = new Vector(vector1);
const vectorI = Vector.i;
const vectorJ = Vector.j;
const vectorK = Vector.k;
const vectorZero = Vector.Zero(1);
const vectorE = vector2.e(1);
const vectorDimensions = vector2.dimensions();
const vectorModulus = vector2.modulus();
const vectorEql1 = vector2.eql(vector1);
const vectorEql2 = vector2.eql([1, 2]);
const vectorDup = vector2.dup();
const vectorMap = vector2.map((x, i) => x * i);
const vectorEach = vector2.map((x, i) => x + i);
const vectorToUnitVector = vector2.toUnitVector();
const vectorAngleFrom = vector2.angleFrom(vector1);
const vectorIsParallelTo = vector2.isParallelTo(vector1);
const vectorIsAntiparallelTo = vector2.isAntiparallelTo(vector1);
const vectorIsPerpendicularTo = vector2.isPerpendicularTo(vector1);
const vectorAdd1 = vector2.add(vector1);
const vectorAdd2 = vector2.add([1, 2]);
const vectorSubtract1 = vector2.subtract(vector1);
const vectorSubtract2 = vector2.subtract([1, 2]);
const vectorMultiply = vector2.multiply(2);
const vectorX = vector2.x(3);
const vectorDot1 = vector2.dot(vector1);
const vectorDot2 = vector2.dot(vector2);
const vectorCross1 = vector2.cross(vector1);
const vectorCross2 = vector2.cross(vector2);
const vectorMax = vector2.max();
const vectorIndexOf = vector2.indexOf(4);
const vectorToDiagonalMatrix = vector2.toDiagonalMatrix();
const vectorRound = vector2.round();
const vectorSnapTo = vector2.snapTo(5);
const vectorDistanceFrom1 = vector2.distanceFrom(vector1);
const vectorDistanceFrom2 = vector2.distanceFrom(new Line([1, 0], [0, 1]));
const vectorDistanceFrom3 = vector2.distanceFrom(new Plane([1, 0], [0, 1]));
const vectorLiesOn = vector2.liesOn(new Line([1, 0], [0, 1]));
const vectorLiesIn = vector2.liesIn(new Plane([1, 0], [0, 1]));
const vectorRotate1 = vector2.rotate(1, vector1);
const vectorRotate2 = vector2.rotate(1, new Line([1, 0], [0, 1]));
const vectorRotate3 = vector2.rotate(new Matrix([[1, 0], [0, 1]]), new Line([1, 0], [0, 1]));
const vectorReflectionIn1 = vector2.reflectionIn(vector1);
const vectorReflectionIn2 = vector2.reflectionIn(new Line([1, 0], [0, 1]));
const vectorReflectionIn3 = vector2.reflectionIn(new Plane([1, 0], [0, 1]));
const vectorTo3D = vector2.to3D();
const vectorInspect = vector2.inspect();
const vectorSetElements1 = vector2.setElements(vector1);
const vectorSetElements2 = vector2.setElements(vector2);

// Vertex
const vertex1 = new Vertex([1, 2]);
const vertex2 = new Vertex(vertex1);
const vertexI = Vertex.i;
const vertexJ = Vertex.j;
const vertexK = Vertex.k;
const vertexConvert1 = Vertex.convert([[1, 2], [2, 3]]);
const vertexConvert2 = Vertex.convert([vector1, vector2]);
const vertexZero = Vertex.Zero(1);
const vertexE = vertex2.e(1);
const vertexDimensions = vertex2.dimensions();
const vertexModulus = vertex2.modulus();
const vertexEql1 = vertex2.eql(vertex1);
const vertexEql2 = vertex2.eql([1, 2]);
const vertexDup = vertex2.dup();
const vertexMap = vertex2.map((x, i) => x * i);
const vertexEach = vertex2.map((x, i) => x + i);
const vertexToUnitvertex = vertex2.toUnitVector();
const vertexAngleFrom = vertex2.angleFrom(vertex1);
const vertexIsParallelTo = vertex2.isParallelTo(vertex1);
const vertexIsAntiparallelTo = vertex2.isAntiparallelTo(vertex1);
const vertexIsPerpendicularTo = vertex2.isPerpendicularTo(vertex1);
const vertexAdd1 = vertex2.add(vertex1);
const vertexAdd2 = vertex2.add([1, 2]);
const vertexSubtract1 = vertex2.subtract(vertex1);
const vertexSubtract2 = vertex2.subtract([1, 2]);
const vertexMultiply = vertex2.multiply(2);
const vertexX = vertex2.x(3);
const vertexDot1 = vertex2.dot(vertex1);
const vertexDot2 = vertex2.dot(vertex2);
const vertexCross1 = vertex2.cross(vertex1);
const vertexCross2 = vertex2.cross(vertex2);
const vertexMax = vertex2.max();
const vertexIndexOf = vertex2.indexOf(4);
const vertexToDiagonalMatrix = vertex2.toDiagonalMatrix();
const vertexRound = vertex2.round();
const vertexSnapTo = vertex2.snapTo(5);
const vertexDistanceFrom1 = vertex2.distanceFrom(vertex1);
const vertexDistanceFrom2 = vertex2.distanceFrom(new Line([1, 0], [0, 1]));
const vertexDistanceFrom3 = vertex2.distanceFrom(new Plane([1, 0], [0, 1]));
const vertexLiesOn = vertex2.liesOn(new Line([1, 0], [0, 1]));
const vertexLiesIn = vertex2.liesIn(new Plane([1, 0], [0, 1]));
const vertexRotate1 = vertex2.rotate(1, vertex1);
const vertexRotate2 = vertex2.rotate(1, new Line([1, 0], [0, 1]));
const vertexReflectionIn1 = vertex2.reflectionIn(vertex1);
const vertexReflectionIn2 = vertex2.reflectionIn(new Line([1, 0], [0, 1]));
const vertexReflectionIn3 = vertex2.reflectionIn(new Plane([1, 0], [0, 1]));
const vertexTo3D = vertex2.to3D();
const vertexInspect = vertex2.inspect();
const vertexSetElements1 = vertex2.setElements(vertex1);
const vertexSetElements2 = vertex2.setElements(vertex2);
const vertexIsConvex = vertex2.isConvex(new Polygon([[1, 2], [2, 3]], new Plane([1, 2], [1, 2])));
const vertexIsReflex = vertex2.isReflex(new Polygon([[1, 2], [2, 3]], new Plane([1, 2], [1, 2])));
const vertexType = vertex2.type(new Polygon([[1, 2], [2, 3]], new Plane([1, 2], [1, 2])));

// Matrix
const matrix1 = new Matrix([0, 1]);
const matrix2 = new Matrix([[1, 0], [0, 1]]);
const matrix3 = new Matrix(vector1);
const matrix4 = new Matrix(matrix2);
const matrixI = Matrix.I(1);
const matrixDiagonal1 = Matrix.Diagonal([0, 1]);
const matrixDiagonal2 = Matrix.Diagonal([[1, 0], [0, 1]]);
const matrixDiagonal3 = Matrix.Diagonal(vector1);
const matrixDiagonal4 = Matrix.Diagonal(matrix2);
const matrixRotation1 = Matrix.Rotation(1);
const matrixRotation2 = Matrix.Rotation(1, vector1);
const matrixRotationX = Matrix.RotationX(1);
const matrixRotationY = Matrix.RotationY(1);
const matrixRotationZ = Matrix.RotationZ(1);
const matrixRandom = Matrix.Random(1, 2);
const matrixZero = Matrix.Zero(1, 2);
const matrixElements = matrix2.elements;
const matrixE = matrix2.e(1, 2);
const matrixRow = matrix2.row(1);
const matrixCol = matrix2.col(2);
const matrixDimensions = matrix2.dimensions();
const matrixRows = matrix2.rows();
const matrixcols = matrix2.cols();
const matrixEql1 = matrix2.eql([0, 1]);
const matrixEql2 = matrix2.eql([[1, 0], [0, 1]]);
const matrixEql3 = matrix2.eql(vector1);
const matrixEql4 = matrix2.eql(matrix2);
const matrixDup = matrix2.dup();
const matrixMap = matrix2.map((x, i, j) => x * i * j);
const matrixIsSameSizeAs = matrix2.isSameSizeAs(matrix1);
const matrixAdd1 = matrix2.add(matrix1);
const matrixAdd2 = matrix2.add(vector1);
const matrixSubtract = matrix2.subtract(matrix1);
const matrixCanMultiplyFromLeft = matrix2.canMultiplyFromLeft(matrix1);
const matrixMultiply1 = matrix2.multiply(1);
const matrixMultiply2 = matrix2.multiply(matrix1);
const matrixMultiply = matrix2.multiply(vector1);
const matrixX1 = matrix2.x(1);
const matrixX2 = matrix2.x(matrix1);
const matrixX3 = matrix2.x(vector1);
const matrixMinor = matrix2.minor(1, 2, 3, 4);
const matrixTranspose = matrix2.transpose();
const matrixIsSquare = matrix2.isSquare();
const matrixMax = matrix2.max();
const matrixIndexOf = matrix2.indexOf(1);
const matrixDiagonal = matrix2.diagonal();
const matrixToRightTriangular = matrix2.toRightTriangular();
const matrixToUpperTriangular = matrix2.toUpperTriangular();
const matrixDeterminant = matrix2.determinant();
const matrixDet = matrix2.det();
const matrixIsSingular = matrix2.isSingular();
const matrixTrace = matrix2.trace();
const matrixTr = matrix2.tr();
const matrixRank = matrix2.rank();
const matrixRk = matrix2.rk();
const matrixAugment1 = matrix2.augment([0, 1]);
const matrixAugment2 = matrix2.augment([[1, 0], [0, 1]]);
const matrixAugment3 = matrix2.augment(vector1);
const matrixAugment4 = matrix2.augment(matrix2);
const matrixInverse = matrix2.inverse();
const matrixInv = matrix2.inv();
const matrixRound = matrix2.round();
const matrixSnapTo = matrix2.snapTo(1);
const matrixInspect = matrix2.inspect();
const matrixSetElements1 = matrix2.setElements([0, 1]);
const matrixSetElements2 = matrix2.setElements([[1, 0], [0, 1]]);
const matrixSetElements3 = matrix2.setElements(vector1);
const matrixSetElements4 = matrix2.setElements(matrix2);

// Line
const line1 = new Line([1, 0], [0, 1]);
const line2 = new Line(vector1, [0, 1]);
const line3 = new Line([1, 0], vector1);
const lineX = Line.X;
const lineY = Line.Y;
const lineZ = Line.Z;
const lineAnchor = line1.anchor;
const lineDirection = line1.direction;
const lineEql = line2.eql(line1);
const lineDup = line2.dup();
const lineTranslate1 = line2.translate(vector1);
const lineTranslate2 = line2.translate([1, 0]);
const lineIsParallelTo1 = line2.isParallelTo(line2);
const lineIsParallelTo2 = line2.isParallelTo(new Plane([1, 0], [0, 1]));
const lineDistanceFrom1 = line2.distanceFrom(vector1);
const lineDistanceFrom2 = line2.distanceFrom(line1);
const lineDistanceFrom3 = line2.distanceFrom(new Plane([1, 0], [0, 1]));
const lineContains = line2.contains(vector1);
const lineLiesIn = line2.liesIn(new Plane([1, 0], [0, 1]));
const lineIntersects1 = line2.intersects(line1);
const lineIntersects2 = line2.intersects(new Plane([1, 0], [0, 1]));
const lineIntersectionWith1 = line2.intersectionWith(line1);
const lineIntersectionWith2 = line2.intersectionWith(new Plane([1, 0], [0, 1]));
const linePointClosestTo1 = line2.pointClosestTo(vector1);
const linePointClosestTo2 = line2.pointClosestTo(line1);
const linePointClosestTo3 = line2.pointClosestTo([1, 0]);
const lineRotate1 = line2.rotate(1, vector1);
const lineRotate2 = line2.rotate(1, line1);
const lineReflectionIn1 = line2.reflectionIn(vector1);
const lineReflectionIn2 = line2.reflectionIn(line1);
const lineReflectionIn3 = line2.reflectionIn(new Plane([1, 0], [0, 1]));
const lineSetVectors1 = line2.setVectors([1, 0], [0, 1]);
const lineSetVectors2 = line2.setVectors(vector1, [0, 1]);
const lineSetVectors3 = line2.setVectors([1, 0], vector1);

// LineSegment
const lineSegment1 = new LineSegment([1, 0], [0, 1]);
const lineSegment2 = new LineSegment(vector1, [0, 1]);
const lineSegment3 = new LineSegment([1, 0], vector1);
const lineSegmentEql = lineSegment2.eql(lineSegment1);
const lineSegmentDup = lineSegment2.dup();
const lineSegmentLength = lineSegment2.length();
const lineSegmentToVector = lineSegment2.toVector();
const lineSegmentMidpoint = lineSegment2.midpoint();
const lineSegmentBisectingPlane = lineSegment2.bisectingPlane();
const lineSegmentTranslate1 = lineSegment2.translate(vector1);
const lineSegmentTranslate2 = lineSegment2.translate([1, 0]);
const lineSegmentIsParallelTo1 = lineSegment2.isParallelTo(line2);
const lineSegmentIsParallelTo2 = lineSegment2.isParallelTo(new Plane([1, 0], [0, 1]));
const lineSegmentDistanceFrom1 = lineSegment2.distanceFrom(vector1);
const lineSegmentDistanceFrom2 = lineSegment2.distanceFrom(line1);
const lineSegmentDistanceFrom3 = lineSegment2.distanceFrom(new Plane([1, 0], [0, 1]));
const lineSegmentContains1 = lineSegment2.contains(vector1);
const lineSegmentContains2 = lineSegment2.contains(line1);
const lineSegmentContains3 = lineSegment2.contains(new Plane([1, 0], [0, 1]));
const lineSegmentIntersects1 = lineSegment2.intersects(line1);
const lineSegmentIntersects2 = lineSegment2.intersects(new Plane([1, 0], [0, 1]));
const lineSegmentIntersectionWith1 = lineSegment2.intersectionWith(line1);
const lineSegmentIntersectionWith2 = lineSegment2.intersectionWith(new Plane([1, 0], [0, 1]));
const lineSegmentPointClosestTo1 = lineSegment2.pointClosestTo(vector1);
const lineSegmentPointClosestTo2 = lineSegment2.pointClosestTo(line1);
const lineSegmentPointClosestTo3 = lineSegment2.pointClosestTo([1, 0]);
const lineSegmentSetPoints1 = lineSegment2.setPoints([1, 2], [2, 1]);
const lineSegmentSetPoints2 = lineSegment2.setPoints(vector1, [2, 1]);
const lineSegmentSetPoints3 = lineSegment2.setPoints([1, 2], vector2);

// Plane
const plane1 = new Plane([1, 0], [0, 1]);
const plane2 = new Plane(vector1, [0, 1]);
const plane3 = new Plane([1, 0], vector1);
const plane4 = new Plane([1, 0], vector1, [0, 1]);
const plane5 = new Plane([1, 0], vector1, vector2);
const planeXY = Plane.XY;
const planeYZ = Plane.YZ;
const planeZX = Plane.ZX;
const planeYX = Plane.YX;
const planeFromPoints1 = Plane.fromPoints([[1, 2], [2, 3]]);
const planeFromPoints2 = Plane.fromPoints([vector1, vector2]);
const planeAnchor = plane1.anchor;
const planeNormal = plane1.normal;
const planeEql = plane2.eql(plane1);
const planeDup = plane2.dup();
const planeTranslate1 = plane2.translate(vector1);
const planeTranslate2 = plane2.translate([1, 0]);
const planeIsParallelTo1 = plane2.isParallelTo(line1);
const planeIsParallelTo2 = plane2.isParallelTo(plane1);
const planeIsPerpendicularTo = plane2.isPerpendicularTo(plane1);
const planeDistanceFrom1 = plane2.distanceFrom(vector1);
const planeDistanceFrom2 = plane2.distanceFrom(line1);
const planeDistanceFrom3 = plane2.distanceFrom(plane1);
const planeContains1 = plane2.contains(vector1);
const planeContains2 = plane2.contains(line1);
const planeIntersects1 = plane2.intersects(plane1);
const planeIntersects2 = plane2.intersects(line1);
const planeIntersectionWith1 = plane2.intersectionWith(line1);
const planeIntersectionWith2 = plane2.intersectionWith(plane1);
const planepointClosestTo1 = plane2.pointClosestTo(vector1);
const planepointClosestTo2 = plane2.pointClosestTo([1, 0]);
const planeRotate = plane2.rotate(1, line1);
const planeReflectionIn1 = plane2.reflectionIn(vector1);
const planeReflectionIn2 = plane2.reflectionIn(line1);
const planeReflectionIn3 = plane2.reflectionIn(plane1);
const planeSetVectors1 = plane2.setVectors([1, 0], [0, 1]);
const planeSetVectors2 = plane2.setVectors(vector1, [0, 1]);
const planeSetVectors3 = plane2.setVectors([1, 0], vector1);
const planeSetVectors4 = plane2.setVectors([1, 0], vector1, [0, 1]);
const planeSetVectors5 = plane2.setVectors([1, 0], vector1, vector2);

// LinkedListNode
const linkedListNode1 = new LinkedListNode(1);
const prev = linkedListNode1.prev;
const next = linkedListNode1.next;
const data = linkedListNode1.data;

// LinkedList
const linkedList1 = new LinkedList();
const linkedListNode2 = LinkedList.Node(2);
const linkedListCircular2 = LinkedList.Circular(2);
const linkedListLength = linkedList1.length;
const linkedListFirst = linkedList1.first;
const linkedListLast = linkedList1.last;
linkedList1.forEach((node, i) => node.data + i, linkedList1);
linkedList1.each((node, i) => node.data + i, linkedList1);
const linkedListAt = linkedList1.at(1);
const linkedListRandomNode = linkedList1.randomNode();
const linkedListToArray = linkedList1.toArray();

// CircularLinkedList
const circularLinkedList1 = new CircularLinkedList();
const circularLinkedList2 = CircularLinkedList.fromArray([1, 2, 3], false);
const circularLinkedListNode2 = CircularLinkedList.Node(2);
const circularLinkedListLength = circularLinkedList1.length;
const circularLinkedListFirst = circularLinkedList1.first;
const circularLinkedListLast = circularLinkedList1.last;
circularLinkedList1.forEach((node, i) => node.data + i, circularLinkedList1);
circularLinkedList1.each((node, i) => node.data + i, circularLinkedList1);
const circularLinkedListAt = circularLinkedList1.at(1);
const circularLinkedListRandomNode = circularLinkedList1.randomNode();
const circularLinkedListToArray = circularLinkedList1.toArray();
circularLinkedList1.append(linkedListNode1);
circularLinkedList1.prepend(linkedListNode1);
circularLinkedList1.insertBefore(linkedListNode1, linkedListNode2);
circularLinkedList1.insertAfter(linkedListNode1, linkedListNode2);
circularLinkedList1.remove(linkedListNode1);
const circularLinkedListWithData = circularLinkedList1.withData(1);

// Polygon
const polygon1 = new Polygon([[1, 2], [2, 2]], plane1);
const polygon2 = new Polygon([vector1, vector2], plane1);
const polygonVertices = polygon1.vertices;
const polygonV = polygon2.v(1);
const polygonNodeFor = polygon2.nodeFor(123);
const polygonDup = polygon2.dup();
const polygonTranslate1 = polygon2.translate([1, 2]);
const polygonTranslate2 = polygon2.translate(vector1);
const polygonRotate1 = polygon2.rotate(1, line1);
const polygonScale = polygon2.scale(1, [1, 2]);
polygon2.updateTrianglePlanes((plane) => plane);
const polygonIsTriangle = polygon2.isTriangle();
const polygonTrianglesForSurfaceIntegral = polygon2.trianglesForSurfaceIntegral();
const polygonArea = polygon2.area();
const polygonCentroid = polygon2.centroid();
const polygonProjectionOn = polygon2.projectionOn(plane1);
const polygonRemoveVertex = polygon2.removeVertex(123);
const polygonContains1 = polygon2.contains([1, 2]);
const polygonContains2 = polygon2.contains(vector1);
const polygonContainsByWindingNumber1 = polygon2.containsByWindingNumber([1, 2]);
const polygonContainsByWindingNumber2 = polygon2.containsByWindingNumber(vector1);
const polygonHasEdgeContaining1 = polygon2.hasEdgeContaining([1, 2]);
const polygonHasEdgeContaining2 = polygon2.hasEdgeContaining(vector1);
const polygonToTriangles = polygon2.toTriangles();
const polygonTriangulateByEarClipping = polygon2.triangulateByEarClipping();
const polygonSetVertices1 = polygon2.setVertices([[1, 2], [2, 2]], plane1);
const polygonSetVertices2 = polygon2.setVertices([vector1, vector2], plane1);
polygon2.populateVertexTypeLists();
polygon2.copyVertices();
polygon2.clearCache();
polygon2.setCache('a', 1);
const polygonInspect = polygon2.inspect();

// PRECISION
const precision = PRECISION;

// glUtils
const mht1 = mht(matrix1);
const makeLookAt1 = makeLookAt(1, 2, 3, 4, 5, 6, 7, 8, 9);
const makeOrtho1 = makeOrtho(1, 2, 3, 4, 5, 6);
const makePerspective1 = makePerspective(1, 2, 3, 4);
const makeFrustum1 = makeFrustum(1, 2, 3, 4, 5, 6);

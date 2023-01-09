import * as jsts from 'jsts';

var str: string;
var n: number;
var bool: boolean;
var obj: any;

var c: jsts.geom.Coordinate = new jsts.geom.Coordinate(n, n);
var e: jsts.geom.Envelope = new jsts.geom.Envelope(n, n, n, n);
var g: jsts.geom.Geometry = new jsts.geom.Geometry();
var lr: jsts.geom.LinearRing = new jsts.geom.LinearRing([c]);
var ls: jsts.geom.LineString = new jsts.geom.LineString([c]);
var p: jsts.geom.Point = new jsts.geom.Point(c);
var poly: jsts.geom.Polygon = new jsts.geom.Polygon(lr);
var precisionModel = new jsts.geom.PrecisionModel();
var factory = new jsts.geom.GeometryFactory(precisionModel);
var wktWriter = new jsts.io.WKTWriter(factory);
var multiPoly: jsts.geom.MultiPolygon = new jsts.geom.MultiPolygon([poly], factory);
var multiPoint: jsts.geom.MultiPoint = new jsts.geom.MultiPoint([p], factory);
var multiLs: jsts.geom.MultiLineString = new jsts.geom.MultiLineString([ls], factory);
var geomCollection: jsts.geom.GeometryCollection = new jsts.geom.GeometryCollection([p, ls], factory);
const o: jsts.algorithm.Orientation = new jsts.algorithm.Orientation();
const bnr: jsts.algorithm.BoundaryNodeRule = new jsts.algorithm.BoundaryNodeRule();

let im0: jsts.geom.IntersectionMatrix = new jsts.geom.IntersectionMatrix();
const im1: jsts.geom.IntersectionMatrix = new jsts.geom.IntersectionMatrix(['1', '2']);
const im2: jsts.geom.IntersectionMatrix = new jsts.geom.IntersectionMatrix(im0);

let at0: jsts.geom.util.AffineTransformation = new jsts.geom.util.AffineTransformation(n, n, n, n, n, n);
const at1: jsts.geom.util.AffineTransformation = new jsts.geom.util.AffineTransformation(c, c, c, c, c, c);
const at2: jsts.geom.util.AffineTransformation = new jsts.geom.util.AffineTransformation(at0);
let seq: jsts.geom.CoordinateSequence = new jsts.geom.CoordinateSequence();

const ggo0: jsts.operation.GeometryGraphOperation = new jsts.operation.GeometryGraphOperation(g);
const ggo1: jsts.operation.GeometryGraphOperation = new jsts.operation.GeometryGraphOperation(g, g);
const ggo2: jsts.operation.GeometryGraphOperation = new jsts.operation.GeometryGraphOperation(g, g, bnr);

const ro0: jsts.operation.relate.RelateOp = new jsts.operation.relate.RelateOp(g, g);
const ro1: jsts.operation.relate.RelateOp = new jsts.operation.relate.RelateOp(g, g, bnr);

str = jsts.version;

c = new jsts.geom.Coordinate(c);
c = c.clone();
n = c.compareTo(c);
n = c.distance(c);
bool = c.equals(c);
bool = c.equals2D(c);
c.setCoordinate(c);
n = c.x;
n = c.y;
n = c.z;

e = new jsts.geom.Envelope(c);
e = new jsts.geom.Envelope(e);
e = new jsts.geom.Envelope(c, c);
c = e.centre();
e = e.clone();
bool = e.contains(e);
bool = e.contains(c);
bool = e.contains(n, n);
bool = e.covers(c);
bool = e.covers(e);
bool = e.covers(n, n);
n = e.distance(e);
bool = e.equals(e);
e.expandBy(n);
e.expandToInclude(c);
e.expandToInclude(e);
e.expandToInclude(n, n);
n = e.getArea();
n = e.getHeight();
n = e.getMaxX();
n = e.getMaxY();
n = e.getMinX();
n = e.getMinY();
n = e.getWidth();
e = e.intersection(e);
bool = e.intersects(e);
bool = e.intersects(c);
bool = e.intersects(n, n);
bool = e.isNull();
n = e.maxx;
n = e.maxy;
n = e.minx;
n = e.miny;
e.setToNull();
str = e.toString();
e.translate(n, n);

g.apply({filter: Geometry => {}});
g = g.buffer(n);
g = g.buffer(n, n);
g = g.buffer(n, n, n);
if (g instanceof jsts.geom.Polygon) {
  poly = g;
} else {
  multiPoly = g;
}
g.checkNotGeometryCollection(g);
g = g.clone();
n = g.compare([{}], [{}]);
n = g.compareTo(g);
n = g.compareToSameClass(g);
e = g.computeEnvelopeInternal();
bool = g.contains(g);
g = g.convexHull();
bool = g.coveredBy(g);
bool = g.covers(g);
bool = g.crosses(g);
g = g.difference(g);
bool = g.disjoint(g);
n = g.distance(g);
e = g.envelope;
bool = g.equal(c, c, n);
bool = g.equals(g);
bool = g.equalsExact(g, n);
bool = g.equalsNorm(g);
bool = g.equalsTopo(g);
n = g.getArea();
g = g.getBoundary();
n = g.getBoundaryDimension();
p = g.getCentroid();
c = g.getCoordinate();
var coords: jsts.geom.Coordinate[] = g.getCoordinates();
n = g.getDimension();
g = g.getEnvelope();
e = g.getEnvelopeInternal();
obj = g.getFactory();
g = g.getGeometryN(n);
str = g.getGeometryType();
p = g.getInteriorPoint();
n = g.getLength();
n = g.getNumGeometries();
n = g.getNumPoints();
obj = g.getPrecisionModel();
g = g.intersection(g);
bool = g.intersects(g);
bool = g.isEmpty();
bool = g.isEquivalentClass(g);
bool = g.isGeometryCollection();
bool = g.isGeometryCollectionBase();
bool = g.isRectangle();
bool = g.isSimple();
bool = g.isValid();
bool = g.isWithinDistance(g, n);
g = g.norm();
g.normalize();
bool = g.overlaps(g);
bool = g.relate(g, str);
obj = g.relate2(g);
g = g.symDifference(g);
str = g.toString();
bool = g.touches(g);
g = g.union(g);
bool = g.within(g);
n = g.hashCode();

c = ls.getCoordinateN(n);
p = ls.getEndPoint();
p = ls.getPointN(n);
p = ls.getStartPoint();
n = ls.distance(p);
n = ls.distance(ls);
bool = ls.isClosed();
bool = ls.isRing();

bool = multiLs.equalsExact(g, n);
g = multiLs.getBoundary();
n = multiLs.getBoundaryDimension();
n = multiLs.getDimension();
str = multiLs.getGeometryType();
bool = multiLs.isClosed();

n = p.getX();
n = p.getY();
p = p.reverse();

bool = multiPoint.equalsExact(g, n);
g = multiPoint.getBoundary();
n = multiPoint.getBoundaryDimension();
n = multiPoint.getDimension();
str = multiPoint.getGeometryType();
bool = multiPoint.isValid();

lr = poly.getExteriorRing();
lr = poly.getInteriorRingN(n);
n = poly.getNumInteriorRing();

var gjw: jsts.io.GeoJSONWriter = new jsts.io.GeoJSONWriter();
obj = gjw.write(g);

var gjr: jsts.io.GeoJSONReader = new jsts.io.GeoJSONReader(factory);
g = gjr.read(obj);

var wr: jsts.io.WKTReader = new jsts.io.WKTReader();
g = wr.read(str);
wr.reducePrecision(g);

var wkt = wktWriter.write(ls);

n = jsts.algorithm.Orientation.index(p, p, p);
bool = jsts.algorithm.Orientation.isCCW([c]);

bool = jsts.geom.IntersectionMatrix.matches(n, str);
bool = jsts.geom.IntersectionMatrix.matches(str, str);
bool = jsts.geom.IntersectionMatrix.isTrue(n);
bool = im0.isIntersects();
bool = im0.isCovers();
bool = im0.isCoveredBy();
im0.set([str, str, str]);
im0.set(n, n, n);
bool = im0.isContains();
im0.setAtLeast([str, str, str]);
im0.setAtLeast(n, n, n);
im0.setAtLeastIfValid(n, n, n);
bool = im0.isWithin();
bool = im0.isTouches(n, n);
bool = im0.isOverlaps(n, n);
bool = im0.isEquals(n, n);
str = im0.toString();
im0.setAll(n);
n = im0.get(n, n);
im0 = im0.transpose();
bool = im0.matches([str, str, str, str, str, str ,str, str, str]);
im0.add(im1);
bool = im0.isDisjoint();
bool = im0.isCrosses(n, n);

at0 = jsts.geom.util.AffineTransformation.translationInstance(n, n);
at0 = jsts.geom.util.AffineTransformation.shearInstance(n, n);
at0 = jsts.geom.util.AffineTransformation.reflectionInstance(n, n, n, n);
at0 = jsts.geom.util.AffineTransformation.rotationInstance(n);
at0 = jsts.geom.util.AffineTransformation.reflectionInstance(n, n);
at0 = jsts.geom.util.AffineTransformation.reflectionInstance(n, n, n);
at0 = jsts.geom.util.AffineTransformation.reflectionInstance(n, n, n, n);
at0 = jsts.geom.util.AffineTransformation.scaleInstance(n, n, n, n);
at0 = at0.setToReflectionBasic(n, n, n, n);
at0 = at0.getInverse();
at0 = at0.compose(at1);
bool = at0.equals(at1);
at0 = at0.setToScale(n, n);
bool = at0.isIdentity();
at0 = at1.setToIdentity();
bool = at0.isGeometryChanged();
at0 = at0.setTransformation(at1);
at0 = at0.setTransformation(n, n, n, n, n, n);
at0 = at0.setToRotation(n);
at0 = at0.setToRotation(n, n);
at0 = at0.setToRotation(n, n, n);
at0 = at0.setToRotation(n, n, n, n);
const nArray: [number, number, number, number, number, number] = at0.getMatrixEntries();
at0.filter(seq, n);
at0 = at0.rotate(n);
at0 = at0.rotate(n, n);
at0 = at0.rotate(n, n, n);
at0 = at0.rotate(n, n, n, n);
n = at0.getDeterminant();
at0 = at0.composeBefore(at1);
at0 = at0.setToShear(n, n);
bool = at0.isDone();
at0 = at0.clone();
at0 = at0.translate(n, n);
at0 = at0.setToReflection(n, n);
at0 = at0.setToReflection(n, n, n, n);
str = at0.toString();
at0 = at0.setToTranslation(n, n);
at0 = at0.shear(n, n);
p = at0.transform(p);
c = at0.transform(c, c);
at0.transform(seq, n);
at0 = at0.reflect(n, n);
at0 = at0.reflect(n, n, n, n);

g = ggo0.getArgGeometry(n);
ggo0.setComputationPrecision(precisionModel);

bool = jsts.operation.relate.RelateOp.covers(g, g);
bool = jsts.operation.relate.RelateOp.intersects(g, g);
bool = jsts.operation.relate.RelateOp.touches(g, g);
bool = jsts.operation.relate.RelateOp.equalsTopo(g, g);
im0 = jsts.operation.relate.RelateOp.relate(g, g);
im0 = jsts.operation.relate.RelateOp.relate(g, g, bnr);
bool = jsts.operation.relate.RelateOp.overlaps(g, g);
bool = jsts.operation.relate.RelateOp.crosses(g, g);
bool = jsts.operation.relate.RelateOp.contains(g, g);
im0 = ro0.getIntersectionMatrix();

var pr = new jsts.precision.GeometryPrecisionReducer(precisionModel);
g = pr.reduce(g);
g = jsts.precision.GeometryPrecisionReducer.reduce(g, precisionModel);
g = jsts.precision.GeometryPrecisionReducer.reducePointwise(g, precisionModel);
pr.setChangePrecisionModel(bool);
pr.setPointwise(bool);
pr.setRemoveCollapsedComponents(bool);

var gl: jsts.operation.distance.GeometryLocation = new jsts.operation.distance.GeometryLocation(g, n, c);
gl = new jsts.operation.distance.GeometryLocation(g, c);
g = gl.getGeometryComponent();
n = gl.getSegmentIndex();
c = gl.getCoordinate();
bool = gl.isInsideArea();
str = gl.toString();

var dop: jsts.operation.distance.DistanceOp = new jsts.operation.distance.DistanceOp(g, g);
dop = new jsts.operation.distance.DistanceOp(g, g, n);
n = dop.distance();
[c, c] = dop.nearestPoints();
[gl, gl] = dop.nearestLocations();
n = jsts.operation.distance.DistanceOp.distance(g, g);
bool = jsts.operation.distance.DistanceOp.isWithinDistance(g, g, n);
[c, c] = jsts.operation.distance.DistanceOp.nearestPoints(g, g);

var ch: jsts.algorithm.ConvexHull = new jsts.algorithm.ConvexHull(g);
ch = new jsts.algorithm.ConvexHull([c], factory);
g = ch.getConvexHull();

var ipa: jsts.algorithm.InteriorPointArea = new jsts.algorithm.InteriorPointArea(g);
c = ipa.getInteriorPoint();
c = jsts.algorithm.InteriorPointArea.getInteriorPoint(g);

var densifier: jsts.densify.Densifier = new jsts.densify.Densifier(g);
densifier.setDistanceTolerance(n);
g = densifier.getResultGeometry();
g = jsts.densify.Densifier.densify(g, n);

var li = new jsts.algorithm.LineIntersector();
n = jsts.algorithm.LineIntersector.computeEdgeDistance(c, c, c);
n = jsts.algorithm.LineIntersector.nonRobustComputeEdgeDistance(c, c, c);
li.setPrecisionModel(precisionModel);
c = li.getEndpoint(n, n);
li.computeIntersection(c, c, c, c);
str = li.toString();
bool = li.hasIntersection();
n = li.getIntersectionNum();
c = li.getIntersection(n);
bool = li.isIntersection(c);
bool = li.isInteriorIntersection(n);
bool = li.isProper();
c = li.getIntersectionAlongSegment(n, n);
n = li.getIndexAlongSegment(n, n);
n = li.getEdgeDistance(n, n);

var rli = new jsts.algorithm.RobustLineIntersector();
rli.computeIntersection(c, c, c);
rli.computeIntersection(c, c, c, c);

var tps: jsts.simplify.TopologyPreservingSimplifier = new jsts.simplify.TopologyPreservingSimplifier(g);
tps.setDistanceTolerance(n);
g = tps.getResultGeometry();
g = jsts.simplify.TopologyPreservingSimplifier.simplify(g, n);

var spial = new jsts.algorithm.locate.SimplePointInAreaLocator(g);
n = spial.locate(c);
n = jsts.algorithm.locate.SimplePointInAreaLocator.locate(c, g);
bool = jsts.algorithm.locate.SimplePointInAreaLocator.isContained(c, g);
n = jsts.algorithm.locate.SimplePointInAreaLocator.locatePointInPolygon(c, poly);
bool = jsts.algorithm.locate.SimplePointInAreaLocator.containsPointInPolygon(c, poly);

p = factory.createPointFromInternalCoord(c, g);
g = factory.toGeometry(e);
precisionModel = factory.getPrecisionModel();
ls = factory.createLineString();
ls = factory.createLineString([c]);
ls = factory.createLineString(seq);
p = factory.createPoint();
p = factory.createPoint(c);
p = factory.createPoint(seq);
multiPoint = factory.createMultiPoint();
multiPoint = factory.createMultiPoint([p]);
multiPoint = factory.createMultiPoint(seq);
multiPoint = factory.createMultiPointFromCoords([c]);
lr = factory.createLinearRing();
lr = factory.createLinearRing([c]);
lr = factory.createLinearRing(seq);
poly = factory.createPolygon();
poly = factory.createPolygon(lr, [lr]);
poly = factory.createPolygon(seq);
poly = factory.createPolygon([c]);
poly = factory.createPolygon(lr);
multiPoly = factory.createMultiPolygon();
multiPoly = factory.createMultiPolygon([poly]);
multiLs = factory.createMultiLineString();
multiLs = factory.createMultiLineString([ls]);
geomCollection = factory.createGeometryCollection();
geomCollection = factory.createGeometryCollection([p, ls]);
g = factory.createEmpty(n);
g = factory.createGeometry(g);
n = factory.getSRID();

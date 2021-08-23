interface IAny {
    a: any;
}

var obj: IAny;
var n: number = 0;
var bool: boolean = false;
var str: string = '';

var l: Line = Line.create(v, v);
var m: Matrix = Matrix.create(v);
var p: Plane = Plane.create(v, v);
var v: Vector = Vector.create([n, n]);

l = $L(v, v);
l = $L([n], [n]);
l = Line.create([n], [n]);

l = Line.X;
l = Line.Y;
l = Line.Z;

v = l.anchor;
bool = l.contains(v);
v = l.direction;
n = l.distanceFrom(l);
n = l.distanceFrom(v);
n = l.distanceFrom(p);
l = l.dup();
bool = l.eql(l);
v = l.intersectionWith(l);
v = l.intersectionWith(p);
bool = l.intersects(l);
bool = l.intersects(p);
bool = l.isParallelTo(l);
bool = l.isParallelTo(p);
bool = l.liesIn(p);
v = l.pointClosestTo(l);
v = l.pointClosestTo(v);
l = l.reflectionIn(l);
l = l.reflectionIn(p);
l = l.reflectionIn(v);
l = l.rotate(n, l);
l = l.rotate(n, v);
l = l.setVectors([n, n], v);
l = l.setVectors(v, [n, n]);
l = l.translate(v);
l = l.translate([n, n]);

m = $M(m);
m = $M([n]);
m = $M([[n]]);
m = $M(v);
m = Matrix.create(m);
m = Matrix.create([n]);
m = Matrix.create([[n]]);
m = Matrix.create(v);

m = Matrix.Diagonal(m);
m = Matrix.Diagonal([n]);
m = Matrix.Diagonal([[n]]);
m = Matrix.Diagonal(v);
m = Matrix.I(n);
m = Matrix.Random(n, n);
m = Matrix.Rotation(n);
m = Matrix.Rotation(n, v);
m = Matrix.RotationX(n);
m = Matrix.RotationY(n);
m = Matrix.RotationZ(n);
m = Matrix.Zero(n, n);
m = m.add(m);
m = m.augment(m);
m = m.augment(v);
bool = m.canMultiplyFromLeft(m);
v = m.col(n);
n = m.cols();
n = m.det();
n = m.determinant();
v = m.diagonal();
obj = m.dimensions();
m = m.dup();
v = m.e(n, n);
var element: number[][] = m.elements;
bool = m.eql(m);
bool = m.eql(v);
obj = m.indexOf(n);
str = m.inspect();
m = m.inv();
m = m.inverse();
bool = m.isSameSizeAs(m);
bool = m.isSingular();
bool = m.isSquare();

m = m.map((x, i, j) => {
    n = x;
    n = i;
    n = j;
});

n = m.max();
m = m.minor(n, n, n, n);
m = m.multiply(n);
m = m.multiply(m);
v = m.multiply(v);
n = m.rank();
n = m.rk();
m = m.round();
v = m.row(n);
n = m.rows();
m = m.setElements(m);
m = m.setElements([n, n]);
m = m.setElements([[n, n]]);
m = m.setElements(v);
m = m.snapTo(n);
m = m.subtract(m);
m = m.toRightTriangular();
m = m.toUpperTriangular();
n = m.tr();
n = m.trace();
m = m.transpose();
m = m.x(m);
m = m.x(n);
v = m.x(v);

p = $P([n], [n]);
p = $P(v, v);
p = Plane.create([0], [0]);

p = Plane.XY;
p = Plane.YX;
p = Plane.YZ;
p = Plane.ZX;

v = p.anchor;
bool = p.contains(v);
bool = p.contains(l);
n = p.distanceFrom(p);
n = p.distanceFrom(v);
n = p.distanceFrom(l);
p = p.dup();
bool = p.eql(p);
v = p.intersectionWith(l);
l = p.intersectionWith(p);
bool = p.intersects(p);
bool = p.intersects(l);
bool = p.isParallelTo(p);
bool = p.isParallelTo(l);
bool = p.isPerpendicularTo(p);
v = p.normal;
v = p.pointClosestTo(v);
p = p.reflectionIn(p);
p = p.reflectionIn(v);
p = p.reflectionIn(l);
p = p.rotate(n, l);
p = p.setVectors([n], [n]);
p = p.setVectors(v, v);
p = p.setVectors([n], [n], [n]);
p = p.setVectors(v, v, v);
p = p.translate([n]);
p = p.translate(v);

v = $V(v);
v = $V([n]);
v = Vector.create(v);

v = Vector.i;
v = Vector.j;
v = Vector.k;

v = Vector.Random(n);
v = Vector.Zero(n);
v = v.add(v);
v = v.add([n, n]);
n = v.angleFrom(v);
v = v.cross(v);
v = v.cross([n, n]);
n = v.dimensions();
n = v.distanceFrom(v);
n = v.distanceFrom(l);
n = v.distanceFrom(p);
n = v.dot(v);
n = v.dot([n, n]);
v = v.dup();
n = v.e(n);

v.each((x, i) => {
    n = x;
    n = i;
});

var elements: number[] = v.elements;
bool = v.eql(v);
bool = v.eql([n, n]);
n = v.indexOf(n);
str = v.inspect();
bool = v.isAntiparallelTo(v);
bool = v.isParallelTo(v);
bool = v.isPerpendicularTo(v);
bool = v.liesIn(p);
bool = v.liesOn(l);

v = v.map((x, i) => {
    n = x;
    n = i;
});

n = v.max();
n = v.modulus();
v = v.multiply(n);
v = v.reflectionIn(v);
v = v.reflectionIn(l);
v = v.reflectionIn(p);
v = v.rotate(n, v);
v = v.rotate(n, l);
v = v.rotate(m, l);
v = v.round();
v = v.setElements(v);
v = v.setElements([n, n]);
v = v.snapTo(n);
v = v.subtract(v);
v = v.to3D();
m = v.toDiagonalMatrix();
v = v.toUnitVector();
v = v.x(n);

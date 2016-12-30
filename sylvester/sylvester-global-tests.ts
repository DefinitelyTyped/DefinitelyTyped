let n: number = 0;
let v: Vector = Vector.create([n, n]);
let m: Matrix = Matrix.create(v);
let l: Line = $L(v, v);

l = $L([n], [n]);

m = $M(m);
m = $M([n]);
m = $M([[n]]);
m = $M(v);

let p: Plane = $P([n], [n]);
p = $P(v, v);

v = $V(v);
v = $V([n]);

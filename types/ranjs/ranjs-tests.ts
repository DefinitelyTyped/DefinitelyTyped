import { core, dist, la, mc, test, ts } from 'ranjs';

type Eq<T, U> = T extends U ? (U extends T ? true : false) : false;

let b: boolean;
let s: string;
let ss: string[];
let u: undefined;
let x: number;
let xs: number[];
let xss: number[][];

core.seed(0xfffff);
core.seed('hello');
x = core.int(100);
x = core.int(-100, 100);
xs = core.int(-100, 100, 100);
x = core.float(100);
x = core.float(-100, 100);
xs = core.float(-100, 100, 100);
u = core.choice();
x = core.choice([1, 2, 3]);
s = core.choice(['1', '2', '3']);
xs = core.choice([1, 2, 3], 3);
u = core.char();
s = core.char('hello');
ss = core.char('hello', 10);
x = core.coin(0, 1);
s = core.coin('y', 'n');
x = core.coin(0, 1, 0.5 + 1e-7);
xs = core.coin(0, 1, 0.5, 100);
xs = core.shuffle([1, 2, 3]);
ss = core.shuffle(['1', '2', '3']);

let normal = new dist.Normal();
b = normal.type() === 'continuous';
b = normal.support().length === 0;
normal = normal.seed(0xfffff); // though Distribution.seed mutates itself
const distState = normal.save();
normal = new dist.Normal().load(distState);
// new dist.Exponential().load(distState); // type error!
const canMisuse: Eq<typeof distState, dist.State<'Exponential'>> = false;
x = normal.sample();
xs = normal.sample(100);
x = normal.pdf(x);
x = normal.cdf(x);
x = normal.q(x) || 1;
x = normal.survival(x);
x = normal.hazard(x);
x = normal.cHazard(x);
x = normal.logPdf(x);
x = normal.lnL(xs);
x = normal.aic(xs);
x = normal.bic(xs);
const testResult = normal.test(xs);
x = testResult.statistics;
b = testResult.passed;

let vec = new la.Vector();
vec = new la.Vector([1, 2, 3]);
vec = new la.Vector(vec);
xs = vec.v();
x = vec.i(0);
vec.i(x, x);
vec = vec
    .f(x => normal.pdf(x))
    .scale(10)
    .add(new la.Vector([4, 5, 6]));
x = vec.dot(vec);
let mat = new la.Matrix();
mat = new la.Matrix([[1, 2], [3, 4]]);
mat = new la.Matrix(mat);
xss = mat.m();
x = mat.ij(0, 0);
mat.ij(x, x, x);
mat = mat
    .f(x => normal.pdf(x))
    .scale(0.1)
    .add(new la.Matrix([[5, 6], [7, 8]]))
    .mult(mat)
    .t();
vec = mat.act(vec);
const ldl = mat.ldl();
mat = ldl.D;
mat = ldl.L;

declare const logDensity: (x: number[]) => number;
const rwmConfig = { dim: 1, maxHistory: 1e4 };
let rwm = new mc.RWM(logDensity, rwmConfig);
rwm = new mc.RWM(logDensity, rwmConfig, rwm.state());
rwm.warmUp(p => (x = p), 1000);
const iterRes = rwm.iterate((x, ac) => {
    xs = x;
    b = ac;
}, false);
xs = iterRes.x;
b = iterRes.accepted;
const rwmStats = rwm.statistics();
xs = rwmStats.map(stat => stat.mean);
xs = rwmStats.map(stat => stat.cv);
xs = rwmStats.map(stat => stat.std);
x = rwm.ar();
xs = rwm.ac();
xss = rwm.sample(p => (x = p), 1000);
xss = mc.gr(new Array(10).fill(null).map(() => rwm.sample()), 1000);

const testRes1 = test.bartlett(xss, 0.1);
x = testRes1.chi2;
b = testRes1.passed;
const testRes2 = test.mannWhitney(xss, 0.1);
x = testRes2.U;
b = testRes2.passed;

const cov = new ts.Cov(1);
cov.reset();
cov.update(xs);
mat = cov.compute();
const ac = new ts.AC(1, 100, 1e4);
ac.reset();
ac.update(xs);
xss = ac.compute();

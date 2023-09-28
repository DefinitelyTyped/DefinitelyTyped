import Complex, { ComplexLike } from "complex.js";

Complex.ZERO;
Complex.PI;
Complex.E;
Complex.I;
Complex.INFINITY;
Complex.EPSILON;
Complex.ONE;
Complex.NAN;

const complexLikes: ComplexLike[] = [
    [1, 0],
    Complex.I,
    "99.3+8i",
    56,
    { re: 0, im: 1 },
    { arg: 1.5, abs: 5 },
    { phi: 0.8, r: 1 },
];

complexLikes.forEach(c => {
    const z1 = new Complex(c);

    const z = new Complex(1, 0);
    z.add(c);
    z.mul(c);
    z.equals(c);
    z.pow(c);
    z.div(c);
    z.sub(c);
});
new Complex(1, 0);
new Complex(1, 0).abs();
new Complex(1, 0).acos();
new Complex(1, 0).acot();
new Complex(1, 0).acoth();
new Complex(1, 0).acsc();
new Complex(1, 0).acsch();
new Complex(1, 0).add(1, 2);
new Complex(1, 0).arg();
new Complex(1, 0).asec();
new Complex(1, 0).asech();
new Complex(1, 0).asin();
new Complex(1, 0).asinh();
new Complex(1, 0).atan();
new Complex(1, 0).atanh();
new Complex(1, 0).ceil();
new Complex(1, 0).ceil(5);
new Complex(1, 0).clone();
new Complex(1, 0).conjugate();
new Complex(1, 0).cos();
new Complex(1, 0).cosh();
new Complex(1, 0).cot();
new Complex(1, 0).coth();
new Complex(1, 0).csc();
new Complex(1, 0).csch();
new Complex(1, 0).div(3, 1);
new Complex(1, 0).equals(5, 3);
new Complex(1, 0).exp();
new Complex(1, 0).floor();
new Complex(1, 0).floor(6);
new Complex(1, 0).inverse();
new Complex(1, 0).isFinite();
new Complex(1, 0).isInfinite();
new Complex(1, 0).isNaN();
new Complex(1, 0).isZero();
new Complex(1, 0).log();
new Complex(1, 0).mul(3, 1);
new Complex(1, 0).neg();
new Complex(1, 0).pow(1, 2);
new Complex(1, 0).round();
new Complex(1, 0).round(3);
new Complex(1, 0).sec();
new Complex(1, 0).sech();
new Complex(1, 0).sign();
new Complex(1, 0).sin();
new Complex(1, 0).sinh();
new Complex(1, 0).sqrt();
new Complex(1, 0).sub(5, 1);
new Complex(1, 0).tan();
new Complex(1, 0).tanh();
new Complex(1, 0).toString();
new Complex(1, 0).toVector();
new Complex(1, 0).valueOf();

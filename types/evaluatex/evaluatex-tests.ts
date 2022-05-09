import evaluatex from 'evaluatex';

const fn = evaluatex('sqrt(3^2 + 4^2) + log(PI) / log(SQRT2)', {}, {});

fn();

const fn2 = evaluatex('100 + x + HALF_PI', { HALF_PI: 1.57 });

fn2({ x: 50, HALF_PI: 1000 });

const fn3 = evaluatex('\\frac 1{20}3', {}, { latex: true });

fn3();

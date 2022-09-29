import evaluatex = require('evaluatex');

const fn = evaluatex('sqrt(3^2 + 4^2) + log(PI) / log(SQRT2)', {}, {});

fn();

const fn2 = evaluatex('100 + x + HALF_PI', { HALF_PI: 1.57 });

fn2({ x: 50, HALF_PI: 1000 });

const fn3 = evaluatex('\\frac 1{20}3', {}, { latex: true });

fn3();

import evaluatex2 from 'evaluatex/dist/evaluatex';

const fn4 = evaluatex2('sqrt(3^2 + 4^2) + log(PI) / log(SQRT2)', {}, {});

fn4();

const fn5 = evaluatex2('100 + x + HALF_PI', { HALF_PI: 1.57 });

fn5({ x: 50, HALF_PI: 1000 });

const fn6 = evaluatex2('\\frac 1{20}3', {}, { latex: true });

fn6();

fn6.ast.children[0].children[0].value;

const fn7 = evaluatex('incr(4)', {
    incr(x) {
        return x + 1;
    },
});

fn7();

import { Equation, Expression, Fraction, parse, toTex } from 'algebra.js';

{
    let expr = new Expression('x');
    expr = expr.subtract(3);
    expr = expr.add('x');
    expr.toString();
    const eq = new Equation(expr, 4);
    eq.toString();
    const x = eq.solveFor('x');
    (x as Fraction).toString();
}
{
    let frac = new Fraction(1, 2);
    frac.toString();
    frac = frac.add(new Fraction(3, 4));
    frac.toString();
    frac = frac.subtract(2);
    frac.toString();
    frac = frac.multiply(new Fraction(4, 3));
    frac.toString();
    frac = frac.divide(5);
    frac.toString();

    let x = new Expression('x');
    x = x.add(3);
    x.toString();
    x = x.subtract(new Fraction(1, 3));
    x.toString();
    x = x.add('y');
    x.toString();
    const otherExp = new Expression('x').add(6);
    x = x.add(otherExp);
    x.toString();

    let expr1 = new Expression('a').add('b').add('c');
    let expr2 = new Expression('c').subtract('b');
    let expr3 = expr1.subtract(expr2);
    `${expr1.toString()} - (${expr2.toString()}) = ${expr3.toString()}`;

    expr1 = new Expression('x');
    expr1 = expr1.add(2);
    expr1 = expr1.multiply(4);
    expr2 = new Expression('x');
    expr2 = expr2.multiply('y');
    expr2 = expr2.multiply(new Fraction(1, 3));
    expr2 = expr2.add(4);
    expr3 = expr1.multiply(expr2);
    `(${expr1.toString()})(${expr2.toString()}) = ${expr3.toString()}`;

    x = new Expression('x').divide(2).divide(new Fraction(1, 5));
    x.toString();
    let exp = new Expression('x');
    exp = exp.add('y');
    exp = exp.add(3);
    exp.toString();
    const sum = exp.summation('x', 3, 6);
    sum.toString();
    exp = new Expression('x').add(2);
    const exp3 = exp.pow(3);
    `(${exp.toString()})^3 = ${exp3.toString()}`;

    let expr = new Expression('x');
    expr = expr.multiply(2);
    expr = expr.multiply('x');
    expr = expr.add('y');
    expr = expr.add(new Fraction(1, 3));
    expr.toString();
    const answer1 = expr.eval({ x: 2 });
    const answer2 = expr.eval({ x: 2, y: new Fraction(3, 4) });
    answer1.toString();
    answer2.toString();
    expr = new Expression('x').add(2);
    expr.toString();
    const sub = new Expression('y').add(4);
    const answer = expr.eval({ x: sub });
    answer.toString();
    exp = new Expression('x').add(2);
    exp.toString();
    exp = exp.multiply(5, false);
    exp.toString();
    exp = exp.simplify();
    exp.toString();
    exp = exp.add(5, false);
    exp.toString();
    exp = exp.divide(5, false);
    exp.toString();
    exp = exp.simplify();
    exp.toString();
    exp = exp.pow(2, false);
    exp.toString();
    exp = exp.simplify();
    exp.toString();
    const z = new Expression('z');
    const eq1 = new Equation(z.subtract(4).divide(9), z.add(6));
    eq1.toString();
    const eq2 = new Equation(z.add(4).multiply(9), 6);
    eq2.toString();
    const eq3 = new Equation(z.divide(2).multiply(7), new Fraction(1, 4));
    eq3.toString();
}
{
    const x1 = parse('1/5 * x + 2/15');
    const x2 = parse('1/7 * x + 4');
    let eq = new Equation(x1 as Expression, x2 as Expression);
    eq.toString();
    const answer = eq.solveFor('x');
    'x = ' + (answer as Fraction).toString();
    const expr1 = parse('1/4 * x + 5/4');
    const expr2 = parse('3 * y - 12/5');
    eq = new Equation(expr1 as Expression, expr2 as Expression);
    eq.toString();
    let xAnswer = eq.solveFor('x');
    let yAnswer = eq.solveFor('y');
    'x = ' + (xAnswer as Fraction).toString();
    'y = ' + (yAnswer as Fraction).toString();
    let n1 = parse('x + 5') as Expression;
    let n2 = parse('x - 3/4') as Expression;
    const quad = new Equation(n1.multiply(n2), 0);
    quad.toString();
    let answers = quad.solveFor('x');
    'x = ' + (answers as Fraction).toString();
    n1 = parse('x + 2') as Expression;
    n2 = parse('x + 3') as Expression;
    const n3 = parse('x + 4') as Expression;
    const cubic = new Equation(n1.multiply(n2).multiply(n3), 0);
    cubic.toString();
    answers = cubic.solveFor('x');
    'x = ' + (answers as Fraction).toString();
    let expr = new Expression('x');
    expr = expr.multiply('x');
    expr = expr.add('x');
    expr = expr.add('y');
    eq = new Equation(expr, 3);
    eq.toString();
    xAnswer = eq.solveFor('x');
    yAnswer = eq.solveFor('y');
    'x = ' + xAnswer;
    'y = ' + (yAnswer as Fraction).toString();
    let exp = parse('2 * x^2 + 4 * x + 4');
    exp.toString();
    exp = parse('x * y + 4');
    exp.toString();
}
{
    let eq = new Equation(new Expression('x').multiply('m'), new Expression('k'));
    eq.solveFor('x');
    eq = new Equation(new Expression('x').multiply('m'), new Expression('k'));
    eq.solveFor('k');
}
{
    const eq = parse('x^2 + 4 * x + 4 = 0') as Equation;
    eq.toString();
    const ans = eq.solveFor('x');
    'x = ' + (ans as Fraction).toString();
    const a = new Expression('x').pow(2);
    const b = new Expression('x').multiply(new Fraction(5, 4));
    const c = new Fraction(-21, 4);
    const expr = a.add(b).add(c);
    const quad = new Equation(expr, 0);
    toTex(quad);
    const answers = quad.solveFor('x');
    toTex(answers as Fraction);
    const lambda = new Expression('lambda').add(3).divide(4);
    const Phi = new Expression('Phi').subtract(new Fraction(1, 5)).add(lambda);
    toTex(lambda);
    toTex(Phi);
}

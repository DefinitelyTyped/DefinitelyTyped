// Type definitions for algebra.js 0.2
// Project: http://algebra.js.org
// Definitions by: Federico Caselli <https://github.com/CaselIT>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

declare class Term {
    coefficients: algebra.js.Fraction[];
    variables: Variable[];
    coefficient(): algebra.js.Fraction;
    toString(): string;
}

declare class Variable {
    variable: string;
    toString(): string;
}

type Union = string | number | algebra.js.Fraction | Term;

declare namespace algebra.js {
    function parse(input: string): Equation | Expression;
    function toTex(input: Fraction | Expression | Equation | object | Array<Fraction | object>): string;

    class Equation {
        lhs: Expression;
        rhs: Expression;
        constructor(lhs: Expression, rhs: Expression | Fraction | number);
        solveFor(variable: string): Fraction | Fraction[] | number[] | Expression | undefined;
        toString(): string;
    }

    class Expression {
        constants: Fraction[];
        terms: Term[];
        constructor(variable: Union | undefined);
        add(other: Union | Expression, simplify?: boolean): Expression;
        divide(other: Fraction | number, simplify?: boolean): Expression;
        eval(p: object, simplify?: boolean): Expression;
        multiply(other: Union | Expression, simplify?: boolean): Expression;
        pow(p: number, simplify?: boolean): Expression;
        constant(): Fraction;
        simplify(): Expression;
        subtract(other: Union | Expression, simplify?: boolean): Expression;
        summation(variable: string, lower: number, upper: number, simplify?: boolean): Expression;
        toString(): string;
    }

    class Fraction {
        denom: number;
        numer: number;
        constructor(num: number, denom: number);
        abs(): Fraction;
        add(other: Fraction | number, simplify?: boolean): Fraction;
        divide(other: Fraction | number, simplify?: boolean): Fraction;
        multiply(other: Fraction | number, simplify?: boolean): Fraction;
        subtract(other: Fraction | number, simplify?: boolean): Fraction;
        toString(): string;
        valueOf(): number;
    }
}
export = algebra.js;

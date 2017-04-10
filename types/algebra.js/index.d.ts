// Type definitions for algebra.js 0.2
// Project: http://algebra.js.org
// Definitions by: Federico Caselli <https://github.com/CaselIT>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
declare namespace algebra.js {
  function parse(input: string): Equation | Expression;

  class Equation {
    lhs: Expression;
    rhs: Expression;
    toString(): string;
  }

  class Expression {
    constants: Fraction[];
    terms: Term[];
    simplify(): Expression;
    constant(): Fraction;
    toString(): string;
  }

  class Fraction {
    denom: number;
    numer: number;
    abs(): Fraction;
    toString(): string;
    valueOf(): number;
  }
}
export = algebra.js;

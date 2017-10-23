// Type definitions for picturefill 3.0
// Project: https://scottjehl.github.io/picturefill/
// Definitions by: Alexander Azarov <https://github.com/alaz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Picturefill {
  type ElementNullable = Element | null;

  interface EvaluateArg {
    reevaluate?: boolean;
    elements: NodeList | ElementNullable[];
  }
}

declare function picturefill(arg?: Picturefill.EvaluateArg): void;

export = picturefill;
export as namespace picturefill;

// Type definitions for svg4everybody 2.1
// Project: https://github.com/jonathantneal/svg4everybody#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace svg4everybody;

export = svg4everybody;

declare function svg4everybody(options?: svg4everybody.Svg4everybodyOpts): void;

declare namespace svg4everybody {
  interface Svg4everybodyOpts {
    fallback?(src: string, svg: SVGElement, use: SVGUseElement): string;
    validate?(src: string, svg: SVGElement, use: SVGUseElement): boolean;
    nosvg?: boolean;
    polyfill?: boolean;
  }
}

// Type definitions for detect-hover 1.0
// Project: https://github.com/rafrex/detect-hover#readme
// Definitions by: Thomas Tilkema <https://github.com/thomastilkema>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface detectHover {
    anyHover: boolean;
    anyNone: boolean;
    hover: boolean;
    none: boolean;

    update(): void;
}

declare const detectHover: detectHover;
export default detectHover;

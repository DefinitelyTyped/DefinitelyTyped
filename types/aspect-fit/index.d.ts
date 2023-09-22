// Type definitions for aspect-fit 1.0
// Project: https://github.com/maxtherocket/aspect-fit#readme
// Definitions by: Rajas Paranjpe <https://github.com/ChocolateLoverRaj>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Output {
    scale: number;
    width: number;
    height: number;
}
declare function aspectFit(width: number, height: number, parentWidth: number, parentHeight: number): Output;

export = aspectFit;

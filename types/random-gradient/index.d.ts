// Type definitions for random-gradient 0.0
// Project: https://github.com/bukinoshita/random-gradient#readme
// Definitions by: dm1sh <https://github.com/dm1sh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace randomGradient {
    type GradientDirection = "diagonal" | "radial" | "horizontal" | "vertical";
}

declare function randomGradient(uuid: string, type?: randomGradient.GradientDirection): string;

export = randomGradient;

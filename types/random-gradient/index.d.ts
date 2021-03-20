// Type definitions for random-gradient 0.0
// Project: https://github.com/bukinoshita/random-gradient#readme
// Definitions by: dm1sh <https://github.com/dm1sh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "random-gradient" {
    namespace randomGradient {
      type GradientDirectionT = "diagonal" | "radial" | "horizontal" | "vertical";
    }
  
    function randomGradient(
      uuid: string,
      type?: randomGradient.GradientDirectionT
    ): string;
  
    export = randomGradient;
  }
  
// Type definitions for inversify-devtools 1.0.0
// Project: https://github.com/inversify/inversify-devtools
// Definitions by: inversify <https://github.com/inversify/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../inversify/inversify.d.ts" />

interface ConnectKernel extends Function {
  (kernel: inversify.interfaces.Kernel): void;
}

declare module "inversify-devtools" {
  let render: (container: string) => ConnectKernel;
  export default render;
}

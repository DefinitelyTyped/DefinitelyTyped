// Type definitions for inversify-devtools 1.0.0
// Project: https://github.com/inversify/inversify-devtools
// Definitions by: inversify <https://github.com/inversify/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

import * as inversify from "inversify";

interface ConnectKernel extends Function {
  (kernel: inversify.interfaces.Kernel): void;
}

export default function render(container: string): ConnectKernel;

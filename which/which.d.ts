// Type definitions for which 1.0.8
// Project: https://github.com/isaacs/node-which
// Definitions by: vvakame <https://github.com/vvakame>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "which" {
  function when (cmd: string, cb: (err: Error, path: string) => void): void;
  module when {
    function sync(cmd: string): string;
  }

  export = when;
}

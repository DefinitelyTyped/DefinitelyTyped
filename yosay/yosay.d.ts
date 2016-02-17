// Type definitions for yosay
// Project: https://github.com/yeoman/yosay
// Definitions by: Kentaro Okuno <http://github.com/armorik83>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module 'yosay' {
  function yosay(message?: string, options?: {maxLength: number}): string;
  export = yosay;
}
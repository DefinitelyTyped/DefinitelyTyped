// Type definitions for System.js 0.18.4
// Project: https://github.com/systemjs/systemjs
// Definitions by: Ludovic HENIN <https://github.com/ludohenin/>, Nathan Walker <https://github.com/NathanWalker/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface System {
  import(name: string): any;
  defined: any;
  amdDefine: () => void;
  amdRequire: () => void;
  baseURL: string;
  paths: { [key: string]: string };
  meta: { [key: string]: Object };
  config: any;
}

declare var System: System;

declare module "systemjs" {
  export = System;
}
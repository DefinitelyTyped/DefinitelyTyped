// Type definitions for System.js 0.18.4
// Project: https://github.com/systemjs/systemjs
// Definitions by: Ludovic HENIN <https://github.com/ludohenin/>, Nathan Walker <https://github.com/NathanWalker/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface System {
  import(name: string): any;
  defined: any;
  amdDefine: () => void;
  amdRequire: () => void;
  normalize(name: string, parentName?: string, referrerAddress?: string): string;
  baseURL: string;
  paths: { [key: string]: string };
  meta: { [key: string]: Object };
  config: any;
  _nodeRequire: (name: string) => any;
}

declare var System: System;

declare module "systemjs" {
  export = System;
}

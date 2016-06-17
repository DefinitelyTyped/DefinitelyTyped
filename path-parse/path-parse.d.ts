// Type definitions for path-parse v1.0.5
// Project: https://github.com/jbgutierrez/path-parse
// Definitions by: Dan Chao <http://dchao.co>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../node/node.d.ts"/>

declare module "path-parse" {
  import { ParsedPath } from "path";
  const parse: (src: string) => ParsedPath;
  export = parse;
}

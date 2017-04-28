// Type definitions for path-parse v1.0.5
// Project: https://github.com/jbgutierrez/path-parse
// Definitions by: Dan Chao <http://dchao.co>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>


import { ParsedPath } from "path";
declare const parse: (src: string) => ParsedPath;
export = parse;

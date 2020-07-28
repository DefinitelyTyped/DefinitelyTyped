// Type definitions for read-json-sync 2.0
// Project: https://github.com/shinnn/read-json-sync#readme
// Definitions by: Junxiao Shi <https://github.com/yoursunny>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

/// <reference types="node"/>
import { readFileSync } from "fs";
import { URL } from "url";

type ReadFileOptions = Extract<Parameters<typeof readFileSync>[1], object>;

declare function readJsonSync(path: string|Buffer|URL|number, options?: ReadFileOptions|string): any;

export = readJsonSync;

/// <reference types="node"/>
import { readFileSync } from "fs";
import { URL } from "url";

type ReadFileOptions = Extract<Parameters<typeof readFileSync>[1], object>;

declare function readJsonSync(path: string | Buffer | URL | number, options?: ReadFileOptions | string): any;

export = readJsonSync;

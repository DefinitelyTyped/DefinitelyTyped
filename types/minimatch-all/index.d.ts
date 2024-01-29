import { IOptions } from "minimatch";

declare function minimatchAll(path: string, patterns: string[], opts?: IOptions): boolean;

export = minimatchAll;

import { Strarray } from "./str-array";

export interface DiffOptions {
    version?: number | undefined;
    flags?: number | undefined;
    ignoreSubmodules?: number | undefined;
    pathspec?: Strarray | string | string[] | undefined;
    notifyCb?: Function | undefined;
    contextLines?: number | undefined;
    interhunkLines?: number | undefined;
    idAbbrev?: number | undefined;
    maxSize?: number | undefined;
    oldPrefix?: string | undefined;
    newPrefix?: string | undefined;
    payload?: any;
    progressCb?: any;
    [key: string]: any;
}

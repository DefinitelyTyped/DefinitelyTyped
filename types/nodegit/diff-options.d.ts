import { Strarray } from './str-array';

export interface DiffOptions {
    version?: number;
    flags?: number;
    ignoreSubmodules?: number;
    pathspec?: Strarray | string | string[];
    notifyCb?: Function;
    contextLines?: number;
    interhunkLines?: number;
    idAbbrev?: number;
    maxSize?: number;
    oldPrefix?: string;
    newPrefix?: string;
    payload?: any;
    progressCb?: any;
    [key: string]: any;
}

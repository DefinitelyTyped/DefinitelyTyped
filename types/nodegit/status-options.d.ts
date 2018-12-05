import { Strarray } from './str-array';

export interface StatusOptions {
    version?: number;
    show?: number;
    flags?: number;
    pathspec?: Strarray | string | string[];
    [key: string]: any;
}

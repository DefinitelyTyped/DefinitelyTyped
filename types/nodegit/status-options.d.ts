import { Strarray } from './str-array';

export interface StatusOptions {
    version?: number;
    show?: number;
    flags?: number;
    pathspec?: Strarray;
    [key: string]: any;
}

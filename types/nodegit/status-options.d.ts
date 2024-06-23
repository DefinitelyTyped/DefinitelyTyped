import { Strarray } from "./str-array";

export interface StatusOptions {
    version?: number | undefined;
    show?: number | undefined;
    flags?: number | undefined;
    pathspec?: Strarray | string | string[] | undefined;
    [key: string]: any;
}

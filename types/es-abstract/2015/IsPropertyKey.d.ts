import type { PropertyKey } from '../index';

declare function IsPropertyKey(arg: unknown): arg is PropertyKey;
export = IsPropertyKey;

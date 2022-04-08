import type { PropertyKey } from '../index';

declare function GetV<O extends {}, P extends PropertyKey>(O: O, P: P): P extends keyof O ? O[P] : unknown;
export = GetV;

import type { PropertyKey } from '../index';

declare function GetV<O, P extends PropertyKey>(O: O, P: P): P extends keyof O ? O[P] : any;
export = GetV;

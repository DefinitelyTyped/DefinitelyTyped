import type { PropertyKey } from '../index';

declare function Get<O extends object, P extends PropertyKey>(O: O, P: P): P extends keyof O ? O[P] : unknown;
export = Get;

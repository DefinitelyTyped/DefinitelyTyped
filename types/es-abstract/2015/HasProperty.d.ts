import type { PropertyKey } from '../index';

declare function HasProperty<P extends PropertyKey>(O: object, P: P): O is { [K in P]: unknown };
export = HasProperty;

import type { PropertyKey } from '../index';

declare function HasOwnProperty<P extends PropertyKey>(O: object, P: P): O is { [K in P]: unknown };
export = HasOwnProperty;

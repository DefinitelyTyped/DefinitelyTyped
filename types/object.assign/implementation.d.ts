declare function assign<T extends {}, U>(target: T, source: U): T & U;

declare function assign<T extends {}, U, V>(target: T, source1: U, source2: V): T & U & V;

declare function assign<T extends {}, U, V, W>(target: T, source1: U, source2: V, source3: W): T & U & V & W;

declare function assign(target: object, ...sources: unknown[]): unknown;

export = assign;

export = isarray;

// eslint-disable-next-line @definitelytyped/no-unnecessary-generics
declare function isarray<T>(value: unknown): value is T[];

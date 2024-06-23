export = deprecate;

// eslint-disable-next-line @typescript-eslint/ban-types
declare function deprecate<T extends Function>(fn: T, message: string): T;

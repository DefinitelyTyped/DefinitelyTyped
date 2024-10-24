export = deprecate;

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
declare function deprecate<T extends Function>(fn: T, message: string): T;

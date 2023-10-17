export = deprecate;

// tslint:disable-next-line ban-types
declare function deprecate<T extends Function>(fn: T, message: string): T;

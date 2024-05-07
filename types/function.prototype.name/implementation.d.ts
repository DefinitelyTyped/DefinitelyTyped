type Func = (...args: any[]) => any;

declare function name(): (this: Func) => string;

export = name;

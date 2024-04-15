declare function isCallable(val: any): val is (...args: any[]) => any;

export = isCallable;

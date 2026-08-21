// Commmon function signature
declare function f(prefix?: string, suffix?: string): string;

// let x -> Workaround for ES6 imports
// Combined type because of assigning to function object in original module
declare let x: typeof f & { process: typeof f } & { time: typeof f };

export = x;

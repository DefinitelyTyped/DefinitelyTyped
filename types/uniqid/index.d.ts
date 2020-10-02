// Type definitions for uniqid 5.2
// Project: http://github.com/adamhalasz/uniqid
// Definitions by: idchlife <https://github.com/idchlife>, onomatopoetry <https://github.com/onomatopoetry>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/uniqid

// Commmon function signature
declare function f(prefix?: string, suffix?: string): string;

// let x -> Workaround for ES6 imports
// Combined type because of assigning to function object in original module
declare let x: typeof f & { process: typeof f } & { time: typeof f };

export = x;

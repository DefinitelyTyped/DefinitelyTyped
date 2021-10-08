import universalify = require('universalify');

declare const cb1: (p1: number, cb: (err: Error, data: string) => void) => void;
universalify.fromCallback(cb1); // $ExpectType { (p1: number): Promise<string>; (arguments_0: number, arguments_1: (error: Error, value: string) => void): void; }

declare const p1: (p1: number) => Promise<string>;
universalify.fromPromise(p1); // $ExpectType { (p1: number): Promise<string>; (arguments_0: number, arguments_1: (error: unknown, value: string) => void): void; }

declare const cb2: (p1: number, p2: number, cb: (err: Error, data: string) => void) => void;
universalify.fromCallback(cb2); // $ExpectType { (p1: number, p2: number): Promise<string>; (arguments_0: number, arguments_1: number, arguments_2: (error: Error, value: string) => void): void; }

declare const p2: (p1: number, p2: number) => Promise<string>;
universalify.fromPromise(p2); // $ExpectType { (p1: number, p2: number): Promise<string>; (arguments_0: number, arguments_1: number, arguments_2: (error: unknown, value: string) => void): void; }

declare const cb3: (p1: number, p2: number, p3: number, cb: (err: Error, data: string) => void) => void;
universalify.fromCallback(cb3)(1, 2, 3); // $ExpectType Promise<string>

declare const p3: (p1: number, p2: number, p3: number) => Promise<string>;
universalify.fromPromise(p3)(1, 2, 3, (err, data) => {
    data; // $ExpectType string
});

declare const cb4: (p1: number, p2: boolean, p3: number, p4: number, cb: (err: Error, data: string) => void) => void;
universalify.fromCallback(cb4)(1, true, 3, 4); // $ExpectType Promise<string>

declare const p4: (p1: number, p2: boolean, p3: number, p4: number) => Promise<string>;
universalify.fromPromise(p4)(1, false, 3, 4, (err, data) => {
    data; // $ExpectType string
});

declare const cb5: (
    p1: number,
    p2: number,
    p3: boolean,
    p4: string[],
    p5: number,
    cb: (err: Error, data: string) => void,
) => void;
universalify.fromCallback(cb5)(1, 2, true, ['hi'], 5); // $ExpectType Promise<string>

declare const p5: (p1: number, p2: number, p3: boolean, p4: string[], p5: number) => Promise<string>;
universalify.fromPromise(p5)(1, 2, false, [], 5, (err, data) => {
    data; // $ExpectType string
});

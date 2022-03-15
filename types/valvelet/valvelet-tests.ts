import valvelet = require('valvelet');

// $ExpectType (i: number) => Promise<string>
valvelet(async (i: number) => `${i} - ${new Date().toISOString()}`, 2, 1000);
// $ExpectType (i: number) => Promise<string>
valvelet(async (i: number) => `${i} - ${new Date().toISOString()}`, 2, 1000, 50000);
// $ExpectType (i: string, n: number) => Promise<undefined>
valvelet((i: string, n: number) => void 0, 2, 1000);
// $ExpectType (i: string, n: number) => Promise<number>
valvelet((i: string, n: number): PromiseLike<number> => Promise.resolve(1), 2, 1000);

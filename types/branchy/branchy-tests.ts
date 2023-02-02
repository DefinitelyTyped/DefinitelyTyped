import branchy = require('branchy');

(async () => {
    const adder = (a: number, b: number) => a + b;
    const adderP = (a: number, b: number) => Promise.resolve(a + b);

    branchy(adder); // $ExpectType (a: number, b: number) => Promise<number>
    branchy(adder, { concurrent: 2 }); // $ExpectType (a: number, b: number) => Promise<number>
    branchy(adder, { concurrent: 'auto' }); // $ExpectType (a: number, b: number) => Promise<number>
    branchy(adder, { concurrent: branchy.createContext() }); // $ExpectType (a: number, b: number) => Promise<number>
    branchy(adder, { concurrent: { threads: 2 } }); // $ExpectType (a: number, b: number) => Promise<number>
    branchy(adder, { concurrent: { threads: 'auto' } }); // $ExpectType (a: number, b: number) => Promise<number>
    branchy(adder, { concurrent: { strategy: 'stack' } }); // $ExpectType (a: number, b: number) => Promise<number>
    // $ExpectType (a: number, b: number) => Promise<number>
    branchy(adder, {
        concurrent: {
            priority: (a, b) => {
                a; // $ExpectType number
                b; // $ExpectType number
                return 1;
            },
        },
    });
    branchy(adderP); // $ExpectType (a: number, b: number) => Promise<number>
    branchy('./add'); // $ExpectType (...args: any[]) => Promise<unknown>

    branchy.createContext({ concurrent: 2 }); // $ExpectType ConcurrencyContext<any, any>
})();

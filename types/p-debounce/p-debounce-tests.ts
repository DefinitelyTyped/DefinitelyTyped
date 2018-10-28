import pDebounce = require('p-debounce');

const expensiveCall = (input: number) => Promise.resolve(input);

const debouncedFn = pDebounce(expensiveCall, 200);
const debouncedFn2 = pDebounce(expensiveCall, 200, {leading: true});

for (const i of [1, 2, 3]) {
    debouncedFn(i).then(i => {
        const num: number = i;
    });
}

pDebounce(() => true, 2)();
pDebounce((n: number, s: string) => true, 2)(1, 's');
pDebounce((n: number, s: string, b: boolean) => true, 2)(1, 's', true);
pDebounce((n: number, s: string, b: boolean, n2: number) => true, 2)(1, 's', true, 1);
pDebounce((n: number, s: string, b: boolean, n2: number, s2: string) => true, 2)(1, 's', true, 1, 's');
pDebounce((n: number, s: string, b: boolean, n2: number, s2: string, b2: boolean) => true, 2)(1, 's', true, 1, 's', false);
pDebounce((n: number, s: string, b: boolean, n2: number, s2: string, b2: boolean, n3: number) => true, 2)(1, 's', true, 1, 's', false, 1);
pDebounce((n: number, s: string, b: boolean, n2: number, s2: string, b2: boolean, n3: number, n4: number) => true, 2)(1, 's', true, 1, 's', false, 1, 2);
pDebounce((n: number, s: string, b: boolean, n2: number, s2: string, b2: boolean, n3: number, n4: number, n5: number) => true, 2)(1, 's', true, 1, 's', false, 1, 2, 3);
pDebounce((n: number, s: string, b: boolean, n2: number, s2: string, b2: boolean, n3: number, n4: number, n5: number, n6: number) => true, 2)(1, 's', true, 1, 's', false, 1, 2, 3, 4);
pDebounce(
    (n: number, s: string, b: boolean, n2: number, s2: string, b2: boolean, n3: number, n4: number, n5: number, n6: number, s3: string) => true,
    2)(1, 's', true, 1, 's', false, 1, 2, 3, 4, 'as');

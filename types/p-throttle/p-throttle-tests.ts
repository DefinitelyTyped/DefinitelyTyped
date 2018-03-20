import pThrottle = require('p-throttle');

const now = Date.now();

const throttled = pThrottle((i: number) => {
    const secDiff = ((Date.now() - now) / 1000).toFixed();
    return Promise.resolve(`${i}: ${secDiff}s`);
}, 2, 1000);

for (let i = 1; i <= 6; i++) {
    throttled(i).then(res => {
        const str: string = res;
    });
}

throttled.abort();

pThrottle(() => true, 2, 3).abort();
pThrottle(() => true, 2, 3)();
pThrottle((n: number, s: string) => true, 2, 3).abort();
pThrottle((n: number, s: string) => true, 2, 3)(1, 's');
pThrottle((n: number, s: string, b: boolean) => true, 2, 3).abort();
pThrottle((n: number, s: string, b: boolean) => true, 2, 3)(1, 's', true);
pThrottle((n: number, s: string, b: boolean, n2: number) => true, 2, 3).abort();
pThrottle((n: number, s: string, b: boolean, n2: number) => true, 2, 3)(1, 's', true, 1);
pThrottle((n: number, s: string, b: boolean, n2: number, s2: string) => true, 2, 3).abort();
pThrottle((n: number, s: string, b: boolean, n2: number, s2: string) => true, 2, 3)(1, 's', true, 1, 's');
pThrottle((n: number, s: string, b: boolean, n2: number, s2: string, b2: boolean) => true, 2, 3).abort();
pThrottle((n: number, s: string, b: boolean, n2: number, s2: string, b2: boolean) => true, 2, 3)(1, 's', true, 1, 's', false);
pThrottle((n: number, s: string, b: boolean, n2: number, s2: string, b2: boolean, n3: number) => true, 2, 3).abort();
pThrottle((n: number, s: string, b: boolean, n2: number, s2: string, b2: boolean, n3: number) => true, 2, 3)(1, 's', true, 1, 's', false, 1);
pThrottle((n: number, s: string, b: boolean, n2: number, s2: string, b2: boolean, n3: number, n4: number) => true, 2, 3).abort();
pThrottle((n: number, s: string, b: boolean, n2: number, s2: string, b2: boolean, n3: number, n4: number) => true, 2, 3)(1, 's', true, 1, 's', false, 1, 2);
pThrottle((n: number, s: string, b: boolean, n2: number, s2: string, b2: boolean, n3: number, n4: number, n5: number) => true, 2, 3).abort();
pThrottle((n: number, s: string, b: boolean, n2: number, s2: string, b2: boolean, n3: number, n4: number, n5: number) => true, 2, 3)(1, 's', true, 1, 's', false, 1, 2, 3);
pThrottle((n: number, s: string, b: boolean, n2: number, s2: string, b2: boolean, n3: number, n4: number, n5: number, n6: number) => true, 2, 3).abort();
pThrottle((n: number, s: string, b: boolean, n2: number, s2: string, b2: boolean, n3: number, n4: number, n5: number, n6: number) => true, 2, 3)(1, 's', true, 1, 's', false, 1, 2, 3, 4);
pThrottle(
    (n: number, s: string, b: boolean, n2: number, s2: string, b2: boolean, n3: number, n4: number, n5: number, n6: number, s3: string) => true,
    2,
    3).abort();
pThrottle(
    (n: number, s: string, b: boolean, n2: number, s2: string, b2: boolean, n3: number, n4: number, n5: number, n6: number, s3: string) => true,
    2,
    3)(1, 's', true, 1, 's', false, 1, 2, 3, 4, 'as');

throw new pThrottle.AbortError();

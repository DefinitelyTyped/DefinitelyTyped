import { check } from 'agadoo';

(async () => {
    // $ExpectType Result
    await check('./some-module.js');

    // @ts-expect-error
    await check(123);
})();

// NOTE: These tests are *not* actually for TS version 4.0 and below, this is
// a dummy directory used to run tests with a second `tsconfig.json` which
// includes `dom` in its `lib` collection.

import './test/dom-events';

//// Global interfaces

{
    const ac = new AbortController();
    ac.abort();
    // @ts-expect-error - ensure constructor does not return a constructor
    new ac();

    const sig = new AbortSignal();
    sig.addEventListener("", () => {}, {once: true});
    // @ts-expect-error - ensure constructor does not return a constructor
    new sig();
    // @ts-expect-error - `timeout` method is not in lib-dom (yet?)
    AbortSignal.timeout(123);
}

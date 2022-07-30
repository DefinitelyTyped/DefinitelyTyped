import stdin = require('stdin');

// @ts-expect-error
stdin();
// @ts-expect-error
stdin((num: number) => {});

stdin(() => {}); // $ExpectType void
stdin(str => {}); // $ExpectType void
stdin(str => undefined); // $ExpectType void
stdin(str => 1); // $ExpectType void
stdin(str => str); // $ExpectType void
stdin(str => []); // $ExpectType void
stdin(str => ({})); // $ExpectType void

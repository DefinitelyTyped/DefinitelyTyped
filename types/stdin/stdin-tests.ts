import stdin = require('stdin');

stdin(); // $ExpectError
stdin((num: number) => {}); // $ExpectError

stdin(() => {}); // $ExpectType void
stdin(str => {}); // $ExpectType void
stdin(str => undefined); // $ExpectType void
stdin(str => 1); // $ExpectType void
stdin(str => str); // $ExpectType void
stdin(str => []); // $ExpectType void
stdin(str => ({})); // $ExpectType void

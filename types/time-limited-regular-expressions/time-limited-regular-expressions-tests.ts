import * as tlre from "time-limited-regular-expressions";

tlre(); // $ExpectType TLRE
tlre({ limit: 1 }); // $ExpectType TLRE

tlre({}); // $ExpectError
tlre({ limit: 1, time: 1000 }); // $ExpectError

const regex = tlre({ limit: 1 });

regex.match(new RegExp("hello", "g"), "hello world"); // $ExpectType Promise<RegExpMatchArray | null>
regex.match(/hello/g, "hello world"); // $ExpectType Promise<RegExpMatchArray | null>

regex.match("hello", "hello world"); // $ExpectError
regex.match(/hello/, 123); // $ExpectError

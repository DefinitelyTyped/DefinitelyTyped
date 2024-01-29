import * as tlre from "time-limited-regular-expressions";

tlre(); // $ExpectType TLRE
tlre({ limit: 1 }); // $ExpectType TLRE

// @ts-expect-error
tlre({});
// @ts-expect-error
tlre({ limit: 1, time: 1000 });

const regex = tlre({ limit: 1 });

regex.match(new RegExp("hello", "g"), "hello world"); // $ExpectType Promise<RegExpMatchArray | null>
regex.match(/hello/g, "hello world"); // $ExpectType Promise<RegExpMatchArray | null>

// @ts-expect-error
regex.match("hello", "hello world");
// @ts-expect-error
regex.match(/hello/, 123);

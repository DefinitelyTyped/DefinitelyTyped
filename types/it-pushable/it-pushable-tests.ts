import pushable = require("it-pushable");

const it1 = pushable<number>();
const it2 = pushable<string>({ onEnd: (err?: Error) => "ok" });
const it3 = pushable<number>({ onEnd: (err?: Error) => undefined, writev: true });

async function f() {
  for await (const n of it1) {
    // $ExpectType number
    n;
  }

  for await (const n of it2) {
    // $ExpectType string
    n;
  }

  for await (const v of it3) {
    // $ExpectType number[]
    v;
  }
}

it1.push(1)
   .push(2);

// $ExpectError
it1.push("x");

it2.push("a")
   .push("b");

// $ExpectError
it2.push(9);

it3.push(1)
   .push(2);

// $ExpectError
it3.push("x");

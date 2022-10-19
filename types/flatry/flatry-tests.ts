import flatry = require('flatry');

declare const asyncFunction: () => Promise<string>;
declare const syncFunction: () => boolean;

async function testAsync() {
  const result = flatry(asyncFunction()); // $ExpectType Promise<[unknown, never] | [null, string]>
}

async function testAnotherAsync() {
  const [err, res] = await flatry(asyncFunction()); // $ExpectType [unknown, never] | [null, string]

  if (err) {
    // ...
  } else {
    const data = res; // $ExpectType string
  }
}

function testSync() {
  const result = flatry(syncFunction); // $ExpectType [unknown, never] | [null, boolean]
}

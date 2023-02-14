import flatry = require('flatry');

declare const asyncFunction: () => Promise<string>;
declare const syncFunction: () => boolean;

async function testAsync() {
  const result = flatry(asyncFunction()); // $ExpectType Promise<[unknown] | [null, string]>
}

function testSync() {
  const result = flatry(syncFunction); // $ExpectType [unknown] | [null, boolean]
}

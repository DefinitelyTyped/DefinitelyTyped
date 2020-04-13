import AbortablePromise = require("promise-abortable");

const pNumber = new AbortablePromise<number>((resolve, reject, signal) => {
  signal.onabort = (reason) => undefined;
  resolve(1);
});
pNumber.abort("x");

(async () => 1 + await pNumber)();

let pString = pNumber.then((v) => "y", () => "z").catch(() => "z");
pString.abort();

pString = AbortablePromise.race([
  "a",
  Promise.resolve("b"),
  AbortablePromise.resolve("c"),
]);

let pTuple = AbortablePromise.all([
  1,
  "a",
]);
pTuple = AbortablePromise.all([
  pNumber,
  pString,
]);
pTuple.abort().abort("again");

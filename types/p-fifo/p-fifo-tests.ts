import Fifo = require("p-fifo");

const fifo = new Fifo<string>();

(async () => {
  // $ExpectType void
  await fifo.push("a");

  // $ExpectError
  fifo.push(true);

  // $ExpectType string
  await fifo.shift();
})();

// $ExpectType boolean
fifo.isEmpty();

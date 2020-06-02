import wyt = require('wyt');

// Extracted from wyt's readme.

(async () => {
/**
 * The ticket desk can handle 2 customers per 1000 milliseconds.
 */
const waitTurn = wyt(2, 1000);

// $ExpectType number
await waitTurn();

// $ExpectType number
await waitTurn(2);

// $ExpectType number
await waitTurn(3);
// UnhandledPromiseRejectionWarning: Unhandled promise rejection (rejection id:2):
//   Error: Turns can not be greater than the number of turns per interval
})();

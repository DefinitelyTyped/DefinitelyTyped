import move = require('move-concurrently');

move('/path/to/thing', '/new/path/thing').then(() => {
  // thing is now moved!
}).catch((err: any) => {
  // oh no!
});

import Bluebird = require('bluebird');

// tsc version: 2.7.0-dev.20171024
// required type arguments!
const promise = move<Bluebird<void>>('/path/to/thing', '/new/path/thing', { Promise: Bluebird })
  .then(() => {
    // thing is now moved!
  })
  .error((err: any) => {
    // this is a Bluebird promise!
  })
  .catch((err: any) => {
    // oh no!
  });

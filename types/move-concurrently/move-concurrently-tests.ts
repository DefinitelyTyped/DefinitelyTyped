import * as move from 'move-concurrently';

move('/path/to/thing', '/new/path/thing').then(() => {
  // thing is now moved!
}).catch((err: any) => {
  // oh no!
});

import * as Bluebird from 'bluebird';

const promise = move('/path/to/thing', '/new/path/thing', { Promise: Bluebird })
  .then(() => {
    // thing is now moved!
  })
  .error((err: any) => {
    // this is a Bluebird promise!
  })
  .catch((err: any) => {
    // oh no!
  });

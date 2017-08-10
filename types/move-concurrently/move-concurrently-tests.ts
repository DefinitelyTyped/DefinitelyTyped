import * as move from 'move-concurrently';

move('/path/to/thing', '/new/path/thing').then(() => {
  // thing is now moved!
}).catch((err: any) => {
  // oh no!
});

import * as Bluebird from 'bluebird';

const promise: Bluebird<void> = move<Bluebird<void>>('/path/to/thing', '/new/path/thing', { Promise: Bluebird }).then(() => {
  // thing is now moved!
}).catch((err: any) => {
  // oh no!
});

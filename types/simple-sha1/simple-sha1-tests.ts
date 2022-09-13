import sha1 = require('simple-sha1');

const log = (...args: any) => {};

sha1('hey there', (hash) => {
  log('async:', hash);
});

log('sync:', sha1.sync('hey there'));

import sha1 = require('simple-sha1');

sha1('hey there', (hash) => {
  console.log('async:', hash);
});

console.log('sync:', sha1.sync('hey there'));

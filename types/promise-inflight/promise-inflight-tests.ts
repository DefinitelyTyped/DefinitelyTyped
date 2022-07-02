import inflight = require('promise-inflight');

declare function delay(ms: number): Promise<void>;

// some request that does some stuff
function req(key: string) {
  // key is any random string.  like a url or filename or whatever.
  return inflight(key, () => {
    // this is where you'd fetch the url or whatever
    return delay(100);
  });
}

// only assigns a single setTimeout
// when it dings, all thens get called with the same result.  (There's only
// one underlying promise.)
req('foo').then(/* … */);
req('foo').then(/* … */);
req('foo').then(/* … */);
req('foo').then(/* … */);

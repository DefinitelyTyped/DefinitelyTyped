import * as R from 'ramda';

(() => {
  const slashify = R.wrap(
    R.flip(R.add)('/'),
    (f: (x: string) => string, x: string) => (R.match(/\/$/, x) ? x : f(x)),
  );

  slashify('a'); // => 'a/'
  slashify('a/'); // => 'a/'
})();

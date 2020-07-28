import * as R from 'ramda';

() => {
  const matchPhrases = (xs: string[]) =>
    R.objOf('must', R.map((x: string) => R.objOf('match_phrase', x), xs));

  const out: { must: Array<{ match_phrase: string }> } = matchPhrases([
    'foo',
    'bar',
    'baz',
  ]);
};

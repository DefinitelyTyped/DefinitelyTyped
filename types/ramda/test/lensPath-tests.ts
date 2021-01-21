import * as R from 'ramda';

() => {
  interface ObjWithPhrase {
    phrase: string
  }

  // $ExpectType Lens<ObjWithPhrase, string>
  R.lensPath<ObjWithPhrase>(['phrase']);

  // $ExpectError
  R.lensPath<ObjWithPhrase>(['phrae']);
};

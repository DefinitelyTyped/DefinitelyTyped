import * as R from 'ramda';

() => {
  interface ObjWithPhrase {
    phrase: string;
  }

  // $ExpectType Lens<ObjWithPhrase, string>
  R.lensProp<ObjWithPhrase>('phrase');

  // $ExpectError
  R.lensProp<ObjWithPhrase>('phrae');
};

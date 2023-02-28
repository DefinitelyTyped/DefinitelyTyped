import * as R from 'ramda';

() => {
    interface ObjWithPhrase {
        phrase: string;
    }

    // $ExpectType Lens<ObjWithPhrase, string>
    R.lensPath<ObjWithPhrase>(['phrase']);

    // $ExpectType Lens<ObjWithPhrase, any>
    R.lensPath<ObjWithPhrase>(['phrae']);
};

import * as R from 'ramda';

() => {
    // $ExpectType Lens<number[], number>
    const headLens = R.lens(
        function get(arr: number[]) {
            return arr[0];
        },
        function set(val: number, arr: number[]) {
            return [val].concat(arr.slice(1));
        },
    );

    interface ObjWithPhrase {
        phrase: string;
    }

    // $ExpectType Lens<ObjWithPhrase, string>
    const phraseLens = R.lens(
        function get(obj: ObjWithPhrase) {
            return obj.phrase;
        },
        function set(val: string, obj: ObjWithPhrase) {
            const out = R.clone(obj);
            out.phrase = val;
            return out;
        },
    );
};

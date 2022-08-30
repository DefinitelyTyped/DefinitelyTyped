import * as R from 'ramda';

() => {
    function takesNoArg() {
        return true;
    }
    function takesOneArg(a: number) {
        return [a];
    }
    function takesTwoArgs(a: number, b: number) {
        return [a, b];
    }
    function takesThreeArgs(a: number, b: number, c: number) {
        return [a, b, c];
    }

    R.nAry(0);
    R.nAry(0, takesNoArg); // $ExpectType () => boolean
    R.nAry(0, takesOneArg); // $ExpectType () => number[]
    R.nAry(1, takesTwoArgs); // $ExpectType (head: number) => number[]
    R.nAry(1, takesThreeArgs); // $ExpectType (head: number) => number[]
    R.nAry(2, takesOneArg); // $ExpectType (head: number, head: undefined) => number[]
};

import * as R from 'ramda';

() => {
    // $ExpectType (value: string) => string
    const decodeChar = R.promap((s: string) => s.charCodeAt(0), String.fromCharCode, R.add(-8));
    // $ExpectType (value: string) => string
    const decodeString = R.promap(R.split(''), R.join(''), R.map(decodeChar));
    // $ExpectType string
    decodeString('ziuli'); // => "ramda"
};

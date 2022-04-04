import * as R from 'ramda';

() => {
    // $ExpectType [number, string][]
    R.zip([1, 2, 3], ['a', 'b', 'c']); // => [[1, 'a'], [2, 'b'], [3, 'c']]
    // $ExpectType [number, string][]
    R.zip([1, 2, 3])(['a', 'b', 'c']); // => [[1, 'a'], [2, 'b'], [3, 'c']]

    // $ExpectType [string, string][]
    R.zip<string, string>(['John', 'Juliet', 'Melanie'], ['Titor', 'Burke', 'Cross']);
    // $ExpectType [string, string][]
    R.zip(['John', 'Juliet', 'Melanie'])(['Titor', 'Burke', 'Cross']);

    // $ExpectType [string, number][]
    R.zip<string, number>(['John', 'Juliet', 'Melanie'], [21, 22, 23]);
    // $ExpectType [string, number][]
    R.zip(['John', 'Juliet', 'Melanie'])([21, 22, 23]);
};

import * as R from 'ramda';

interface KeyValuePair<K, V> extends Array<K | V> {
    0: K;
    1: V;
}
type Pair = KeyValuePair<string, number>;

(() => {
    const pairs = [
        ['a', 1],
        ['b', 2],
        ['c', 3],
    ] as const;

    function flattenPairs(pair: readonly [string, number], acc: Array<string | number>): Array<string | number> {
        return acc.concat(pair);
    }

    R.reduceRight(flattenPairs, [], pairs); // => [ 'c', 3, 'b', 2, 'a', 1 ]
})();

() => {
    const pairs: Pair[] = [
        ['a', 1],
        ['b', 2],
        ['c', 3],
    ];

    function flattenPairs(pair: Pair, acc: Array<string | number>): Array<string | number> {
        return acc.concat(pair);
    }

    R.reduceRight(flattenPairs, [], pairs); // => [ 'c', 3, 'b', 2, 'a', 1 ]
    R.reduceRight(flattenPairs, [])(pairs); // => [ 'c', 3, 'b', 2, 'a', 1 ]
    R.reduceRight(flattenPairs)([], pairs); // => [ 'c', 3, 'b', 2, 'a', 1 ]
};

import { BloomFilter } from 'bloomfilter';
function test_bloomfilter() {
    const m = 10;
    const k = 2;

    const bloomFilter = new BloomFilter(m, k);
    const array: Int32Array = bloomFilter.buckets;
    const length: number = bloomFilter.buckets.length;
    bloomFilter.add('someString');
    const test: boolean = bloomFilter.test('someString');

    const buckets: Int32Array = bloomFilter.buckets;
    const bloom2 = new BloomFilter(buckets, k);

    const a: Int32Array = new Int32Array(16);
    a[3];
}

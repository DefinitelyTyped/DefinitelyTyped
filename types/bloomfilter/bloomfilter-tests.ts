import { BloomFilter } from 'bloomfilter';
function test_bloomfilter() {
    const m: number = 10;
    const k: number = 2;

    const bloomFilter = new BloomFilter(m, k);
    const array: Int32Array[] = bloomFilter.buckets;
    const length: number = bloomFilter.buckets.length;
    bloomFilter.add('someString');
    const test: boolean = bloomFilter.test('someString');
}

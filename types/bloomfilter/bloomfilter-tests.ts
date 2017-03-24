import { BloomFilter } from './index';
function test_bloomfilter() {
    const m: number = 10;
    const k: number = 2;

    let bloomFilter = new BloomFilter(m, k);
    let array: Array<Int32Array> = bloomFilter.buckets;
    let length: number = bloomFilter.buckets.length;
    bloomFilter.add('someString');
    let test: boolean = bloomFilter.test('someString');
}

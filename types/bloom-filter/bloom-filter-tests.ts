import BloomFilter = require('bloom-filter');

const numElements = 3;
const falsePositiveRate = 0.01;
const filter = BloomFilter.create(numElements, falsePositiveRate);

// elements
const a = Buffer.from('99108ad8ed9bb6274d3980bab5a85c048f0950c8', 'hex');
const c = Buffer.from('b5a2c786d9ef4658287ced5914b37a1b4aa32eee', 'hex');

// insert elements
// $ExpectType void
filter.insert(a);

// $ExpectType boolean
!filter.contains(c);

// reinstantiate from an object
const serialized = filter.toObject();
const woahFilter = new BloomFilter(serialized);

// initialize directly
const newFilter = new BloomFilter({
  vData: Buffer.from('123', 'hex'), // the data of the filter
  nHashFuncs: 3, // the number of hash functions to use
  nTweak: 2147483649, // the seed used for the hash fuctions
  nFlags: 0 // flags used to update the filter when matched
});

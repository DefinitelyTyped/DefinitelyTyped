import FastBitSet = require('fastbitset');

const bitSet = new FastBitSet();

bitSet.add(1);
bitSet.has(1);
bitSet.add(2);

bitSet.add(10);
bitSet.array();

let otherBitSet = new FastBitSet([1, 2, 3, 10]);

otherBitSet.difference(bitSet);
otherBitSet.union_size(bitSet);
otherBitSet.union(bitSet);
otherBitSet.new_union(bitSet);
otherBitSet.new_intersection(bitSet);
otherBitSet.intersection_size(bitSet);
otherBitSet.difference_size(bitSet);
otherBitSet.intersects(bitSet);
otherBitSet.intersection(bitSet);

otherBitSet = bitSet.clone();
otherBitSet.equals(bitSet);
otherBitSet.forEach(value => value);
otherBitSet.trim();

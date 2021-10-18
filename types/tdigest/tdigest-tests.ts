import { Digest } from 'tdigest';

const digest = new Digest();

for (let i = 0; i < 60; ++i) digest.push(60); // #ExpectType void
for (let i = 0; i < 35; ++i) digest.push(30); // #ExpectType void
for (let i = 0; i < 5; ++i) digest.push(10); // #ExpectType void

digest.percentile(0.5); // #ExpectType number
digest.percentile(0.1); // #ExpectType number
digest.percentile(0.01); // #ExpectType number

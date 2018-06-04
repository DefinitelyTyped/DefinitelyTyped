import XXH from 'xxhashjs';

// examples adapted from https://github.com/pierrec/js-xxhash
const h1 = XXH.h32('abcd', 0xABCD).toString(16);

const H = XXH.h32(0xABCD);
const h2 = H.update('abcd').digest().toString(16);

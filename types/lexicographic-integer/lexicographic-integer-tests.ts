import { pack, unpack } from 'lexicographic-integer';

const a = 1e55;
const b = 1.0000000000001e55;
const ha = pack(a, 'hex');
const hb = pack(b, 'hex');
console.log(ha, hb);

const num = 555;
const encoded = pack(num, 'hex');
const decoded1: number = unpack(encoded);
console.log(decoded1);

let prev: string | number[] = pack(0);
let n: number;
let skip = 1;
for (n = 1; n < Number.MAX_VALUE; n += skip) {
    const cur = pack(n, 'hex');
    if (cur <= prev.toString()) break;
    prev = cur;
    skip = 1 + Math.pow(245, Math.ceil(Math.log(n) / Math.log(256)));
}
console.log(n === Infinity);

const decoded2: number = unpack(prev);
console.log(decoded2);

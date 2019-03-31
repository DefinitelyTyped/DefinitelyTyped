import { UINT32 } from "cuint";

const u = UINT32(1, 2);
const d = u.fromBits(4, 5, 6);
d.add(u.multiply(d)).rotl(17).subtract(u).shiftRight(123);

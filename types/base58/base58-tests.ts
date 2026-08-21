import { base58_to_int, decode, encode, int_to_base58 } from "base58";

const encodedStr1 = encode(2048);
const encodedStr2 = int_to_base58(2048);
const decodedNum1 = decode("Bj");
const decodedNum2 = base58_to_int("Bj");
const decodedNum3 = decode(encode(2048));

// @ts-expect-error
const errEncodedStr1 = encode("Bj");
// @ts-expect-error
const errEncodedStr2 = int_to_base58("Bj");
// @ts-expect-error
const errDecodedNum1 = decode(2048);
// @ts-expect-error
const errDecodedNum2 = base58_to_int(2048);

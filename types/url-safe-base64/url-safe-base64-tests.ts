import { decode, encode, isBase64, isUrlSafeBase64, trim } from 'url-safe-base64';

const safe = encode('A/B+C==');
// > 'A-B_C..'
trim(safe);
// > 'A-B_C'
const base64 = decode(safe);
// > 'A/B+C=='
isBase64(base64);
// > true
isBase64(safe);
// > false
isUrlSafeBase64(base64);
// > false
isUrlSafeBase64(safe);
// > true

import { fromMs, fromS, toMs, toS } from 'hh-mm-ss';

// $ExpectType string
const ms = fromMs(60000);
// $ExpectType string
const msWithFormat = fromMs(60000, 'mm:ss');

// $ExpectType string
const s = fromS(3000);
// $ExpectType string
const sWithFormat = fromS(3000, 'hh:mm:ss');

// $ExpectType number
const ms2 = toMs('12:23:34');
// $ExpectType number
const msWithFormat2 = toMs('12:23:34', 'mm:ss');

// $ExpectType number
const s2 = toS('12:23:34');
// $ExpectType number
const sWithFormat2 = toS('12:23:34', 'mm:ss');

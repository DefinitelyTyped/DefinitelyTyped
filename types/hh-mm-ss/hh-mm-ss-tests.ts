import { fromMs, fromS, toMs, toS } from 'hh-mm-ss';

const ms = fromMs(60000);
const msWithFormat = fromMs(60000, 'mm:ss');

const s = fromS(3000);
const sWithFormat = fromS(3000, 'hh:mm:ss');

const ms2 = toMs('12:23:34');
const msWithFormat2 = toMs('12:23:34', 'mm:ss');

const s2 = toS('12:23:34');
const sWithFormat2 = toS('12:23:34', 'mm:ss');

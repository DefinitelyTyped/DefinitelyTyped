import fs = require('graceful-fs');
import * as fs2 from 'graceful-fs';

const str = '';
const buf = new Buffer('');

fs.renameSync(str, str);
fs2.chmodSync(buf, 1);
